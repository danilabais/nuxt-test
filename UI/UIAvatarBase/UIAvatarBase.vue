<template>
  <div
    :class="[styles.wrapper, { [styles.rounded]: rounded }]"
    :style="{ width: sizes[props.size] + 'px' }"
  >
    <NuxtImg v-bind="$attrs" :class="styles.img" :src="props.src" />
  </div>
</template>

<script setup lang="ts">
import styles from "./UIAvatarBase.module.scss";
const sizes = {
  xs: 40,
  s: 100,
};

type SizeType = keyof typeof sizes;

const props = withDefaults(
  defineProps<{
    size: SizeType;
    rounded: bolean;
    src: String;
  }>(),
  {
    size: "xs",
    rounded: true,
  },
);
</script>
