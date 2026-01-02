<template>
    <div>
        <div v-if="!isOneLine">
            <k-label class="mb-1" :value="props.label" :showMandatory="props.showMandatory" :showLoader="props.showLoader"></k-label>
            <div>
                <slot></slot>
            </div>
        </div>
        <div v-else>
            <div class="flex gap-1">
                <div class="grid grid-cols-1 sm:grid-cols-2">
                    <k-label class="flex grow" :value="props.label" :showMandatory="props.showMandatory" :showLoader="props.showLoader"></k-label>
                    <slot></slot>
                </div>
            </div>
        </div>
        <div v-if="props.valErrors != undefined" class="mt-0.5">
            <k-label class="!bg-white !text-red-500 !text-xs !font-normal !rounded-none">{{props.valErrors}}</k-label>
        </div>
        <!-- <span v-if="props.maxLength != undefined" class="!pt-0 !text-xs">{{maxLength[0]-maxLength[1]}} characters remaining</span> -->
    </div>
</template>
<script setup lang="ts">
import KLabel from './KLabel.vue';

    const props = defineProps<{
        label?:{type:string,default:""},
        valErrors?:{type:Array<any>,default:[]},
        showMandatory?:{type:boolean,default:false},
        showLoader?:{type:boolean,default:false},
        isOneLine?:{type:boolean,default:false},
        maxLength?:{type:number,default:null},
    }>()
</script>