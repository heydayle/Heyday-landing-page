<script setup lang="ts">
import { useCommonStore } from "@/stores/common";
import { HeaderItems } from "@/utils/enums";
import {computed, onMounted} from "vue";
import Search from "@/components/general/search.vue";
import Category from "@/components/general/category.vue";
const commonStore = useCommonStore()

const isShowMainLight = computed(() => !commonStore.isShowHeader && !commonStore.isEnableSearch)
onMounted(() => {
  // console.log(process.env)
})
</script>

<template>
    <Search v-show="commonStore.isEnableSearch" />
    <main v-if="isShowMainLight" class="m-auto flex-1 animate-flashLightClassic">
      <h1 class="
      text-[8rem] text-white text-center
      font-extrabold text-transparent bg-clip-text
      bg-gradient-to-b from-white/30 to-black
      relative z-2"
      >
        <span style="text-shadow: rgba(0,0,0,0.3) -3px 4px;">HEYDAY</span>
      </h1>
      <div v-if="!commonStore.isEnableNote" class="flex justify-center space-x-4 text-white px-10">
        <button
            v-for="(item, index) in HeaderItems" :key="index"
            class="group relative z-2 transition flex flex-col text-md font-bold"
        >
          <a :href="item.link" class="hover:bg-transparent">
            <span class="shadow-inner shadow-xl text-white">{{ item.title }}</span>
            <div class="w-0 h-0.25 bg-transparent duration-400 group-hover:(w-full bg-white)"/>
          </a>
        </button>
      </div>
      <div class="flex justify-center pt-10">
        <button
            class="m-auto text-center animate__animated animate__slower "
            :class="commonStore.isEnableNote ? 'animate__backOutUp' : 'animate__backInUp'"
            @click="commonStore.enableNote(commonStore.isEnableNote)"
        >
          <img width="30" height="30" src="@/assets/icons/icon-ArrowUp.png">
        </button>
      </div>
    </main>
    <div
        class="fixed transform duration-800 w-full text-center"
        :class="commonStore.isEnableNote ? 'bottom-[92vh] z-4 rotate-180 opacity-100' : '-bottom-20 opacity-0'"
    >
      <button
          class="animate__animated animate__infinite animate__slower m-auto p-4"
          @click="commonStore.enableNote(commonStore.isEnableNote)">
        <img src="@/assets/icons/icon-ArrowUp.png" class="w-6 h-3 animate-toUp">
      </button>
    </div>
    <Category v-if="commonStore.isEnableNote" />
</template>
