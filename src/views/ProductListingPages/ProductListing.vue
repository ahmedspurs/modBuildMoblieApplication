<script setup>
  import { IonPage, IonContent } from "@ionic/vue";
  import ErrorSection from "../../components/Error/ErrorSection.vue";
  import LoadingSpinner from "@/components/LoadingSpinner.vue";
  import ProductGrid from "@/components/ui/ProductGrid.vue";
  import TheHeader from "@/components/TheHeader/TheHeader.vue";
  import { onMounted, computed } from "vue";
  import { useVendor } from "@/store/vendors";
  import { useStore } from "@/store";
  import { useRoute } from "vue-router";
  import { useCategory } from "@/store/categories";

  const vendorStore = useVendor();
  const store = useStore();
  const loading = computed(() => store.getLoading);
  const categoryStore = useCategory();
  const storeProducts = computed(() => vendorStore.getVendorProducts);
  const categoryProducts = computed(() => categoryStore.getCategoryProducts);

  const route = useRoute();
  const type = computed(() => route.query?.type);

  onMounted(async () => {
    store.loading = true;
    if (type.value == "stores") await fetchStoreProducts();
    else await fetchCategoryProducts();
    console.log({ products: storeProducts.value || categoryProducts });
    store.loading = false;
  });

  const fetchStoreProducts = async () => {
    await vendorStore.fetchVendorProducts(route.query.id);
  };

  const fetchCategoryProducts = async () => {
    await categoryStore.fetchCategoryProducts(route.query?.id);
  };
</script>

<template>
  <ion-page>
    <loading-spinner v-if="loading"></loading-spinner>
    <ion-content v-else>
      <the-header></the-header>
      <!-- store products -->
      <main class="px-4 py-6" v-if="type == 'stores'">
        <error-section
          class="mt-16"
          v-if="!vendorStore.getVendorProductsQueryStatus"
          @on-reload="fetchStoreProducts"
        ></error-section>
        <div
          v-else-if="
            storeProducts.length == 0 &&
            vendorStore.getVendorProductsQueryStatus
          "
          class="h-3/4 flex items-center justify-center text-center"
        >
          <p class="text-slate-500 text-sm">عفوا لا توجد منتجات</p>
        </div>
        <product-grid
          v-else-if="
            vendorStore.getVendorProductsQueryStatus && storeProducts.length > 0
          "
          :products="storeProducts"
        ></product-grid>
      </main>
      <!-- category products -->
      <main class="px-4 py-6" v-else>
        <error-section
          class="mt-16"
          v-if="!categoryStore.getCategoryProductsQueryStatus"
          @on-reload="fetchCategoryProducts"
        ></error-section>
        <div
          v-else-if="
            categoryProducts.length == 0 &&
            categoryStore.getCategoryProductsQueryStatus
          "
          class="h-3/4 flex items-center justify-center text-center"
        >
          <p class="text-slate-500 text-sm">عفوا لا توجد منتجات</p>
        </div>
        <product-grid
          v-else-if="
            categoryStore.getCategoryProductsQueryStatus &&
            categoryProducts.length > 0
          "
          :products="categoryProducts"
        ></product-grid>
      </main>
    </ion-content>
  </ion-page>
</template>
