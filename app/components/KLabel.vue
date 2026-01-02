<template>
    <label class="block font-medium text-sm text-gray-700 rounded-sm px-1">
        <span v-if="value" class="flex items-center">
            {{ props.value }}
            <span class="text-red-500" title="Required">{{props.showMandatory?'*':''}}</span>
            <KLoader v-if="showLoader" class="ml-1" />
        </span>
        <span v-else><slot /></span>
    </label>
</template>
<script setup lang="ts">
import KLoader from './KLoader.vue';

    const props = defineProps<{
        value?:{type:string,default:""},
        showMandatory?:{type:boolean,default:false},
        showLoader?:{type:boolean,default:false},
    }>()
</script>