<template>
  <ion-page>
    <loading-spinner v-if="$store.state.loader" />

    <ion-content v-if="!$store.state.loader">
      <div class="img z-10 relative">
        <swiper dir="rtl" class="p-2 leatest">
          <swiper-slide class="p-2 relative">
            <img
              class="w-full h-1/2 rounded-b-2xl"
              :src="product?.images[0]?.src"
              loading="lazy"
            />

            <router-link to="/tabs/CategoryPage">
              <button class="bg-white rounded-xl p-4 absolute top-3 right-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </router-link>

            <router-link to="/tabs/CartPage">
              <button class="bg-white rounded-xl p-4 absolute top-3 left-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
      <div class="bg-white -mt-6">
        <div class="flex justify-between items-center p-4 w-full">
          <div>
            <h2>{{ product?.name }}</h2>
            <span class="block"> {{ product?.user?.name }}</span>
          </div>
          <h2>{{ product?.price }} ريال</h2>
        </div>
        <div class="descr px-4">
          <p class="text-gray-600">
            {{ product?.description }}
          </p>
        </div>
        <div class="checkout flex justify-between items-center px-4">
          <button 
          @click="addToCart(product)"
           class="w-3/4 text-white bg-blue-600 rounded-xl p-4">
            شراء الان
          </button>
          <button
            @click="addToCart(product)"
            class="border border-gray-600 text-blue-600 mx-auto p-4 rounded-xl"
          >
             <router-link to="/tabs/CartPage">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </router-link>
          </button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "ProducPage",
  components: {
    IonPage,
    IonContent,
    LoadingSpinner,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      product: null,
      Loading: true,
    };
  },
  async created() {
    this.loading();
    await this.getProduct();
  },
  mounted() {
    this.loading();
  },
  methods: {
    async addToCart(product) {
      console.log(product);
      const cart = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0].src,
        qty: 1,
      };
      await this.$store.dispatch("addToCart", cart);

      this.alert("نجاح", " تم اضافه المنتج الي السله بنجاح");
      console.log(this.$store.state.products.cart);
    },
    async getProduct() {
      const id = this.$route.params.id;
      const url = `https://eng-alzubair.com/wp-json/wcfmmp/v1/products/${id}`;
      const res = await axios.get(url);
      this.product = res.data;
    },
  },
  inject: ["alert", "loading"],
};
</script>

<style></style>
