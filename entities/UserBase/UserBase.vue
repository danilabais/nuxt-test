<template>
  <div :class="[styles.user, styles[props]]">
    <UIAvatarBase v-if="props.src" :rounded="true" :size="props.size" :src="props.src" />
    <div v-if="props.rating">
      {{ props.rating }}
    </div>

    <div :class="styles[props.size]">{{ props.nickname }}</div>
  </div>
</template>

<script setup lang="ts">
import styles from "./UserBase.module.scss";
import { UIAvatarBase } from "@/UI";

const props = withDefaults(
  defineProps<{
    nickname: string;
    src?: string;
    rating?: Number | undefined;
    size?: "xs" | "l";
    direction?: string;
  }>(),
  {
    size: "xs",
    direction: "row",
    rating: undefined,
    src: "",
  },
);
</script>
