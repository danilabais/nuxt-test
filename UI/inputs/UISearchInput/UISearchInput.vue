<template>
  <UIInputBase v-model="modelValue">
    <template #append>
      <SearchIcon width="20" height="20" />
    </template>
  </UIInputBase>
</template>

<script setup lang="ts">
import { UIInputBase } from "@/UI";
import { SearchIcon } from "./icons";

const modelValue = defineModel<String>();
</script>
