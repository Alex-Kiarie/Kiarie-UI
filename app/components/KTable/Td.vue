<template>
    <td class="px-1 py-1 border-r border-gray-300 text-xs" :colspan="props.colspan != undefined?props.colspan:''">
        <span v-if="linkTo == undefined"><slot></slot></span>
        <span v-else>
            <<NuxtLink  :to="linkTo" class="text-blue-500 underline"><slot></slot></NuxtLink>
        </span>
    </td>
</template>
<script setup lang="ts">
    const props = defineProps<{
        colspan?:number,
        isBorder?:boolean,
        linkTo?:string
    }>();
</script>
