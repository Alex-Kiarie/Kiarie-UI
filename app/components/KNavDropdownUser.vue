<template>
  <div
    ref="dropdownRef"
    class="relative"
    @mouseenter="open"
    @mouseleave="close"
  >
    <!-- Trigger -->
    <button
      @click.stop="toggle"
      class="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-100 transition"
    >
      <!-- Avatar -->
      <div
        class="h-8 w-8 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center text-sm font-semibold text-white"
      >
        <img
          v-if="avatarUrl"
          :src="avatarUrl"
          alt="User avatar"
          class="h-full w-full object-cover"
        />
        <span v-else>{{ initials }}</span>
      </div>

      <!-- Name -->
      <span class="hidden sm:block text-sm font-medium text-gray-700">
        {{ name }}
      </span>

      <!-- Caret -->
      <svg
        class="h-4 w-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isOpen" class="absolute right-0 mt-0 p-1 w-40 rounded-lg bg-white border border-gray-300 shadow-lg z-50">
        <NuxtLink to="/profile" :class="[dropdownMenuClass]">
           <KIconsUserCircle class="w-5 h-5 pr-1" /> Profile
        </NuxtLink>
        <NuxtLink to="/auth/change-password" :class="[dropdownMenuClass]">
          <KIconsPadlock class="w-5 h-5 pr-1" /> Change Password
        </NuxtLink>
        <button
          @click="$emit('logout')"
          :class="[dropdownMenuClass]"
        >
          <KIconsLogout class="w-5 h-5 pr-1" /> Logout
        </button>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  name: string
  avatarUrl?: string
}>()
const emits = defineEmits(['logout'])

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const dropdownMenuClass = "text-gray-900 group flex w-full items-center px-2 py-2 text-sm hover:bg-gray-100 rounded-md"

/* -----------------------------
   Open / Close logic
------------------------------ */
const open = () => (isOpen.value = true)
const close = () => (isOpen.value = false)
const toggle = () => (isOpen.value = !isOpen.value)

/* -----------------------------
   Click outside handler
------------------------------ */
const handleClickOutside = (event: MouseEvent) => {
  if (!dropdownRef.value) return

  if (!dropdownRef.value.contains(event.target as Node)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

/* -----------------------------
   Logout
------------------------------ */
const logout = async () => {
  // Example:
  // const { clearAuthUser } = useAuth()
  // clearAuthUser()

  close()
  await navigateTo('/login')
}

/* -----------------------------
   Avatar initials fallback
------------------------------ */
const initials = computed(() =>
  props.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
)
//

</script>

