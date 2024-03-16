import { computed } from "vue";
import type { MaybeRefOrGetter } from "@vueuse/shared";
import { toValue } from "@vueuse/shared";

type useFuseOptions = {
  key: string;
};

type useFuseTypes = {
  input: MaybeRefOrGetter<string>;
  data: MaybeRefOrGetter<DataItem[]>;
  options: useFuseOptions;
};

export const useFuse = <DataItem>({ input, data, options }: useFuseTypes) => {
  const { key } = options;
  const results = computed(() => {
    if (!toValue(input)) {
      return data;
    }
    return data.filter((el) => {
      return el[key].toLowerCase().includes(toValue(input).toLowerCase());
    });
  });

  return { results };
};
