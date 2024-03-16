<template>
  <div :class="styles.wrapper">
    <button
      v-for="option in options"
      :key="option.value"
      :class="styles.item"
      @click="modelValue = option.value"
    >
      {{ option.label }}
    </button>
    <div :class="styles.bg" :style="computedStyles" />
  </div>
</template>

<script setup lang="ts">
import styles from "./UITabsBase.module.scss";
import type { optionsType } from "./types.ts";
import { computed } from "vue";

const modelValue = defineModel<String>();

const props = defineProps<{
  options: optionsType;
}>();

const currentIndex = computed(() => {
  let result = 0;

  props.options.forEach((option, idx) => {
    if (option.value === props.modelValue) {
      return (result = idx);
    }
  });

  return result;
});

const computedStyles = computed(() => {
  return {
    width: `${100 / props.options.length}%`,
    transform: `translateX(${currentIndex.value * 100}%)`,
  };
});
</script>
