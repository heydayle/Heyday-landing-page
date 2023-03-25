<script setup lang="ts">
import type TypeLanguage from "@/utils/interface/language";
import type { IRepository } from "@/utils/interface/repository";
import { TabsItems, TabsType, LanguageColor } from "@/utils/enums";
import ElementBorderBottom from "@/components/shared/ElementBorderBottom.vue"
import { computed, onMounted, ref } from "vue";
import axios from "axios";
import PersonalProjects from "@/components/shared/category/personalProjects.vue";
import Library from "@/components/shared/category/library.vue";

const tab = ref(0)
const isProject = computed(() => tab.value === TabsType.Projects)
const repositories = ref<IRepository[]>([])
//#endregion
//region [LIBRARY]
const isLibrary = computed(() => tab.value === TabsType.Library)
const libraries = ref([])
//#endregion
const isLoading = ref(false)
const changeTab = (value: number) => {
  tab.value = value
}
const fetchRepoList = async () => {
  isLoading.value = true;
  const reposURL = 'users/heydayle/repos?sort=pushed_at'
  const response = await axios.get( process.env.VITE_BASE_API_URL + reposURL)
  repositories.value = response.data
  isLoading.value = false;
}
function func<T, C>(a:T, b:C){
  return {a, b}
}
onMounted(() => {
  fetchRepoList()
  func<number, string>(1,'2')
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
        <span class="shadow-inner shadow-xl text-white">{{ item.title }}</span>
        <span
            class="w-0 h-0.25 bg-transparent duration-800 group-hover:(w-full bg-white)"
            :class="{'!w-full bg-white' : item.value === tab}"
        />
      </button>
    </div>
    <div>
      <PersonalProjects
          v-if="isProject"
          v-bind="{
            repositories,
            isLoading
          }"
      />
      <Library
          v-if="isLibrary"
          v-bind="{
            libraries,
            isLoading
          }"
      />
    </div>
  </div>
</template>