import { useStorage } from "@vueuse/core";

type getUserType = { id: string | number };

export const useGetUserInfo = () => {
  const state = useStorage("usersRating", {
    2: 100,
  });

  const getUserId = ({ id }: getUserType) => {
    return state.value[id] || "0";
  };
  return {
    getUserId,
  };
};
