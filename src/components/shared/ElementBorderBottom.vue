<script setup lang="ts">
const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  title: {
    type: String,
    required: true
  },
  hoverOnDuration: {
    type: Boolean,
    default: true
  },
  styleOptions: {
    type: Object,
    default: () => ({
      title: 'text-lg font-medium',
      border: 'w-0 h-0.25 duration-400 group-hover:(w-full bg-black)'
    })
  }
})
const emits = defineEmits(['click'])
const onClick = () => {
  emits('click')
}
</script>
<template>
  <div class="flex flex-col">
    <component :is="tag" class="pb-1" :class="styleOptions.title" @click="onClick">{{title}}</component>
    <div :class="styleOptions.border"/>
  </div>
</template>