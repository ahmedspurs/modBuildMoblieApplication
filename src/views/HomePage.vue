<template>
  <ion-page>
    <loading-spinner v-show="$store.state.loader" />
    <ion-content v-show="!$store.state.loader">
      <!-- header section -->
      <div class="header bg-blue-500 text-white py-4 rounded-b-2xl">
        <div class="flex items-cnter justify-between px-4">
          <div class="flex">
            <router-link to="/tabs/ProfilePage">

                <img
                :src="'https://www.mod-bina.com/uploads/' + userData?.data?.image"
              loading="lazy"
              class="w-12 rounded-full mt-2 mx-2"
            />
            </router-link>
          
            <h2>مرحبا, <span class="text-xl">{{userData?.data?.name}}</span></h2>
          </div>
          <div class="flex items-center">
            <div class="p-3">
            <router-link to="/tabs/CartPage">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
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
            </div>
          </div>
        </div>
        <h2 class="text-center">نتمني لك يوما سعيدا</h2>
        <p class="text-center p-2">ابحث عن مغلق او منتج</p>
      </div>
      <!-- search -->
      <div class="flex justify-center items-center -mt-4">
        <div class="flex w-3/4" dir="rtl">
          <button class="bg-white p-2 rounded-r-2xl shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <input
            type="text"
            class="rounded-l-2xl w-full outline-none shadow-xl"
            placeholder="بحث"
          />
        </div>
      </div>
      <!-- categoris section -->
      <div class="flex px-4 justify-between items-center">
        <ion-text>
          <h1 class="font-semibold">الاقسام</h1>
        </ion-text>
        <ion-text class="flex items-center">
          <router-link to="/tabs/CategoryPage">
            <h3 class="text-sm mt-8">عرض الكل</h3>
          </router-link>
        </ion-text>
      </div>
      <swiper dir="rtl" class="cats" :slides-per-view="2.5" :space-between="10">
        <swiper-slide class="px-2" v-for="item in allCategories" :key="item.id">
          <router-link :to="`/tabs/SubCategory/${item.id}`">
            <ion-card class="shadow-none w-full">
              <img
                :src="`https://www.mod-bina.com/uploads/${item?.image}`"
                loading="lazy"
                height="100"
                class="rounded-xl h-56 w-full"
              />

              <ion-card-content>
                <ion-text class="text-center">
                  <span class="font-semibold"> {{ item?.name }}</span>
                </ion-text>
              </ion-card-content>
            </ion-card>
          </router-link>
        </swiper-slide>
      </swiper>

      <!-- best sales -->
      <div class="flex px-4 justify-between items-center">
        <ion-text>
          <h1 class="font-semibold">الاكثر مبيعا</h1>
        </ion-text>
        <ion-text class="flex items-center">
          <router-link to="/tabs/CategoryPage">
            <h3 class="text-sm mt-8">عرض الكل</h3>
          </router-link>
        </ion-text>
      </div>
      <swiper dir="rtl" class="p-2 leatest" :slides-per-view="1.5" :space-between="10">
        <swiper-slide class="p-2" :key="item?.id" v-for="item in products">
          <div class="border border-gray-300 rounded-xl p-6 ">
            <router-link :to="`/tabs/ProducPage/${item?.id}`">
              <img
                class="w-full h-36"
                :src="`https://www.mod-bina.com/uploads/${item?.image?.image}`"
                loading="lazy"
              />
              
            <div class="text-right">
              <span class="block font-semibold"> {{ item?.name }}</span>
              <span class="block"> {{ item?.user?.name }}</span>
              <span class="text-blue-500 font-semibold block pt-2"
                >{{ item?.price }}$</span
              >
            </div>
            </router-link>


          
          </div>
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonText,
} from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    IonPage,
    IonContent,

    IonCard,
    IonCardContent,
    IonText,
    LoadingSpinner,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      Loading: true,
      categories: [],
      products: [],
    };
  },

  mounted() {
    this.categories = this.allSubCategories;
    this.products = this.allProducts;
    this.loading();
  },
  computed: mapGetters(["", "allCategories", "allSubCategories","userData"]),
  methods: {
    showAlert() {
      this.toast("top", "success", "تم اضافه العنصر الي المفضله");
    },
  },
  inject: ["toast", "loading"],
};
</script>

<style></style>
