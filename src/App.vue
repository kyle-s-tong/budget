<script setup>
import TheNavigationBar from "@/components/TheNavigationBar.vue";
import "./index.css";
</script>

<template>
  <div class="h-screen relative flex flex-col items-center justify-center">
    <header class="absolute top-0 w-full z-10">
      <div>
        <TheNavigationBar />
      </div>
    </header>

    <RouterView class="w-5/6 h-full" />
  </div>
</template>
