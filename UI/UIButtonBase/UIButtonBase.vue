<template>
  <button type="button" v-bind="$attrs" :class="styles.button">
    <slot> Не забывай про слот </slot>
  </button>
</template>

<script setup lang="ts">
import styles from "./UIButtonBase.module.scss";
</script>
