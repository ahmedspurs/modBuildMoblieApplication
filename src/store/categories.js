import { defineStore } from "pinia";
import axios from "@/services/axios";
import { categories } from "../data/categories";

export const useCategory = defineStore("categories", {
  state: () => ({
    allCategories: [],
    filteredCategories: [],
  }),
  getters: {
    getAllCategories: (state) => state.allCategories,
    getFilteredCategories: (state) => state.filteredCategories,
  },
  actions: {
    async fetchAllCategories() {
      try {
        const res = await axios.get(
          "/wc/v3/products/categories?_fields=id,image,name"
        );
        if (res.status == 200) {
          this.allCategories = res.data;
          console.log({ data: res.data, allCategories: this.allCategories });
        } else console.log({ status: res.status });
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        this.allCategories = categories;
      }
    },
  },
});
