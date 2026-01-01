<template>
  <tr
    class="border-b hover:bg-sky-200 focus:bg-sky-300 border-gray-300 cursor-pointer"
    :class="[
      index != undefined && index % 2 === 0 ? 'bg-white' : 'bg-gray-50',
      isSelected ? '!bg-sky-200' : '',
      props.class
    ]"
    @click="onRowClick"
    @dblclick="onRowDoubleClick"
  >
    <slot />
  </tr>
</template>

<script setup lang="ts">
// Props
const props = withDefaults(
  defineProps<{
    class?: string
    recId?: number | string | null
    index?: number | null
    isSelected?: boolean
    isDoubleClick?: boolean
  }>(),
  {
    class: '',
    recId: null,
    index: null,
    isSelected: false,
    isDoubleClick: true
  }
)

// Emits
const emit = defineEmits<{
  (
    e: 'OnRowClick',
    payload: {
      clickType: 'single' | 'single+control' | 'double'
      recId: number | string | null
      index: number | null
    }
  ): void
}>()

// Handlers
function onRowClick(event: MouseEvent) {
  if (props.index !== null && props.isDoubleClick) {
    emit('OnRowClick', {
      clickType: event.ctrlKey ? 'single+control' : 'single',
      recId: props.recId,
      index: props.index
    })
  }
}

function onRowDoubleClick() {
  if (props.index !== null && props.isDoubleClick) {
    emit('OnRowClick', {
      clickType: 'double',
      recId: props.recId,
      index: props.index
    })
  }
}
</script>
