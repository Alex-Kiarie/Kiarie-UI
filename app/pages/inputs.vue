<template>
    <h1 class="font-semibold my-2">Inputs</h1>
    <div class="grid grid-cols-8 gap-2">
        <KInput v-model="name" variant="default" size="sm" placeholder="default" />
        <KInput v-model="name" variant="primary" size="sm" placeholder="primary" />
        <KInput v-model="name" variant="secondary" size="sm" placeholder="secondary" />
        <KInput v-model="name" variant="danger" size="sm" placeholder="danger" />
        <KInput v-model="name" variant="ghost" size="sm" placeholder="ghost" />
        <KInput v-model="name" class="border border-teal-500" size="sm" placeholder="customVariant" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const name = ref("")
</script>