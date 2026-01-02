<template>
  <div :class="['relative py-0.5 border-t border-gray-500', isLast ? 'border-b border-gray-500' : '']">
    <div
      @click="toggle"
      class="flex items-center justify-between cursor-pointer pr-2 pl-0.5 py-1 text-xs leading-5 text-white gap-1 font-medium bg-theme-2 hover:rounded-md"
    >
      <span class="flex items-center gap-0.5">
        <slot name="caption" />
      </span>
      <IconsKChevronDownIcon v-if="!open" class="h-3 w-3 font-bold" />
      <IconsKChevronUpIcon v-else class="h-3 w-3 font-bold" />
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="open"
        class="w-full"
        :class="[widthClass, alignmentClasses]"
        style="display: none; padding-left:15px !important; width:100% !important"
      >
        <div
          class="roundedx-md ring-1x ring-blackx ring-opacity-5 border-l border-gray-500 pl-0.5 py-0.5"
          :class="contentClasses"
        >
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
/* Props */
const props = defineProps({
  align: {
    type: String,
    default: 'right',
  },
  width: {
    type: [String, Number],
    default: '48',
  },
  contentClasses: {
    type: [Array, String],
    default: () => [''],
  },
  active: {
    type: Boolean,
    default: false,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
})

/* State */
const open = ref(false)
const toggle = () => {
  open.value = !open.value
}

/* Lifecycle */
onMounted(() => {
  open.value = props.active === true
})

/* Computed */
const widthClass = computed(() => {
  return {
    '48': 'w-48',
  }[props.width.toString()]
})

const alignmentClasses = computed(() => {
  if (props.align === 'left') return 'origin-top-left left-0'
  if (props.align === 'right') return 'origin-top-right right-0'
  return 'origin-top'
})
</script>
