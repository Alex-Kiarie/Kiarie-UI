<script setup lang="ts">
defineProps<{
  to: string
  active?: boolean
  total?: number
}>()
</script>

<template>
  <div
    class="rounded-t-md flex-shrink-0 text-xs font-semibold"
    :class="active ? 'bg-theme-1' : 'bg-theme-2'"
  >
    <NuxtLink :to="to" class="flex items-center gap-1 px-1 py-0.5">
      <slot />

      <span
        v-if="total && total > 0"
        class="rounded-full px-1 text-xs"
        :class="active
          ? 'bg-white text-red-500'
          : 'bg-red-500 text-white'"
      >
        {{ total }}
      </span>
    </NuxtLink>
  </div>
</template>
