<template>
    <main class="not-found-grid">
        <slot />
    </main>
</template>
<style scoped>
.not-found-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100vh;
    gap: 0px 0px;
    grid-template-areas: ".";
    justify-content: center;
    align-items: center;
}
</style>
