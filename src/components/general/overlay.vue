<script setup lang="ts">
import { useCommonStore } from "@/stores/common";
import { computed } from "vue";

const commonStore = useCommonStore()
const isShowMainLight = computed(() => !commonStore.isShowHeader && !commonStore.isEnableSearch)
</script>
<template>
  <div>
    <img v-if="isShowMainLight" class="absolute z-9 animate-flashLightClassic duration-300 top-0 left-1/2 transform -translate-x-1/2" src="@/assets/icons/light_main.png" alt="">
    <img v-if="commonStore.isShowHeader" class="absolute z-9 animate-flashLight duration-300 top-0 left-1/2 transform -translate-x-1/2" src="@/assets/icons/light-header.png" alt="">
    <img v-if="commonStore.isEnableSearch" class="absolute z-9 animate-flashLightClassic duration-300 -bottom-40 left-1/2 transform -translate-x-1/3" src="@/assets/icons/light-search.png" alt="">
    <div v-if="!isShowMainLight" class="w-full h-[100vh] absolute inset-0 z-8 bg-black"/>
  </div>
</template>