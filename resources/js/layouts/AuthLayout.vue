<template>
    <div class="auth-grid">
        <main>
            <slot />
        </main>
        <div class="h-100 w-100 bg-primary"></div>
    </div>
</template>
<style scoped>
.auth-grid {
    display: grid;
    grid-template-columns: repeat(2, 50vw);
    grid-template-rows: 100vh;
    gap: 0px 0px;
    grid-template-areas: ".";
    justify-content: center;
    align-items: center;
}
@media (max-width: 991px) {
    .auth-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 100vh;
        justify-content: center;
        align-items: center;
    }
}
</style>
