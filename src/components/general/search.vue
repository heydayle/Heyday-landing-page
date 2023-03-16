<script setup lang="ts">
import { useCommonStore } from "@/stores/common";
const commonStore = useCommonStore()
</script>
<template>
  <div class="animate-flashLightClassic absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 w-full px-[28rem]"
  >
    <div class="group flex space-x-4 w-full">
      <button @click="commonStore.disableSearch" class="transform rotate-45 duration-300 group-hover:rotate-0">
        <img class="w-8" src="@/assets/icons/icon-Close.png">
      </button>
      <input class="w-120 h-12 animate-increase bg-transparent text-white text-xl px-6 pb-1 border border-white rounded-full focus-visible:outline-none" />
    </div>
  </div>
</template>