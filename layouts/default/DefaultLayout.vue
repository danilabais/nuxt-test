<template>
  <div>
    <SidebarBase />
    <div :class="styles.wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { SidebarBase } from "./components";
import styles from "./DefaultLayout.module.scss";
</script>
