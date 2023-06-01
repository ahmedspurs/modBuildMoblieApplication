<script setup>
  import { IonPage, IonContent } from "@ionic/vue";
  import LoadingSpinner from "@/components/LoadingSpinner.vue";
  import ProductGrid from "@/components/ui/ProductGrid.vue";
  import TheHeader from "@/components/TheHeader/TheHeader.vue";
  import { onMounted, computed, ref } from "vue";
  import { useVendor } from "@/store/vendors";
  import { useStore } from "@/store";
  import { useRoute } from "vue-router";

  const vendorStore = useVendor();
  const store = useStore();
  const loading = computed(() => store.getLoading);
  const products = ref([]);

  const route = useRoute();

  onMounted(async () => {
    store.loading = true;
    products.value = await vendorStore.fetchVendorProducts(route.query.id);
    console.log({ products: products.value });
    store.loading = false;
  });
</script>

<template>
  <ion-page>
    <loading-spinner v-if="loading"></loading-spinner>
    <ion-content v-else>
      <the-header></the-header>
      <main class="px-4 py-6">
        <product-grid :products="products"></product-grid>
      </main>
    </ion-content>
  </ion-page>
</template>
