<script setup>
import TheNavigationBar from "@/components/TheNavigationBar.vue";
import "./index.css";
</script>

<template>
  <div class="h-screen relative">
    <header class="absolute w-full z-10">
      <div>
        <TheNavigationBar />
      </div>
    </header>

    <RouterView class="w-full h-full" />
  </div>
</template>
