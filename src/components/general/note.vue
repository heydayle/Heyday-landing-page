<script setup lang="ts">
import type TypeLanguage from "@/utils/interface/language";
import type { IRepository } from "@/utils/interface/repository";
import { TabsItems, TabsType, LanguageColor } from "@/utils/enums";
import ElementBorderBottom from "@/components/shared/ElementBorderBottom.vue"
import { computed, onMounted, ref } from "vue";
import axios from "axios";

// declare const process: {
//   env: {
//     VITE_BASE_API_URL: string
//   }
// };

const tab = ref(0)
const RepoSchema:IRepository = {
  name: '',
  language: 'Vue',
  svn_url: '',
  clone_url: '',
  description: '',
  homepage: '',
  topics: []
}
const isProject = computed(() => tab.value === TabsType.Projects)
const repositories = ref([RepoSchema])
const changeTab = (value: number) => {
  tab.value = value
}
const getColor = (lang: TypeLanguage): string => {
  return LanguageColor[lang]
}
const fetchRepoList = async () => {
  const reposURL = 'users/heydayle/repos?sort=pushed_at'
  const response = await axios.get( process.env.VITE_BASE_API_URL + reposURL)
  repositories.value = response.data
}
onMounted(() => {
  fetchRepoList()
})
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
      <div v-if="isProject" class="grid grid-cols-3 gap-4">
        <template v-for="(item, index) in repositories">
          <div
              v-if="item.language"
              :key="index"
              class="group p-4 cursor-pointer duration-500 border border-gray-100 rounded-xl hover:border-gray-400"
          >
          <div class="flex justify-between">
            <ElementBorderBottom tag="div" :style-options="{ title: 'text-gray-600' }" :title="item.name"/>
            <div class="flex space-x-2">
              <a :href="item.svn_url" class="hover:bg-transparent">
                <img class="w-4 h-4" src="@/assets/icons/icon-Github.png" alt="">
              </a>
              <a v-if="item.homepage" :href="item.homepage" class="hover:bg-transparent">
                <img class="w-4 h-4" src="@/assets/icons/icon-Link.png" alt="">
              </a>
            </div>
          </div>
          <p class="text-gray-400 text-sm pb-2">{{ item.clone_url || '' }}</p>
          <p> {{ item.description || '' }} </p>
          <div class="flex mt-4 align-center space-x-2">
            <div class="h-2 w-2 rounded-full my-auto" :style="`background: ${getColor(item.language)}`"/>
            <div>{{item.language}}</div>
          </div>
          <div class="space-x-2">
            <span
                v-for="topic in item.topics"
                class="inline-block rounded-full px-2 pt-0.5 pb-1 mt-2 border border-gray-400 text-xs text-gray-400">
              {{topic}}
            </span>
            </div>
        </div>
        </template>
      </div>
    </div>
  </div>
</template>