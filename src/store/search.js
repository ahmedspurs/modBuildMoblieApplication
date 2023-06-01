import { defineStore } from "pinia";

export const useSearch = defineStore("search", {
  state: () => ({
    loading: false,
    searchTerm: "",
    inputIsFocused: false,
    searchData: [],
  }),
  getters: {
    getLoading: (state) => state.loading,
    getInputIsFocused: (state) => state.inputIsFocused,
    getSearchTerm: (state) => state.searchTerm,
    getSearchData: (state) => state.searchData,
  },
  actions: {},
});
