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
            <KNavbarLink to="/inputs">Inputs</KNavbarLink>
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
  <main class="p-4">
    <NuxtPage/>
  </main>
</template>