<script setup lang="ts">
//#region [Data]
const props = defineProps({
  libraries: {
    type: Array
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
//#endregion
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
    <div
        v-else
        class="flex-1 animate__animated animate__fadeInUp rounded-xl p-2 overflow-auto max-h-[78vh]"
        :class="libraries.length > 1 ? 'bg-snowDrift-500' : 'bg-transparent'"
    >
      <template v-if="libraries.length < 1">
        <div>
          <p class="m-auto text-center text-gray-400">Updating...</p>
        </div>
      </template>
      <div v-else class="grid grid-cols-3 gap-4">
      </div>
    </div>
  </div>
</template>