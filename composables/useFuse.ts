import { computed } from "vue";
import type { MaybeRefOrGetter } from "@vueuse/shared";
import { toValue } from "@vueuse/shared";

type useFuseOptions = {
  keys: string[];
};

type useFuseTypes = {
  input: MaybeRefOrGetter<string>;
  data: MaybeRefOrGetter;
  options: useFuseOptions;
};

export const useFuse = ({ input, data, options }: useFuseTypes) => {
  const { keys } = options;
  const results = computed(() => {
    if (!toValue(input)) {
      return data;
    }

    return data.filter((item) => {
      for (const key of keys) {
        if (item[key] && item[key].toLowerCase().includes(toValue(input).toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  });

  return { results };
};
