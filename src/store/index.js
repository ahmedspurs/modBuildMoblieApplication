import { createPinia } from "pinia";
import { defineStore } from "pinia";
import { useVendor } from "@/store/vendors";
import { useCategory } from "@/store/categories";
import { useProduct } from "@/store/products";
import axios from "@/services/axios";

export const store = createPinia();

export const useStore = defineStore("store", {
  state: () => ({
    loading: false,
    adsLoading: true,
    partnersLoading: true,
    allAds: [],
    allPartners: [],
    adsQueryStatus: false,
    partnersQueryStatus: false,
  }),
  getters: {
    getLoading: (state) => state.loading,
    getAdsLoading: (state) => state.adsLoading,
    getPartnersLoading: (state) => state.partnersLoading,
    getAllAds: (state) => state.allAds,
    getAllPartners: (state) => state.allPartners,
    getAdsQueryStatus: (state) => state.adsQueryStatus,
    getPartnersQueryStatus: (state) => state.partnersQueryStatus,
  },
  actions: {
    async homePageSetup() {
      const vendorStore = useVendor();
      const categoryStore = useCategory();
      const productStore = useProduct();

      store.loading = true;
      setTimeout(() => (store.loading = false), 3000);
      if (vendorStore.getAllVendors.length == 0) {
        vendorStore.fetchAllVendors();
      }
      if (this.getAllAds.length == 0) {
        this.fetchAllAds();
      }
      if (categoryStore.getAllCategories.length == 0) {
        categoryStore.fetchAllCategories();
      }
      if (this.getAllPartners.length == 0) {
        this.fetchAllPartners();
      }
      if (productStore.getAllProducts.length == 0) {
        productStore.fetchAllProducts();
      }
    },
    async fetchAllAds() {
      try {
        this.adsLoading = true;
        const res = await axios.get(
          "/wp/v2/advertisement?_fields=id,title,featured_media,x_featured_media"
        );
        if (res.data) {
          this.allAds = res.data;
          this.adsQueryStatus = true;
          this.adsLoading = false;
          console.log({ data: res.data, allAds: this.allAds });
          return this.allAds;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        this.adsQueryStatus = false;
        this.adsLoading = false;
        return false;
      }
    },
    async fetchAllPartners() {
      try {
        this.partnersLoading = true;
        const res = await axios.get(
          "/wp/v2/partners?id,title,featured_media,x_featured_media"
        );
        if (res.data) {
          this.allPartners = res.data;
          this.partnersQueryStatus = true;
          this.partnersLoading = false;
          console.log({ data: res.data, allPartners: this.allPartners });
          return this.allPartners;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        this.partnersQueryStatus = false;
        this.partnersLoading = false;
        return false;
      }
    },
  },
});
