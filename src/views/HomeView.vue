<script setup lang="ts">
import { useCommonStore } from "@/stores/common";
const commonStore = useCommonStore()
</script>

<template>
  <main class="m-auto flex-1">
    <h1 class="
      text-[6rem] text-white text-center
      font-extrabold text-transparent bg-clip-text
      bg-gradient-to-b from-white/30 to-black
      shadow-2xl shadow-inner"
    >
      HEYDAY
    </h1>
    <div class="flex justify-center space-x-4 text-white px-10">
      <button v-for="item in 5" class="text-md font-bold">
        Link {{ item }}
      </button>
    </div>
  </main>
</template>
