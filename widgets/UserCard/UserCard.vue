<template>
  <div v-if="!error" :class="styles.wrapper">
    <UserBase
      direction="column"
      :src="user.avatar"
      size="l"
      :nickname="[user.first_name, user.last_name].join(' ')"
    />
    <div>
      {{ user.email }}
    </div>
    <UITextareaBase v-model="userInfo.info" :class="styles.textarea" />
    <UIInputNumber
      v-model.number="userInfo.rating"
      :step="1"
      label="points"
      :is-only-positive="true"
    />

    <UIButtonBase
      @click="
        usersStore.updateUser({ id: user.id, rating: String(userInfo.rating), info: userInfo.info })
      "
    >
      Save
    </UIButtonBase>
  </div>
  <div v-else :class="[styles.wrapper, styles.error]">
    Сlient with id {{ route.params.id }} not found!
    <UIButtonBase @click="handleBack">Go back</UIButtonBase>
  </div>
</template>

<script setup lang="ts">
import { UITextareaBase, UIInputNumber, UIButtonBase } from "@/UI";
import styles from "./UserCard.module.scss";
import { UserBase } from "@/entities";
import { useUsersStore } from "@/stores";
import type { UserType } from "@/types";

const route = useRoute();
const router = useRouter();
import { ref } from "vue";
const usersStore = useUsersStore();

const user = ref<UserType | null>(null);
const { data, error } = await useApi("/users/" + route.params.id, {
  method: "GET",
});

user.value = data?.value?.data;

const userInfo = ref(usersStore.getUser({ id: route.params.id }));

const handleBack = () => {
  router.back();
};
</script>
