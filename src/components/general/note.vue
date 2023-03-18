<script setup lang="ts">
import { TabsItems, TabsType, LanguageColor} from "@/utils/enums";
import ElementBorderBottom from "@/components/shared/ElementBorderBottom.vue"
import {computed, onMounted, ref} from "vue";
import axios from "axios";

const tab = ref(1)
const isProject = computed(() => tab.value === TabsType.Projects)
const repositories = ref([])
const changeTab = (value: number) => {
  tab.value = value
}
const fetchRepoList = async () => {
  const reposApi ='users/heydayle/repos'
  const response = await axios.get('https://api.github.com/'+ reposApi)
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
          <div v-if="item.language" :key="index" class="group p-4 cursor-pointer border border-gray-100 rounded-xl hover:border-gray-400">
          <div class="flex justify-between">
            <ElementBorderBottom tag="h1" :title="item.name"/>
            <a :href="item.svn_url" class="hover:bg-transparent" :title="`go ${item.name}`">
              <img class="w-4 h-4" src="@/assets/icons/icon-Link.png" alt="">
            </a>
          </div>
          <p class="text-gray-400 pb-2">{{item.clone_url}}</p>
          <p> {{item.description}} </p>
          <div class="space-x-2">
            <span v-for="topic in item.topics" class="inline-block rounded-full px-4 pt-0.5 pb-1 mt-2 border border-black text-xs">{{topic}}</span>
          </div>
          <div class="flex align-center space-x-2">
            <div class="h-2 w-2 rounded-full my-auto" :style="`background: ${LanguageColor[item.language]}`"/>
            <div>{{item.language}}</div>
          </div>
          <div class="space-x-2">
            <a v-if="item.homepage" :href="item.homepage" target="_blank">page</a>
          </div>
        </div>
        </template>
      </div>
    </div>
  </div>
</template>