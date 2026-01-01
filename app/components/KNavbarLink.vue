<template>
    <NuxtLink :to="to" :class="['uppercase text-sm hover:text-blue-600',isActive? 'text-blue-600':'']"><slot></slot></NuxtLink>
</template>
<script setup lang="ts">
    import { useRouter } from 'vue-router';
    const props = defineProps<{
        to:string
    }>()
    const router = useRouter()
    //use computed so that isActive is updated/computed when currentRoute or props.to changes
    const isActive = computed<boolean>(()=>{
        return router.currentRoute.value.fullPath == props.to
    })
</script>