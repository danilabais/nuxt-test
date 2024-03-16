import { config } from "@/app/config";

export const useApi: typeof useFetch = (request, opts?) => {
  return useFetch(request, { baseURL: config.baseURL, ...opts });
};
