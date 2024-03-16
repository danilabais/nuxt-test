<template>
  <main>
    <SidebarBase />
    <div :class="styles.wrapper">
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { SidebarBase } from "./components";
import styles from "./DefaultLayout.module.scss";
</script>
