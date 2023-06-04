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
  import ErrorSectionLocal from "../../components/Error/ErrorSectionLocal.vue";

  import { IonPage, IonContent } from "@ionic/vue";

  import { computed, onMounted } from "vue";
  import { cities } from "@/data/cities";
  import { useStore } from "@/store";
  import { useVendor } from "@/store/vendors";
  import { useCategory } from "@/store/categories";
  import { useProduct } from "@/store/products";

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
    setTimeout(() => (store.loading = false), 3000);
    store.homePageSetup();
  });

  const fetchAllVendors = async () => {
    await vendorStore.fetchAllVendors();
  };

  const fetchAllAds = async () => {
    await store.fetchAllAds();
  };

  const fetchAllCategories = async () => {
    await categoryStore.fetchAllCategories();
  };

  const fetchAllProducts = async () => {
    await productStore.fetchAllProducts();
  };
</script>

<template>
  <ion-page>
    <loading-spinner v-show="loading" />
    <ion-content v-show="!loading">
      <!-- the header -->
      <the-header></the-header>
      <main class="pb-6">
        <div class="px-4">
          <!-- ***** stores section ***** --><!-- start -->
          <main-heading title="المغالق" link="/tabs/stores"></main-heading>
          <div style="min-height: 107px">
            <card-slider-small
              :slides="allVendors"
              slide-type="stores"
              v-if="vendorStore.getQueryStatus && allVendors.length > 0"
            ></card-slider-small>
            <error-section-local
              v-else-if="
                !vendorStore.getQueryStatus &&
                allVendors.length == 0 &&
                !vendorStore.getLoadingLocal
              "
              @on-reload="fetchAllVendors"
              :height="107"
            ></error-section-local>
          </div>
          <!-- ***** stores section ***** --><!-- end -->

          <!-- ***** ads section ***** --><!-- start -->
          <div
            style="min-height: 170px"
            :class="
              store.getAllAds.length == 0 ? 'bg-slate-300 rounded-lg' : ''
            "
            class="mt-5"
          >
            <ads-slider
              v-if="store.getAdsQueryStatus && store.getAllAds.length > 0"
            ></ads-slider>
            <error-section-local
              v-else-if="
                !store.getAdsQueryStatus &&
                store.getAllAds.length == 0 &&
                !store.getAdsLoading
              "
              @on-reload="fetchAllAds"
              :height="170"
            ></error-section-local>
          </div>
          <!-- ***** ads section ***** --><!-- end -->

          <!-- ***** categoris section ***** --><!-- start -->
          <main-heading title="الاقسام" link="/tabs/categories"></main-heading>
          <div style="min-height: 107px">
            <card-slider-small
              v-if="categoryStore.getQueryStatus && allCategories.length > 0"
              :slides="allCategories"
              slide-type="categories"
            ></card-slider-small>
            <error-section-local
              v-else-if="
                !categoryStore.getQueryStatus &&
                allCategories.length == 0 &&
                !categoryStore.getLoadingLocal
              "
              @on-reload="fetchAllCategories"
              :height="107"
            ></error-section-local>
          </div>
          <!-- ***** categoris section ***** --><!-- end -->

          <!-- ***** best sales section ***** --><!-- start -->
          <main-heading
            title="الاكثر مبيعا"
            link="/tabs/products-listing?type=all-products"
          ></main-heading>
          <div style="min-height: 370px">
            <best-seller
              v-if="productStore.getQueryStatus && allProducts.length > 0"
              :slides="allProducts"
            ></best-seller>
            <error-section-local
              v-else-if="
                !productStore.getQueryStatus &&
                allProducts.length == 0 &&
                !productStore.getLoadingLocal
              "
              @on-reload="fetchAllProducts"
              :height="370"
            ></error-section-local>
          </div>
          <!-- ***** best sales section ***** --><!-- end -->
        </div>

        <!-- ***** success partners ***** --><!-- start -->
        <success-partners class="mt-8 mb-6"></success-partners>
        <!-- ***** success partners ***** --><!-- end -->

        <div class="px-4 mb-4">
          <!-- ***** products section ***** --><!-- start -->
          <city-slider class="mb-4" :slides="cities"></city-slider>
          <product-grid
            v-if="productStore.getQueryStatus && allProducts.length > 0"
            :products="allProducts"
          ></product-grid>
          <error-section-local
            v-else-if="
              !productStore.getQueryStatus &&
              allProducts.length == 0 &&
              !productStore.getLoadingLocal
            "
            @on-reload="fetchAllProducts"
            :height="107"
          ></error-section-local>
          <router-link
            class="mt-6 block text-center border-blue-500"
            to="/tabs/products-listing?type=all-products"
            >كل المنتجات</router-link
          >
          <!-- ***** products section ***** --><!-- end -->
        </div>
      </main>
    </ion-content>
  </ion-page>
</template>
