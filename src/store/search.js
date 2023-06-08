import { defineStore } from "pinia";
import axios from "@/services/axios";

export const useSearch = defineStore("search", {
  state: () => ({
    loading: false,
    inputIsFocused: false,
    searchData: [],
    searchQuery: "",
    queryStatus: false,
    filteredVendors: [],
    filteredCategories: [],
    filteredProducts: [],
  }),
  getters: {
    getLoading: (state) => state.loading,
    getInputIsFocused: (state) => state.inputIsFocused,
    getSearchData: (state) => state.searchData,
    getSearchQuery: (state) => state.searchQuery,
    getQueryStatus: (state) => state.queryStatus,
    getFilteredVendors: (state) => state.filteredVendors,
    getFilteredCategories: (state) => state.filteredCategories,
    getFilteredProducts: (state) => state.filteredProducts,
  },
  actions: {
    async fetchVendorsBySearchQuery(searchQuery) {
      try {
        const res = await axios.get(
          "/wcfmmp/v1/store-vendors?_fields=vendor_id,vendor_shop_name,vendor_shop_logo"
        );
        if (res.data) {
          this.filteredVendors = res.data.filter((vendor) =>
            vendor.vendor_shop_name
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          );
          this.queryStatus = true;
          console.log({
            data: res.data,
            filteredVendors: this.filteredVendors,
          });
          return this.filteredVendors;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        this.queryStatus = false;
        return [];
      }
    },
    async fetchCategoriesBySearchQuery(searchQuery) {
      try {
        const res = await axios.get(
          "/wc/v3/products/categories?_fields=id,image,name",
          {
            params: {
              search: searchQuery,
            },
          }
        );
        if (res.data) {
          this.filteredCategories = res.data;
          this.queryStatus = true;
          console.log({
            data: res.data,
            filteredCategories: this.filteredCategories,
          });
          return this.filteredCategories;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        // this.allVendors = vendors;
        this.queryStatus = false;
        return [];
      }
    },
    async fetchProductsBySearchQuery(searchQuery) {
      try {
        const res = await axios.get(
          "/wc/v3/products?_fields=id,name,price,regular_price,store,description,images,on_sale,rating_count,stock_quantity",
          {
            params: {
              search: searchQuery,
            },
          }
        );
        if (res.data) {
          this.filteredProducts = res.data;
          this.queryStatus = true;
          console.log({
            data: res.data,
            filteredProducts: this.filteredProducts,
          });
          return this.filteredProducts;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        this.queryStatus = false;
        return [];
      }
    },
  },
});
