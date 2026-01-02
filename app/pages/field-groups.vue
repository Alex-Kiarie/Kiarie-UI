<template>
    <h1 class="font-semibold my-2">Field Groups</h1>
    <div class="grid grid-cols-8 gap-2">
        <KFieldGroup label="Full Name" :showMandatory="true">
            <KInput v-model="name" variant="default" size="sm" placeholder="default" />
        </KFieldGroup>
    </div>
</template>
