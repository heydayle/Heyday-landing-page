<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed } from "vue";
import { useCommonStore } from "@/stores/common";
import { HeaderItems } from "@/utils/enums";

const commonStore = useCommonStore()
const isShowMainLight = computed(() => !commonStore.isShowHeader && !commonStore.isEnableSearch)
</script>

<template>
  <header class="fixed z-10 from-black to-transparent bg-gradient-to-b h-10 duration-200 w-full p-4" :class="{'h-26' : commonStore.isShowHeader}">
    <div v-show="commonStore.isShowHeader" class="flex duration-200 opacity-100">
      <button @click="commonStore.onHideHeader">
        <img src="@/assets/icons/icon-ArrowUp.png" class="w-6 h-3 animate-toUp">
      </button>
      <div class="flex space-x-4 text-white px-10">
        <button
            v-for="(item, index) in HeaderItems" :key="index"
            class="group animate-flashLight transition flex flex-col text-md font-bold"
        >
          <a :href="item.link" class="hover:bg-transparent">
            <div class="text-white">{{ item.title }}</div>
            <div class="w-0 h-0.25 bg-transparent duration-400 group-hover:(w-full bg-white)"/>
          </a>
        </button>
      </div>
    </div>
    <div v-show="!commonStore.isShowHeader" class="animate-toUp">
      <button @click="commonStore.onShowHeader">
        <img src="@/assets/icons/icon-Menu.png" class="w-6 h-6">
      </button>
    </div>
  </header>
  <RouterView v-if="isShowMainLight" />
  <div v-show="commonStore.isEnableSearch" class="animate-flashLightClassic absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 w-full px-[28rem]">
    <div class="group flex space-x-4 w-full">
      <button @click="commonStore.disableSearch" class="transform rotate-45 duration-300 group-hover:rotate-0">
        <img class="w-8" src="@/assets/icons/icon-Close.png">
      </button>
      <input class="w-120 h-12 animate-increase bg-transparent text-white text-xl px-6 pb-1 border border-white rounded-full focus-visible:outline-none" />
    </div>
  </div>
  <div>
    <img v-if="isShowMainLight" class="absolute z-9 animate-flashLightClassic duration-300 top-0 left-1/2 transform -translate-x-1/2" src="@/assets/icons/light_main.png" alt="">
    <img v-if="commonStore.isShowHeader" class="absolute z-9 animate-flashLight duration-300 top-0 left-1/2 transform -translate-x-1/2" src="@/assets/icons/light-header.png" alt="">
    <img v-if="commonStore.isEnableSearch" class="absolute z-9 animate-flashLightClassic duration-300 -bottom-40 left-1/2 transform -translate-x-1/3" src="@/assets/icons/light-search.png" alt="">
    <div v-if="!isShowMainLight" class="w-full h-[100vh] absolute inset-0 z-8 bg-black"/>
  </div>
</template>
