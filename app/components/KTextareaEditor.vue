<template>
  <div>
    <ckeditor
      :editor="editor"
      :disabled="formMode !== 'edit' && formMode !== 'create'"
      v-model="editorData"
      ref="textarea"
      :config="editorConfig"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch} from 'vue'
import { Ckeditor } from '@ckeditor/ckeditor5-vue'
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  List,
  Paragraph,
  Undo,
  Alignment,
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar
} from 'ckeditor5'

import 'ckeditor5/ckeditor5.css'

// Props
const props = defineProps<{
  formMode?: string
  maxLength?: number | null
}>()

// Emits
const emit = defineEmits<{
  (e: 'editorData', value: string): void
}>()

// Refs
const textarea = ref<any>(null)
const editor = ref(ClassicEditor)
const editorData = ref('')

// Editor config
const editorConfig = ref({
  licenseKey: 'GPL',
  toolbar: [
    'undo', 'redo', '|',
    'bold', 'italic', '|',
    'bulletedList', 'numberedList', 'indent', 'outdent', '|',
    'insertTable', 'alignment'
  ],
  plugins: [
    Bold,
    Essentials,
    Heading,
    Indent,
    IndentBlock,
    Italic,
    List,
    Paragraph,
    Undo,
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    Alignment
  ],
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties'
    ],
    tableProperties: {
      alignment: 'left'
    },
    tableCellProperties: {
      // configuration here
    }
  }
})

// Focus method
const focus = () => {
  textarea.value?.focus()
}

// Watch editorData to emit serialized data
watch(editorData, (val) => {
  const serialized = val !== '' ? JSON.stringify(val) : ''
  emit('editorData', serialized)
})
</script>

<style scoped>
.ck-content ul,
.ck-content ol {
  padding-left: 20px !important; /* Adjust bullets/numbers */
}

.ck-content {
  min-height: 150px !important;
}
</style>
