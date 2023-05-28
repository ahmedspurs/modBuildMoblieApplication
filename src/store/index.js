import { createPinia } from "pinia";
import { defineStore } from "pinia";

export const store = createPinia();

export const useStore = defineStore("store", {
  state: () => ({
    loading: false,
  }),
  getters: {
    getLoading: (state) => state.loading,
  },
  actions: {},
});
