<script setup>
  import LoadingSpinner from "@/components/LoadingSpinner.vue";
  import ImageSlider from "@/views/ProductListingPages/SingleProduct/ImageSlider.vue";
  import { IonPage, IonContent } from "@ionic/vue";
  import { useRoute } from "vue-router";
  import { ref, computed, onMounted } from "vue";
  import { useStore } from "@/store";
  import { useProduct } from "@/store/products";

  const route = useRoute();
  const store = useStore();
  const productStore = useProduct();

  const product = ref({});
  const loading = computed(() => store.getLoading);

  onMounted(async () => {
    store.loading = true;
    await getProduct();
    store.loading = false;
  });

  const addToCart = async () => {
    console.log("add to cart");
  };

  const getProduct = async () => {
    const id = route.params.id;
    product.value = await productStore.fetchSingleProduct(id);
  };
</script>

<template>
  <ion-page>
    <loading-spinner v-if="loading" />

    <ion-content v-else>
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
          <p class="text-gray-600">
            {{ product?.description }}
          </p>
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
            @click="addToCart(product)"
            class="w-full text-white bg-blue-600 rounded-xl p-4"
          >
            إضافة إلى السلة
          </button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
