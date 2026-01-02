<template>
    <NuxtLink :to="to"
        :class="['py-1 mb-0.5 text-xs leading-5 flex items-center gap-1 font-medium', isActive || active? 'link-theme-1 text-white rounded-md' : 'link-theme-2 hover:rounded-md', sidebarDropdown ? 'pl-0.5' : 'pl-0.5', isLast ? '' : 'border-b border-gray-500']">
        <slot></slot>
    </NuxtLink>
</template>
<script setup lang="ts">
    const router = useRouter();
const props = withDefaults(defineProps<{
    to: Record<string,any>,active?:boolean, sidebarDropdown?: boolean, isLast?: boolean
}>(),
{
    active: false, sidebarDropdown: false, isLast: false
}
)
//
const isActive = computed(() => {
    if(router.currentRoute.value.fullPath == props.to.path ||  router.currentRoute.value.name == props.to.name){
        return true
    }
    return false
})
</script>
