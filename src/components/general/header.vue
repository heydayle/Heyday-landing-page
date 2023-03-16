<script setup lang="ts">
import { useCommonStore } from "@/stores/common";
import { HeaderItems } from "@/utils/enums";

const commonStore = useCommonStore()

</script>
<template>
  <header
      class="fixed z-2 from-black to-transparent bg-gradient-to-b h-10 duration-200 w-full p-4"
      :class="{'h-26' : commonStore.isShowHeader}"
  >
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
</template>