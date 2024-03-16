<template>
  <div
    :class="[styles.wrapper, { [styles.rounded]: rounded }]"
    :style="{ width: sizes[props.size] + 'px' }"
  >
    <NuxtImg
      v-bind="$attrs"
      :class="styles.img"
      src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863"
    />
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
  }>(),
  {
    size: "xs",
    rounded: true,
  },
);
</script>
