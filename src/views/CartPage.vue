<template>
  <ion-page>
    <!--
       welcome to cart page
       this page have 3 methods : 
       1- min and max methods for control the quantaty of product in cart
       2- rem methos for remove product from cart
     -->
    <loading-spinner v-if="$store.state.loader" />
    <ion-header v-if="!$store.state.loader">
      <ion-toolbar>
        <h1
          class="p-4 font-semibold -blue-600 text-center"
          style="font-size: 16px"
        >
          سله التسوق
        </h1>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <loading-spinner v-if="$store.state.loader" />
      <div class="cartPage h-full" v-if="!$store.state.loader">
        <div
          v-if="cartEmpty"
          class="flex flex-col justify-center items-center h-full -mt-12"
        >
          <ion-text size="small">
            <p class="px-8 text-gray-400">
              عفوا السله فارغه الرجاء اضافه بعض المنتجات اولا
            </p>
          </ion-text>
          <router-link class="py-4" to="/tabs/HomePage">
            <button class="p-3 rounded bg-blue-500 text-white my-2">
              اذهب الي المتجر
            </button>
          </router-link>
        </div>
        <div class="cart h-3/4 oveflow-scroll" v-if="!cartEmpty">
          <div
            class="flex justify-between items-center p-4 border-b border-gray-300"
            :key="item"
            v-for="(item, index) in $store.state.products.cart"
          >
            <div class="w-3/4">
              <img
                class="w-24 h-24"
                :src="item.image"
                loading="lazy"
              />
            </div>
            <div class="w-full">
              <span class="block">{{ item.name }}</span>

              <span class="font-semibold block pb-2"
                >{{
                  (item.price * item.qty)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
                <span class="text-sm">ريال</span>
              </span>

              <div class="flex items-center justify-between">
                <!-- delete icon-->

                <svg
                  @click="rem(index)"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <div class="flex">
                  <button
                    class="bg-gray-300 text-black rounded-full p-1"
                    @click="add(item)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                  <input
                    class="w-10 text-center pr-3 text-gray-600"
                    type="number"
                    disabled
                    min="1"
                    v-model="item.qty"
                  />
                  <button
                    class="bg-gray-300 text-black rounded-full p-1"
                    @click="min(item)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- total price section -->
          <div class="total-price">
            <ion-card>
              <ion-card-content>
                <ion-text color="dark">
                  <span class="text-[16px] font-semibold">ملخص الطلبيه</span>
                </ion-text>
                <div class="products flex justify-between ml-9 pt-2">
                  <ion-text color="dark">
                    <span cla> عدد المنتجات</span>
                  </ion-text>
                  <ion-text color="dark">
                    <span class="font-semibold"
                      >{{ $store.state.products.cart.length }} منتج</span
                    >
                  </ion-text>
                </div>

                <div class="products flex justify-between">
                  <ion-text color="dark">
                    <span>المجموع الكلي </span>
                  </ion-text>
                  <ion-text color="dark">
                    <span class="font-semibold"
                      >{{
                        totalPrice()
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      ريال</span
                    >
                  </ion-text>
                </div>
              </ion-card-content>
            </ion-card>
          </div>

          <!-- checkout section -->
          <div class="checkout p-2 w-full text-center">
              <ion-button @click="push()">اتمام الطلب</ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonButton,
  IonText,
  IonToolbar,
  IonCard,
  IonCardContent,
} from "@ionic/vue";
import { mapGetters } from "vuex";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  name: "CartPage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonButton,
    IonText,
    LoadingSpinner,
    IonToolbar,
    IonCard,
    IonCardContent,
  },
  data() {
    return {
      empty: true,
      total: 0,
    };
  },

  mounted() {
    this.loading();
  },
  computed: mapGetters(["cartEmpty"]),
  inject: ["veirfy", "loading"],
  methods: {
    add(item) {
      item.qty++;
      localStorage.setItem(
        "cart",
        JSON.stringify(this.$store.state.products.cart)
      );
    },
    min(item) {
      if (item.qty == 1) {
        localStorage.setItem(
          "cart",
          JSON.stringify(this.$store.state.products.cart)
        );
        console.log("equal 1");
      } else {
        item.qty--;
        localStorage.setItem(
          "cart",
          JSON.stringify(this.$store.state.products.cart)
        );
      }
    },
    updateCart() {
      localStorage.setItem(
        "cart",
        JSON.stringify(this.$store.state.products.cart)
      );
    },
    rem(index) {
      this.$store.state.products.cart.splice(index, 1);
      localStorage.setItem(
        "cart",
        JSON.stringify(this.$store.state.products.cart)
      );
    },
    totalPrice() {
      let sum = 0;
      this.$store.state.products.cart.forEach((item) => {
        let element = item.price * item.qty;
        sum += element;
      });
      this.total = sum;
      console.log(sum);
      return this.total;
    },
    push() {
      this.updateCart()
      if (localStorage.getItem("mod_user_token")) {
        this.$router.push("/tabs/CheckoutPage");
      } else if (localStorage.getItem("mod_user_token") == null) {
        this.$router.push("/tabs/LoginPage");
      }
    },
  },
};
</script>

<style></style>
