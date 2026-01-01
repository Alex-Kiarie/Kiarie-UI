<template>
    <div>
        <NuxtLink :to="to" class="flex">
            <div class="flex items-center ml-1">
                <img :src="appConfig != undefined ? appConfig.client.logoPath:'https://atlantadumptruckhauling.com/wp-content/uploads/2024/02/dummy-logo-5b.png'" class="h-10 w-20" alt="client logo">
                <div class="ml-2 font-bold uppercase text-xs sm:text-sm text-gray-700 hidden sm:flex"><span
                        class="border-r border-r-gray-700 mr-1"></span>{{ appConfig?.solution.name }}</div>
            </div>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
    const testAppConfig = useKTestAppConfig()
    const props = withDefaults(defineProps<{
        to?: string,
        appConfig?:Record<string,any>
    }>(),
    {
        to:''
    }
)
</script>