import { defineStore } from "pinia";
import axios from "@/services/axios";

export const useProduct = defineStore("products", {
  state: () => ({
    allProducts: [],
    filteredProducts: [],
    queryStatus: false,
    singleQueryStatus: false,
    loadingLocal: false,
  }),
  getters: {
    getAllProducts: (state) => state.allProducts,
    getFilteredProducts: (state) => state.filteredProducts,
    getQueryStatus: (state) => state.queryStatus,
    getSingleQueryStatus: (state) => state.singleQueryStatus,
    getLoadingLocal: (state) => state.loadingLocal,
  },
  actions: {
    async fetchAllProducts() {
      try {
        const res = await axios.get(
          "/wc/v3/products?_fields=id,name,price,regular_price,store,description,images,on_sale,rating_count,stock_quantity"
        );
        if (res.data) {
          this.allProducts = res.data;
          this.queryStatus = true;
          console.log({ data: res.data, allProducts: this.allProducts });
          return true;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        // this.allProducts = products;
        this.queryStatus = false;
        return false;
      }
    },
    async fetchSingleProduct(id) {
      try {
        const res = await axios.get(
          `/wc/v3/products/${id}?_fields=id,name,price,regular_price,store,description,images,on_sale,rating_count,stock_quantity`
        );
        if (res.data) {
          console.log({ singleProduct: res.data });
          this.singleQueryStatus = true;
          return res.data;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        this.singleQueryStatus = true;
        return false;
      }
    },
  },
});
