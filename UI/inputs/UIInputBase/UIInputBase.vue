<template>
  <div :class="styles.wrapper">
    <slot name="prepend" />
    <input v-model="modelValue" v-bind="$attrs" :class="styles.input" />
    <slot name="append" />
  </div>
</template>

<script setup lang="ts">
import styles from "./UIInputBase.module.scss";
const modelValue = defineModel<String>();
</script>
