<template>
  <select
    :value="modelValue"
    @input="updateValue"
    ref="select"
    :class="[
      formMode === 'view' ? '!bg-gray-200' : '',
      isTomSelect ? '' : 'border border-gray-200 p-2',
      'cursor-pointer shadow appearance-none w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:opacity-20 rounded-sm'
    ]"
    :readonly="formMode === 'view'"
    :disabled="formMode === 'view'"
  >
    <slot></slot>
  </select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Props
const props = defineProps<{
  modelValue: string
  formMode?: string
  isTomSelect?: boolean
}>()

// Emits
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// Refs
const select = ref<HTMLSelectElement | null>(null)

// Methods
const focus = () => {
  select.value?.focus()
}

// Input handler
const updateValue = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>
