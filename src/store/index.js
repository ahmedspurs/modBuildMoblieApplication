import { createPinia } from "pinia";
import { defineStore } from "pinia";
import { useVendor } from "@/store/vendors";
import { useCategory } from "@/store/categories";
import { useProduct } from "@/store/products";

export const store = createPinia();

export const useStore = defineStore("store", {
  state: () => ({
    loading: false,
  }),
  getters: {
    getLoading: (state) => state.loading,
  },
  actions: {
    async homePageSetup() {
      const vendorStore = useVendor();
      const categoryStore = useCategory();
      const productStore = useProduct();

      store.loading = true;
      if (vendorStore.getAllVendors.length == 0) {
        await vendorStore.fetchAllVendors();
      }
      if (categoryStore.getAllCategories.length == 0) {
        await categoryStore.fetchAllCategories();
      }
      if (productStore.getAllProducts.length == 0) {
        await productStore.fetchAllProducts();
      }
      store.loading = false;
    },
  },
});
