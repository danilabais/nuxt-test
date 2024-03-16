import { config } from "@/app/config";

export const useApi: typeof useFetch = (request, opts?) => {
  const res = useFetch(request, { baseURL: config.baseURL, ...opts });
  return res;
};
