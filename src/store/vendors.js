import { defineStore } from "pinia";
import axios from "@/services/axios";
// import { vendors } from "../data/vendors";
import { products } from "../data/products";

export const useVendor = defineStore("vendors", {
  state: () => ({
    allVendors: [],
    filteredVendors: [],
    queryStatus: null,
    vendorProducts: [],
  }),
  getters: {
    getAllVendors: (state) => state.allVendors,
    getFilteredVendors: (state) => state.filteredVendors,
    getQueryStatus: (state) => state.queryStatus,
    getVendorProducts: (state) => state.vendorProducts,
  },
  actions: {
    async fetchAllVendors() {
      try {
        const res = await axios.get(
          "/wcfmmp/v1/store-vendors?_fields=vendor_id,vendor_shop_name,vendor_shop_logo"
        );
        if (res.data) {
          this.allVendors = res.data;
          this.queryStatus = true;
          console.log({ data: res.data, allVendors: this.allVendors });
          return true;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        // this.allVendors = vendors;
        this.queryStatus = false;
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
          console.log({ data: res.data, vendorProducts: this.vendorProducts });
          return res.data;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        this.vendorProducts = products;
        return false;
      }
    },
  },
});
