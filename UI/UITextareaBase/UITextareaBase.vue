<template>
  <div :class="styles.wrapper">
    <textarea v-model="modelValue" rows="auto" :class="styles.textarea" />
  </div>
</template>

<script setup lang="ts">
import styles from "./UITextareaBase.module.scss";

const modelValue = defineModel<string>();
</script>
