<script setup>
  import TheHeader from "@/components/TheHeader/TheHeader";
  import LoadingSpinner from "@/components/LoadingSpinner.vue";
  import MainHeading from "@/components/ui/MainHeading.vue";
  import CardSliderSmall from "@/components/sliders/CardSliderSmall.vue";
  import AdsSlider from "@/components/sliders/AdsSlider.vue";
  import BestSeller from "@/views/HomePage/BestSeller.vue";
  import SuccessPartners from "./SuccessPartners.vue";
  import CitySlider from "@/components/sliders/CitySlider.vue";
  import ProductGrid from "@/components/ui/ProductGrid.vue";

  import { IonPage, IonContent } from "@ionic/vue";

  import { computed, onMounted } from "vue";
  import { ads } from "@/data/index.js";
  import { cities } from "@/data/cities";
  import { useStore } from "@/store";
  import { useVendor } from "@/store/vendors";
  import { useCategory } from "@/store/categories";
  import { useProduct } from "@/store/products";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const store = useStore();
  const vendorStore = useVendor();
  const categoryStore = useCategory();
  const productStore = useProduct();
  const loading = computed(() => store.getLoading);

  const allVendors = computed(() => vendorStore.getAllVendors);
  const allCategories = computed(() => categoryStore.getAllCategories);
  const allProducts = computed(() => productStore.getAllProducts);

  onMounted(async () => {
    store.loading = true;
    await store.homePageSetup();
    store.loading = false;
    if (
      !vendorStore.getQueryStatus ||
      !categoryStore.getQueryStatus ||
      !productStore.getQueryStatus
    )
      router.push("/error");
  });
</script>

<template>
  <ion-page>
    <loading-spinner v-show="loading" />
    <ion-content v-show="!loading">
      <!-- the header -->
      <the-header></the-header>
      <main class="pb-6">
        <div class="px-4">
          <!-- stores section -->
          <main-heading title="المغالق" link="/tabs/stores"></main-heading>
          <card-slider-small
            :slides="allVendors"
            slide-type="stores"
          ></card-slider-small>
          <!-- ads section -->
          <ads-slider class="mt-5" :slides="ads"></ads-slider>
          <!-- categoris section -->
          <main-heading title="الاقسام" link="/tabs/categories"></main-heading>
          <card-slider-small
            :slides="allCategories"
            slide-type="categories"
          ></card-slider-small>
          <!-- best sales -->
          <main-heading
            title="الاكثر مبيعا"
            link="/tabs/products-listing?type=all-products"
          ></main-heading>
          <best-seller :slides="allProducts"></best-seller>
        </div>
        <!-- success partners -->
        <success-partners class="mt-8 mb-6"></success-partners>
        <div class="px-4 mb-4">
          <!-- cities filter -->
          <city-slider class="mb-4" :slides="cities"></city-slider>
          <!-- product grid -->
          <product-grid :products="allProducts"></product-grid>
          <router-link
            class="mt-6 block text-center border-blue-500"
            to="/tabs/products-listing?type=all-products"
            >كل المنتجات</router-link
          >
        </div>
      </main>
    </ion-content>
  </ion-page>
</template>
