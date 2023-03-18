<script setup lang="ts">
import { TabsItems, TabsType } from "@/utils/enums";
import ElementBorderBottom from "@/components/shared/ElementBorderBottom.vue"
import {computed, ref} from "vue";

const tab = ref(1)
const isProject = computed(() => tab.value === TabsType.Projects)
const changeTab = (value: number) => {
  tab.value = value
}
</script>
<template>
  <div class="absolute z-3 flex flex-col flex-1 w-full top-10 space-y-6 m-auto p-10">
    <div class="flex m-auto space-x-4 animate__animated animate__fadeInUp">
      <button
          v-for="(item, index) in TabsItems" :key="index"
          class="group relative z-2 transition flex flex-col text-md font-bold"
          @click="changeTab(item.value)"
      >
        <div class="shadow-inner shadow-xl text-white">{{ item.title }}</div>
        <div
            class="w-0 h-0.25 bg-transparent duration-400 group-hover:(w-full bg-white)"
            :class="{'!w-full bg-white' : item.value === tab}"
        />
      </button>
    </div>
    <div v-if="tab !== 0" class="flex-1 animate__animated animate__fadeInUp bg-snowDrift-500 rounded-xl p-2 overflow-auto max-h-[78vh]">
      <div v-if="isProject" class="grid grid-cols-3">
        <div v-for="(item, index) in 12" :key="index" class="group p-4 cursor-pointer">
          <ElementBorderBottom tag="h1" :title="item"/>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius excepturi libero nisi odio quaerat recusandae repellendus saepe tenetur vero? Ea mollitia porro sequi. Consectetur ex maiores nisi non repellendus! </p>
          <div class="space-x-2">
            <span class="inline-block rounded-full px-4 pt-0.5 pb-1 mt-2 border border-black">vue 3</span>
            <span class="inline-block rounded-full px-4 pt-0.5 pb-1 mt-2 border border-black">vue 3</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>