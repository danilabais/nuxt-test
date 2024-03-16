import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const initialValue = () => ({ rating: "0", info: "" });

export const useUsersStore = defineStore("users", () => {
  const _users = useStorage("users", {});

  const getUser = ({ id }) => {
    if (!(id in _users.value)) {
      _users.value[id] = initialValue();
    }
    return { ..._users.value[id] };
  };

  const updateUser = ({ id, rating = "", info = "" }) => {
    if (!id) {
      return;
    }
    _users.value[id] = {
      rating,
      info,
    };
  };

  return { getUser, updateUser };
});
