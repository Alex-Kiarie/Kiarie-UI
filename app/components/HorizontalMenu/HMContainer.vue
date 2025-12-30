<template>
  <div class="relative flex items-center overflow-hidden">
    <!-- Left -->
    <button
      class="scroll-button left bg-gray-300 hover:bg-gray-400 hover:text-white font-bold z-10"
      @click="scrollLeft"
    >
      <
    </button>

    <!-- Scroll content -->
    <div
      ref="scrollContainer"
      class="flex gap-1 ml-1 transition-transform duration-300 ease-out"
      :style="{ transform: `translateX(-${scrollAmount}px)` }"
    >
      <slot />
    </div>

    <!-- Right -->
    <button
      class="scroll-button right bg-gray-300 hover:bg-gray-400 hover:text-white font-bold z-10"
      @click="scrollRight"
    >
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const scrollContainer = ref<HTMLElement | null>(null)
const scrollAmount = ref(0)

const scrollStep = 200

const scrollLeft = () => {
  scrollAmount.value = Math.max(scrollAmount.value - scrollStep, 0)
}

const scrollRight = () => {
  if (!scrollContainer.value) return

  const containerWidth = scrollContainer.value.clientWidth
  const contentWidth = scrollContainer.value.scrollWidth
  const maxScroll = contentWidth - containerWidth

  scrollAmount.value = Math.min(
    scrollAmount.value + scrollStep,
    maxScroll
  )
}
</script>
