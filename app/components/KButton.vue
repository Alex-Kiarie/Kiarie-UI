<template>
    <button class="rounded font-medium transition" :class="[
      variantClasses[variant ?? 'default'],
      sizeClasses[size ?? 'sm']
    ]">
      <slot></slot>
    </button>
</template>
<script setup lang="ts">
  type Variant = 'default' | 'primary' | 'secondary' | 'danger' | 'ghost'
  type Size = 'sm' | 'md' | 'lg'
  const props = defineProps<{
    variant?: Variant,
    size?: Size
  }>()
  const variantClasses = {
    default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-green-600 text-white hover:bg-green-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    ghost: 'bg-transparent hover:bg-gray-100'
  }
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }
</script>