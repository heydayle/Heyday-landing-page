<script setup lang="ts">
import ElementBorderBottom from "@/components/shared/ElementBorderBottom.vue"
import type TypeLanguage from "@/utils/interface/language";
import { LanguageColor } from "@/utils/enums";
const props = defineProps({
  repositories: {
    type: Array
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
const getColor = (lang: TypeLanguage): string => {
  return LanguageColor[lang]
}
</script>
<template>
  <div>
    <template v-if="isLoading">
      <div class="">
        <img
            class="m-auto w-4 h-4 animate-spin filter invert"
            src="@/assets/icons/icon-Loading.png" alt=""
        >
      </div>
    </template>
    <template v-else>
    <div
        v-if="repositories.length > 1"
        class="flex-1 animate__animated animate__fadeInUp rounded-xl p-2 overflow-auto max-h-[78vh]"
        :class="repositories.length > 1 ? 'bg-snowDrift-500' : 'bg-transparent'"
    >
      <div class="grid grid-cols-3 gap-4">
        <template v-for="(item, index) in repositories">
          <div
              v-if="item.language"
              :key="index"
              class="group p-4 cursor-pointer duration-500 border border-gray-100 rounded-xl hover:border-gray-400"
          >
            <div class="flex justify-between">
              <ElementBorderBottom
                  :style-options="{ title: 'text-gray-800' }"
                  :title="item.name"
                  tag="div"
                  class="flex-1"
              />
              <div class="flex space-x-2">
                <a :href="item.svn_url" class="hover:bg-transparent">
                  <img class="w-4 h-4" src="@/assets/icons/icon-Github.png" alt="">
                </a>
                <a v-if="item.homepage" :href="item.homepage" class="hover:bg-transparent">
                  <img class="w-4 h-4" src="@/assets/icons/icon-Link.png" alt="">
                </a>
              </div>
            </div>
            <p class="text-gray-400 text-sm pb-2">{{ item.clone_url }}</p>
            <p> {{ item.description }} </p>
            <div class="flex mt-4 align-center space-x-2">
              <div class="h-2 w-2 rounded-full my-auto" :style="`background: ${getColor(item.language)}`"/>
              <div>{{item.language}}</div>
            </div>
            <div class="space-x-2">
              <span
                  v-for="(topic, i) in item.topics"
                  :key="i"
                  class="inline-block rounded-full px-2 pt-0.5 pb-1 mt-2 border border-gray-400 text-xs text-gray-400"
              >
                {{ topic }}
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <template v-if="repositories.length < 1">
      <div>
        <p class="m-auto text-center text-gray-400">Updating...</p>
      </div>
    </template>
  </template>
  </div>
</template>