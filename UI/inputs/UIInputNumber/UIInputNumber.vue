<template>
  <ClientOnly>
    <div :class="styles.wrapper">
      <button @click="modelValue--">-</button>
      <span> {{ modelValue }} {{ props.label }} </span>
      <button @click="modelValue++">+</button>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import styles from "./UIInputNumber.module.scss";

const modelValue = defineModel<number | string>();

type UIInputNumberProps = {
  label: string;
  step: number;
};

const props = withDefaults(defineProps<UIInputNumberProps>(), {
  label: "",
  step: 1,
});
</script>
