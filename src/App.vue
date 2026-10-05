<script setup lang="ts">
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
</script>

<template>
  <div id="layout">
    <HeaderApp />

    <!-- Area Isian/Content Berganti Otomatis via Router -->
    <main>
      <router-view />
    </main>

    <FooterApp />
  </div>
</template>

<style scoped></style>