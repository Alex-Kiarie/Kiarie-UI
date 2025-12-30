
<template>
  <input
    :class="inputClasses"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :value="inputValue"
    @input="onInput"
  />
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

// Types
type Variant = 'default' |'primary' | 'secondary' | 'danger' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

// Props
const props = withDefaults(
  defineProps<{
    modelValue?: string
    variant?: Variant
    size?: Size
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    variant: 'default',
    size: 'md',
    modelValue: '',
    disabled: false
  }
)

// Emit for v-model
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

//Internal input value
const inputValue = ref(props.modelValue)
// Watch for external v-model changes
watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal
  }
)

// Computed Tailwind classes
const variantClasses = {
    default: 'border-gray-400 focus:ring-gray-400',
  primary: 'border-blue-500 focus:ring-blue-500',
  secondary: 'border-green-500 focus:ring-green-500',
  danger: 'border-red-500 focus:ring-red-500',
  ghost: 'border-transparent focus:ring-gray-200'
} as const

const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg'
} as const

const inputClasses = computed(() => {
  const variantClass = variantClasses[props.variant ?? 'default']
  const sizeClass = sizeClasses[props.size ?? 'md']
  return `rounded border shadow-sm focus:outline-none focus:ring-2 ${variantClass} ${sizeClass} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`
})

// Handle input event
function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  inputValue.value = target.value
  emit('update:modelValue', target.value)
}
</script>

