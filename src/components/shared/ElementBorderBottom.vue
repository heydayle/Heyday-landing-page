<script setup lang="ts">
import {computed} from "vue";

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
      title: '',
      border: ''
    })
  }
})
type StyleType = {
  title: string,
  border: string
}
const defaultStyle = computed(() => ({
  title: 'text-lg font-medium',
  border: 'w-0 h-0.25 duration-400 group-hover:(w-full bg-black)'
}))
const emits = defineEmits(['click'])
const onClick = () => {
  emits('click')
}
</script>
<template>
  <div class="flex flex-col">
    <component
        :is="tag"
        class="pb-1"
        :class="`${defaultStyle.title} ${styleOptions.title}`"
        @click="onClick"
    >
      {{title}}
    </component>
    <div :class="`${defaultStyle.border} ${styleOptions.border||''}`"/>
  </div>
</template>