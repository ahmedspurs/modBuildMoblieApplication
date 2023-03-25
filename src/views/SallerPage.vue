<template>
  <ion-page>
    <ion-header>
      <div class="flex items-cnter justify-between px-4 py-2">
        <div class="p-4">
          <router-link to="/tabs/SallersPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-black"
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
          </router-link>
        </div>
        <h2>
          {{ products[0]?.user?.name }}
        </h2>
        <div class="flex items-center">
          <div class="p-3">
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
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content>
      <div class="flex justify-center items-center">
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
            v-model="search"
            placeholder="بحث"
          />
        </div>
      </div>
       <div v-if="filtered.length==0 " class="h-screen flex items-center justify-center text-center">
        <h2>عفوا لا توجد منتجات</h2>
      </div>
      <div class="grid grid-cols-2 gap-4 p-4 py-8">
        <div class="card" :key="item" v-for="item in filtered">
          <div class="border border-gray-300 rounded-xl p-6 relative">
            <router-link :to="`/tabs/ProducPage/${item?.id}`">
              <img
                class=""
                :src="`https://mod-bina.com/uploads/${item?.image?.image}`"
                loading="lazy"
              />
            </router-link>

            <div class="text-right">
              <span class="block font-semibold"> {{ item?.name }}</span>
              <span class="block"> {{ item?.user?.name }}</span>
              <span class="text-blue-500 font-semibold block pt-2"
                >{{ item?.price }}$</span
              >
            </div>

        
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent } from "@ionic/vue";
import { mapGetters } from "vuex";

export default {
  name: "ProductsPage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
  },
  computed:{
    ...mapGetters(["allProducts"]),
    filtered() {
      return this.products.filter((item) => {
        return item.name.includes(this.search);
      });
    },
  } ,
  data() {
    return {
      products: [],
      search : ""
    };
  },
  mounted() {
    this.products = this.allProducts.filter(
      (word) => word.user_id == this.$route.params.id
    );
  },
};
</script>

<style></style>
