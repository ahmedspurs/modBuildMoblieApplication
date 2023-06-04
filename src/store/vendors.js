import { defineStore } from "pinia";
import axios from "@/services/axios";

export const useVendor = defineStore("vendors", {
  state: () => ({
    allVendors: [],
    queryStatus: false,
    vendorProductsQueryStatus: false,
    filteredQueryStatus: false,
    vendorProducts: [],
    loadingLocal: true,
  }),
  getters: {
    getAllVendors: (state) => state.allVendors,
    getQueryStatus: (state) => state.queryStatus,
    getVendorProductsQueryStatus: (state) => state.vendorProductsQueryStatus,
    getFilteredQueryStatus: (state) => state.filteredQueryStatus,
    getVendorProducts: (state) => state.vendorProducts,
    getLoadingLocal: (state) => state.loadingLocal,
  },
  actions: {
    async fetchAllVendors() {
      try {
        this.loadingLocal = true;
        const res = await axios.get(
          "/wcfmmp/v1/store-vendors?_fields=vendor_id,vendor_shop_name,vendor_shop_logo"
        );
        if (res.data) {
          this.allVendors = res.data;
          this.queryStatus = true;
          this.loadingLocal = false;
          console.log({ data: res.data, allVendors: this.allVendors });
          return true;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        this.queryStatus = false;
        this.loadingLocal = false;
        return false;
      }
    },
    async fetchVendorProducts(storeId) {
      try {
        const res = await axios.get(
          `/wcfmmp/v1/store-vendors/${storeId}/products`
        );
        if (res.data) {
          this.vendorProducts = res.data;
          this.vendorProductsQueryStatus = true;
          console.log({ data: res.data, vendorProducts: this.vendorProducts });
          return res.data;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        this.vendorProductsQueryStatus = false;
        return false;
      }
    },
  },
});
