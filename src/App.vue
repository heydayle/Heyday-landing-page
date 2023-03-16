<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/general/header.vue";
import Overlay from "@/components/general/overlay.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Overlay />
</template>
