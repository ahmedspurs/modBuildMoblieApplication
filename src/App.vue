<script setup>
  import { IonApp, IonRouterOutlet } from "@ionic/vue";
  import { onMounted, watch, computed } from "vue";
  import { useRoute } from "vue-router";
  import { useCart } from "@/store/cart";
  import { useStore } from "@/store";
  import { useCategory } from "@/store/categories";
  import { useVendor } from "@/store/vendors";
  import { useProduct } from "@/store/products";

  const cartStore = useCart();
  const route = useRoute();
  const store = useStore();
  const vendorStore = useVendor();
  const categoryStore = useCategory();
  const productStore = useProduct();

  const storeProducts = computed(() => productStore.getCurrentStoreProducts);
  const categoryProducts = computed(
    () => categoryStore.getCurrentCategoryProducts
  );

  onMounted(async () => {
    if (localStorage["cartItems"]) cartStore.setCartFromLocalStorage();
  });
false
  // watch routes
  watch(
    () => route.path,
    async (newRoute) => {
      console.log({ newRoute });
      // home route
      if (newRoute == "/tabs/home") {
        store.loading = true;
        await store.homePageSetup();
        store.loading = false;
      }
      // vendors route
      if (newRoute == "/tabs/stores") {
        store.loading = true;
        if (!route.query?.filter) {
          route.query.filter = "all";
          // allColor.value = "primary";
        } else {
          // allColor.value = "dark";
        }

        if (vendorStore.getAllVendors.length == 0) {
          await vendorStore.fetchAllVendors();
        }
        store.loading = false;
      }
      // categories route
      if (newRoute == "/tabs/categories") {
        store.loading = true;
        if (categoryStore.getAllCategories.length == 0) {
          await categoryStore.fetchAllCategories();
        }
        store.loading = false;
      }
      // product-listing route
      const fetchStoreProducts = async () => {
        productStore.currentStoreProducts =
          await vendorStore.fetchVendorProducts(route.query.id);
      };
      const fetchCategoryProducts = async () => {
        await categoryStore.fetchCategoryProducts(route.query?.id);
      };
      if (newRoute == "/tabs/products-listing") {
        const type = route.query?.type;
        store.loading = true;
        if (type == "stores") await fetchStoreProducts();
        else await fetchCategoryProducts(route.query?.id);
        console.log({
          products: storeProducts.value || categoryProducts.value,
        });
        store.loading = false;
      }
    }
  );
</script>

<template>
  <ion-app>
    <ion-router-outlet class="main-wrapper" />
  </ion-app>
</template>

<style>
  :root {
    --radius: 0.5rem;
  }
  .main-wrapper {
    max-width: 600px;
    margin-inline: auto;
  }

  .bg-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
