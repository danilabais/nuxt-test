<template>
  <div :class="styles.user">
    <UIAvatarBase v-if="props.src" :rounded="true" size="xs" :src="props.src" />
    <div v-if="props.rating">
      {{ props.rating }}
    </div>

    <div :class="styles.name">{{ props.nickname }}</div>
  </div>
</template>

<script setup lang="ts">
import styles from "./UserBase.module.scss";
import { UIAvatarBase } from "@/UI";

const props = defineProps<{
  nickname: String;
  src: String;
  rating: string;
}>();
</script>
