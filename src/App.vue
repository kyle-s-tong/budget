<script setup>
import TheNavigationBar from "@/components/TheNavigationBar.vue";
import "./index.css";
</script>

<template>
  <header>
    <div>
      <TheNavigationBar />
    </div>
  </header>

  <RouterView class="w-full h-full" />
</template>
