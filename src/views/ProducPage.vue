<template>
  <ion-page>
    <loading-spinner v-if="$store.state.loader" />

    <!-- <ion-content v-if="product?.type != 'variable'">
      <div class="img z-10 relative">
        <swiper
          dir="rtl"
          class=" "
          style="direction: rtl !important"
          :slides-per-view="1"
          :space-between="0"
        >
          <swiper-slide class="" v-for="item in product?.images" :key="item">
            <div class="img relative">
              <img class="w-full" :src="`${item?.src}`" loading="lazy" />

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
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="bg-white -mt-6">
        <div class="flex justify-between items-center p-4 w-full">
          <div>
            <h2>{{ product?.name }}</h2>
            <span class="block"> {{ product?.user?.name }}</span>
          </div>
          <h2>{{ variations.option }} ريال</h2>
        </div>
        <div class="descr px-4">
          <p class="text-gray-600">
            {{ product?.description }}
          </p>
        </div>
        <div class="checkout flex justify-between items-center px-4">
          <button
            @click="addToCart(product)"
            class="w-3/4 text-white bg-blue-600 rounded-xl p-4"
          >
            شراء الان
          </button>
          <button
            @click="addToCart(product)"
            class="border border-gray-600 text-blue-600 mx-auto p-4 rounded-xl"
          >
            <router-link to="/tabs/CartPage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
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
    </ion-content> -->

    <ion-content v-if="product?.type == 'variable'">
      <div class="img z-10 relative">
        <swiper dir="rtl" class="leatest">
          <swiper-slide
            class="p-2 relative"
            v-for="item in product?.images"
            :key="item"
          >
            <img
              class="w-full h-60 rounded-b-2xl"
              :src="item.src"
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

      <ion-select
        interface="popover"
        :value="price"
        @checkout="priceFilter($event.target.value)"
        :placeholder="`اختر ${product?.attributes[0]?.name}`"
      >
        <ion-select-option
          v-for="item in product?.attributes[0]?.options"
          :key="item"
          :value="item"
          >{{ item }}</ion-select-option
        >
      </ion-select>
      <ion-radio-group value="price" @click="priceFilter($event.target.value)">
        <ion-radio value="10">10</ion-radio><br />
        <ion-radio value="20">20</ion-radio><br />
        <ion-radio value="30">30</ion-radio><br />
      </ion-radio-group>
      <div class="bg-white -mt-6">
        <div class="flex justify-between items-center p-4 w-full">
          <div>
            <h2>{{ product?.name }}</h2>
            <span class="block"> {{ product?.user?.name }}</span>
          </div>
          <h2>{{ price[0]?.data?.price || product?.price }} ريال</h2>
        </div>
        <div class="descr px-4">
          <p class="text-gray-600" v-html="product?.description"></p>
        </div>
        <div class="checkout flex justify-between items-center px-4">
          <button
            @click="addToCart(product)"
            class="w-3/4 text-white bg-blue-600 rounded-xl p-4"
          >
            شراء الان
          </button>
          <button
            @click="addToCart(product)"
            class="border border-gray-600 text-blue-600 mx-auto p-4 rounded-xl"
          >
            <router-link to="/tabs/CartPage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
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
      product: [],
      Loading: true,
      variations: [],
      auth: {
        username: "ck_cfd30277f5f54cdf6ae4ae28d91317ee1dffecdb",
        password: "cs_c3ee33707231d3787bad4f125ace3bd2685237c6",
      },
      price: 0,
      option: 10,
    };
  },
  async created() {
    this.loading();
    await this.getProduct();
    await this.priceFilter(10);
  },
  mounted() {
    this.loading();
    console.log(this.price);
  },
  methods: {
    async addToCart(product) {
      console.log(product);
      const cart = {
        id: product.id,
        name: product.name,
        price: this.price[0]?.data?.price,
        image: product.images[0].src,
        qty: 1,
      };
      await this.$store.dispatch("addToCart", cart);

      this.alert("نجاح", " تم اضافه المنتج الي السله بنجاح");
      console.log(this.$store.state.products.cart);
    },
    async getProduct() {
      const id = this.$route.params.id;
      const url = `https://eng-alzubair.com/wp-json/wc/v1/products/${id}`;
      const res = await axios.get(url, { auth: this.auth });
      this.product = res.data;
      this.product?.variations.forEach((element) => {
        this.variations.push({
          data: element,
          option: Object.values(element.attributes),
        });
      });
      console.log(this.variations[0].option[0].option);
    },
    async priceFilter(option) {
      this.price = this.variations.filter(
        (variation) => variation.option[0].option == option
      );
      console.log(this.price[0]?.data?.price);
      console.log(option);
    },
  },
  inject: ["alert", "loading"],
};
</script>

<style></style>
