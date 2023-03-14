<script setup lang="ts">
import { useCommonStore } from "@/stores/common";
import { HeaderItems } from "@/utils/enums";
const commonStore = useCommonStore()

</script>

<template>
  <main class="m-auto flex-1">
    <h1 class="
      text-[8rem] text-white text-center
      font-extrabold text-transparent bg-clip-text
      bg-gradient-to-b from-white/30 to-black
      animate-flashLightClassic relative z-10"
    >
      <span style="text-shadow: rgba(0,0,0,0.3) -3px 4px;">HEYDAY</span>
    </h1>
    <div class="flex justify-center space-x-4 text-white px-10">
      <button
          v-for="(item, index) in HeaderItems" :key="index"
          class="group animate-flashLightClassic transition flex flex-col text-md font-bold"
      >
        <a :href="item.link" class="hover:bg-transparent">
          <div class="shadow-inner shadow-xl">{{ item.title }}</div>
          <div class="w-0 h-0.25 bg-transparent duration-400 group-hover:(w-full bg-white)"/>
        </a>
      </button>
    </div>
  </main>
</template>
