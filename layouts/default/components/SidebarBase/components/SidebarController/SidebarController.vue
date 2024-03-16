<template>
  <button :class="styles.sidebarController" @click="model = !model">
    {{ model ? "<" : ">" }}
  </button>
</template>

<script setup lang="ts">
import styles from "./SidebarController.module.scss";

const model = defineModel<bolean>();
</script>
