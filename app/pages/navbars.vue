<template>
    <h1 class="font-semibold my-2">Navbars</h1>
    <div class="grid grid-cols-8 gap-2">
        <KNavbar>
            <template #left>
                Left
            </template>
            <template #center>
                <KNavbarLink to="/">Home</KNavbarLink>
            </template>
            <template #right>
                Right
            </template>
        </KNavbar>
    </div>
</template>