<template>
  <div
    :class="[
      styles.wrapper,
      {
        [styles.isSidebarOpen]: isSidebarOpen,
      },
    ]"
  >
    <div :class="styles.header">
      <UITabsBase v-model="currentTab" :options="tabsOptions" />
      <UIInputBase v-model="search" placeholder="Enter username to search" />
    </div>
    <div :class="styles.list">
      <NuxtLink v-for="item in 20" :key="item" :to="item" :class="styles.user">
        <UserBase />
        <div>></div>
      </NuxtLink>
    </div>
    <UIButtonBase :class="styles.btn"> Update List </UIButtonBase>
    <SidebarController v-model="isSidebarOpen" />
  </div>
</template>

<script setup>
import { UIButtonBase, UITabsBase, UIInputBase, UIAvatarBase } from "@/UI";
import { UserBase } from "@/entities";
import styles from "./SidebarBase.module.scss";
import { tabsOptions } from "./constants.js";
import { ref } from "vue";
import { SidebarController } from "./components";

const currentTab = ref(tabsOptions[0].value);
const search = ref("");
const isSidebarOpen = ref(true);
</script>
