<template>
    <div>
        <div>
            <h1 class="font-semibold my-2">Buttons</h1>
            <div class="grid grid-cols-8 gap-2">
                <KButton variant="default">default variant</KButton>
                <KButton variant="primary">primary variant</KButton>
                <KButton variant="secondary">secondary variant</KButton>
                <KButton variant="danger">danger variant</KButton>
                <KButton variant="ghost">ghost variant</KButton>
                <KButton class="bg-teal-500">Custom variant</KButton>
            </div>
        </div>
        <div>
            <h1 class="font-semibold my-2">Inputs</h1>
            <div class="grid grid-cols-8 gap-2">
                <KInput v-model="name" variant="default" size="sm" placeholder="default" />
                <KInput v-model="name" variant="primary" size="sm" placeholder="primary" />
                <KInput v-model="name" variant="secondary" size="sm" placeholder="secondary" />
                <KInput v-model="name" variant="danger" size="sm" placeholder="danger" />
                <KInput v-model="name" variant="ghost" size="sm" placeholder="ghost" />
                <KInput v-model="name" class="border border-teal-500" size="sm" placeholder="customVariant" />
            </div>
        </div>
        <div>
            <h1 class="font-semibold my-2">Badges</h1>
            <div class="grid grid-cols-8 gap-2">
                <KBadge>Default</KBadge>
                <KBadge variant="primary">primary</KBadge>
                <KBadge variant="danger" size="sm">danger</KBadge>
                <KBadge variant="ghost">ghost</KBadge>
            </div>
        </div>
        <div>
            <h1 class="font-semibold my-2">Horizontal Menu</h1>
            <div>
                <HorizontalMenu-HMContainer>
                    <HorizontalMenuHMItem to="/">dd</HorizontalMenuHMItem>
                    <HorizontalMenuHMItem to="/">ww</HorizontalMenuHMItem>
                    <HorizontalMenuHMItem to="/">sss</HorizontalMenuHMItem>
                </HorizontalMenu-HMContainer>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const name = ref("")
</script>