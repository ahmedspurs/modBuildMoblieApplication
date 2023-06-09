<script setup>
  import ErrorSection from "@/components/Error/ErrorSection.vue";
  import LoadingSpinner from "@/components/LoadingSpinner.vue";
  import ImageSlider from "@/views/ProductListingPages/SingleProduct/ImageSlider.vue";
  import { IonPage, IonContent } from "@ionic/vue";
  import { useRoute } from "vue-router";
  import { ref, computed, onMounted } from "vue";
  import { useStore } from "@/store";
  import { useProduct } from "@/store/products";
  import { useCart } from "@/store/cart";

  const route = useRoute();
  const store = useStore();
  const productStore = useProduct();
  const cartStore = useCart();

  const disableBtn = ref(false);

  const product = ref();
  const loading = computed(() => store.getLoading);

  onMounted(async () => {
    store.loading = true;
    await getProduct();
    store.loading = false;
  });

  const getProduct = async () => {
    product.value = await productStore.fetchSingleProduct(route.params?.id);
  };

  const addToCart = async () => {
    disableBtn.value = true;
    cartStore.addToCart(product);
    setTimeout(() => (disableBtn.value = false), 800);
  };
</script>

<template>
  <ion-page>
    <loading-spinner v-if="loading" />

    <ion-content v-else>
      <div v-if="product && productStore.getSingleQueryStatus">
        <image-slider :images="product?.images"></image-slider>
        <div class="bg-white">
          <!-- name & price -->
          <div class="flex justify-between p-4 pb-0 w-full">
            <div>
              <h2>{{ product?.name }}</h2>
              <span class="block">rating</span>
            </div>
            <div class="flex flex-col">
              <h2>{{ product?.price }}$</h2>
              <p class="text-gray-600 line-through text-lg">
                {{ product?.regular_price }}
              </p>
            </div>
          </div>
          <!-- description -->
          <div class="px-4">
            <h2 class="text-xl">وصف المنتج</h2>
            <p v-html="product?.description" class="text-gray-600"></p>
          </div>
          <!-- vendor info -->
          <div class="px-4">
            <h2 class="text-xl">المتجر</h2>
            <router-link
              class="block"
              :to="`/tabs/products-listing?type=stores&id=${product?.store?.vendor_id}`"
            >
              <div class="flex justify-between items-center">
                <span
                  clickable
                  class="block font-semibold text-sm text-gray-600"
                  >{{ product?.store?.vendor_shop_name }}</span
                >
                <div
                  class="w-12 h-12 rounded-full bg-image shadow-md"
                  :style="{
                    backgroundImage: `url(${product?.store?.vendor_shop_logo})`,
                  }"
                ></div>
              </div>
            </router-link>
          </div>
          <div class="w-full px-4 mt-12">
            <button
              :disabled="disableBtn"
              @click="addToCart(product)"
              class="w-full text-white bg-blue-600 rounded-xl p-4"
            >
              إضافة إلى السلة
            </button>
          </div>
        </div>
      </div>
      <error-section @on-reload="getProduct" v-else></error-section>
    </ion-content>
  </ion-page>
</template>
