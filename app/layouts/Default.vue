<script setup lang="ts">
import KTestDefaultRoleCenter from '~/components/TestingComponents/KTestDefaultRoleCenter.vue';
</script>
<template>
  <NuxtLoadingIndicator />
  <header>
    <KNavbar>
      <template #left>
        Left
      </template>
      <template #center>
        <KNavbarLink to="/">Home</KNavbarLink>
        <KNavbarLink to="/">Buttons</KNavbarLink>
        <KNavbarLink to="/inputs" style="color:var(--theme-1-color)">Inputs</KNavbarLink>
        <KNavbarLink to="/badges">Badges</KNavbarLink>
        <KNavbarLink to="/horizontal-menu">Horizontal Menu</KNavbarLink>
        <KNavbarLink to="/tables">Tables</KNavbarLink>
        <KNavbarLink to="/navbars">Navbars</KNavbarLink>
      </template>
      <template #right>
        Right
      </template>
    </KNavbar>
  </header>
  <main class="relative sm:flex w-full">
    <!--Sidebar-->
    <div id="sidebar" class="z-40 sm:30 sm:mt-11 bg-gray-100 w-50 sm:w-48 hidden sm:block absolute sm:relative bg-theme-2">
        <KTestDefaultRoleCenter/>
    </div>
    <!--body-->
    <div :class="['w-full bg-gray-200']">
      <div class="text-gray-900 pt-2 mt-12 pl-1 pr-0.5 sm:pl-2 sm:pr-1 min-h-screen">
        <NuxtPage />
      </div>
    </div>
  </main>
</template>