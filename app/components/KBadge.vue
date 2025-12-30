<template>
  <span
    class="inline-flex items-center rounded-full font-medium transition justify-center"
    :class="[
      variantClasses[variant ?? 'default'],
      sizeClasses[size ?? 'sm']
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
type Variant = 'default' | 'primary' | 'secondary' | 'danger' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = defineProps<{
  variant?: Variant
  size?: Size
}>()

const variantClasses: Record<Variant, string> = {
  default: 'bg-gray-200 text-gray-800',
  primary: 'bg-blue-100 text-blue-700',
  secondary: 'bg-green-100 text-green-700',
  danger: 'bg-red-100 text-red-700',
  ghost: 'bg-transparent text-gray-600'
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base'
}
</script>
