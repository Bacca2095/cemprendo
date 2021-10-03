<template>
  <div id="app">
    <svg-sprite />
    <transition name="fade" mode="out-in">
      <component :is="this.$route.meta.layout || 'div'">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </component>
    </transition>
  </div>
</template>
<style lang="scss">
@import "../assets/sass/app";

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

::-webkit-scrollbar {
  opacity: 0;
  width: 8px;
  height: 8px;
  border-radius: 1rem;
  background: transparent;
}

::-webkit-scrollbar:hover {
  opacity: 1;
}

:hover::-webkit-scrollbar-thumb {
  border-radius: 1rem !important;
  background-color: #65717c !important;
}
</style>
