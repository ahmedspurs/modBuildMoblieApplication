<script setup>
  import { IonApp, IonRouterOutlet } from "@ionic/vue";
  import { onMounted, watch } from "vue";
  import { useRoute } from "vue-router";
  import { useRouter } from "vue-router";
  import { useCart } from "@/store/cart";
  import { useStore } from "@/store";
  import { useCategory } from "@/store/categories";
  import { useVendor } from "@/store/vendors";
  import { useProduct } from "@/store/products";

  const cartStore = useCart();
  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  const vendorStore = useVendor();
  const categoryStore = useCategory();
  const productStore = useProduct();

  onMounted(() => {
    if (localStorage["cartItems"]) cartStore.setCartFromLocalStorage();
  });

  // watch routes
  watch(
    () => route.path,
    async (newRoute) => {
      console.log({ newRoute });
      if (newRoute == "/tabs/home") {
        await store.homePageSetup();
        if (
          !vendorStore.getQueryStatus ||
          !categoryStore.getQueryStatus ||
          !productStore.getQueryStatus
        )
          router.push("/error");
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
