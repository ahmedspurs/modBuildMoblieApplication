import { defineStore } from "pinia";
import axios from "@/services/axios";
// import { categories } from "../data/categories";

export const useCategory = defineStore("categories", {
  state: () => ({
    allCategories: [],
    filteredCategories: [],
    categoryProducts: [],
    queryStatus: false,
    categoryProductsQueryStatus: false,
    loadingLocal: false,
  }),
  getters: {
    getAllCategories: (state) => state.allCategories,
    getCategoryProducts: (state) => state.categoryProducts,
    getFilteredCategories: (state) => state.filteredCategories,
    getQueryStatus: (state) => state.queryStatus,
    getCategoryProductsQueryStatus: (state) =>
      state.categoryProductsQueryStatus,
    getLoadingLocal: (state) => state.loadingLocal,
  },
  actions: {
    async fetchAllCategories() {
      try {
        const res = await axios.get(
          "/wc/v3/products/categories?_fields=id,image,name"
        );
        if (res.data) {
          this.allCategories = res.data;
          this.queryStatus = true;
          console.log({ data: res.data, allCategories: this.allCategories });
          return true;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        // this.allCategories = categories;
        this.queryStatus = false;
        return false;
      }
    },
    async fetchCategoryProducts(categoryId) {
      try {
        const res = await axios.get(`/wc/v3/products`, {
          params: {
            category: categoryId,
          },
        });
        if (res.data) {
          this.categoryProducts = res.data;
          this.categoryProductsQueryStatus = true;
          console.log({
            data: res.data,
            categoryProducts: this.categoryProducts,
          });
          return res.data;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        this.categoryProductsQueryStatus = false;
        return false;
      }
    },
  },
});
