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
      <NuxtLink
        v-for="user in results"
        :key="user.id"
        :to="'/user/' + user.id"
        :class="styles.user"
      >
        <UserBase
          v-if="currentTab === tabsOptions[0].value"
          :src="user.avatar"
          :nickname="[user.first_name, user.last_name].join(' ')"
        />
        <UserBase
          v-if="currentTab === tabsOptions[1].value"
          :rating="usersStore.getUser({ id: user.id }).rating"
          :nickname="[user.first_name, user.last_name].join(' ')"
        />
        <div>></div>
      </NuxtLink>

      <div v-if="!results.length">Sorry, no one found</div>
    </div>
    <UIButtonBase :class="styles.btn" :disabled="pending" @click="refresh">
      Update List
    </UIButtonBase>
    <SidebarController v-model="isSidebarOpen" />
  </div>
</template>

<script setup>
import { UIButtonBase, UITabsBase, UIInputBase } from "@/UI";
import { UserBase } from "@/entities";
import styles from "./SidebarBase.module.scss";
import { tabsOptions } from "./constants.js";
import { ref } from "vue";
import { SidebarController } from "./components";
import { useUsersStore } from "@/stores";

const usersStore = useUsersStore();

const currentTab = ref(tabsOptions[0].value);
const search = ref("");
const isSidebarOpen = ref(true);

const { data, refresh, pending } = await useApi("/users", {
  method: "GET",
});

const { results } = useFuse({
  input: search,
  data: data.value.data,
  options: { keys: ["first_name", "last_name"] },
});
</script>
