<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useCommonStore } from "@/stores/common";
const commonStore = useCommonStore()

</script>

<template>
  <header class="fixed from-black to-transparent bg-gradient-to-b h-10 duration-200 w-full p-4" :class="{'h-26' : commonStore.isShowHeader}">
    <div v-if="commonStore.isShowHeader" class="duration-200 opacity-100">
      <div class="flex space-x-4 text-white px-10">
        <button v-for="item in 5" class="text-md font-bold">
          Link {{ item }}
        </button>
      </div>
      <button @click="commonStore.onHideHeader">
        <img src="@/assets/icons/icon-ArrowUp.png" class="w-6 h-3">
      </button>
    </div>
    <div v-else class="duration-200">
      <button @click="commonStore.onShowHeader">
        <img src="@/assets/icons/icon-Menu.png" class="w-6 h-6">
      </button>
    </div>
  </header>
  <RouterView />
  <div>
    <img class="absolute top-0 left-1/2 transform -translate-x-1/2" src="@/assets/icons/light_main.png" alt="">
  </div>
</template>
