<template>
  <div>
    <textarea
      :value="modelValue"
      @input="updateValue"
      ref="textarea"
      :class="[
        formMode === 'view' ? '!bg-gray-200' : '',
        classx !== '' ? classx : '',
        'shadow appearance-none border border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:opacity-40'
      ]"
      :readonly="formMode === 'view'"
    >
      <slot></slot>
    </textarea>

    <span v-if="maxLength != undefined" class="!pt-0 !text-xs">
      {{ maxLength - modelValue.length }} characters remaining
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// Props
const props = defineProps<{
  modelValue: string
  formMode?: string
  required?: string
  classx?: string
  maxLength?: number | null
}>()

// Emits
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// Refs
const textarea = ref<HTMLTextAreaElement | null>(null)

// Methods
const focus = () => {
  textarea.value?.focus()
}

// Input handler
const updateValue = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  let value = target.value

  // Enforce maxLength
  if (props.maxLength != undefined && value.length > props.maxLength) {
    value = value.substring(0, props.maxLength)
  }

  emit('update:modelValue', value)
}

// Watch modelValue to enforce maxLength if updated externally
watch(
  () => props.modelValue,
  (val) => {
    if (props.maxLength != undefined && val.length > props.maxLength) {
      emit('update:modelValue', val.substring(0, props.maxLength))
    }
  }
)
</script>
