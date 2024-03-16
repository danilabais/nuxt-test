<template>
  <button :class="styles.button">
    <slot> Не забывай про слот </slot>
  </button>
</template>

<script setup>
import styles from "./UIButtonBase.module.scss";
</script>
