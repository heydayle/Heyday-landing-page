<script setup lang="ts">
import { HeaderItems } from "@/utils/enums";
</script>
<template>
  <div class="absolute z-3 flex flex-col w-full top-16 space-y-6 m-auto p-6 ">
    <div class="flex m-auto space-x-4">
      <button
          v-for="(item, index) in HeaderItems" :key="index"
          class="group relative z-2 transition flex flex-col text-md font-bold"
      >
        <a :href="item.link" class="hover:bg-transparent">
          <div class="shadow-inner shadow-xl text-white">{{ item.title }}</div>
          <div class="w-0 h-0.25 bg-transparent duration-400 group-hover:(w-full bg-white)"/>
        </a>
      </button>
    </div>
    <div class="flex-1 grid grid-cols-3 bg-snowDrift-500 rounded-xl">
      <div v-for="item in 6" class="group p-4 cursor-pointer">
        <div class="flex flex-col pb-2">
          <h1 class="pb-1 text-lg font-medium">Name project</h1>
          <div class="w-0 h-0.25 duration-400 group-hover:(w-full bg-black)"/>
        </div>
        <p> Description </p>
        <div>tags</div>
      </div>
    </div>
  </div>
</template>