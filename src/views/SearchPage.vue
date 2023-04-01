<template>
  <ion-page>
    <ion-content>
      <loading-spinner v-if="$store.state.loader" />
      <h1
        class="px-4 font-semibold -violet-600 text-center"
        style="font-size: 16px"
      >
        بحث عن منتج
      </h1>
      <div class="products h-full" v-if="!$store.state.loader">
        <div class="flex justify-center items-center py-8">
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
              v-model="search"
            />
          </div>
        </div>

        <div
          class="flex h-full justify-center items-center"
          v-show="filtered.length == 0 && search != ''"
        >
          <p>عفوا لاتوجد منتجات</p>
        </div>

        <div class="grid grid-cols-2 gap-4 p-4 py-8" v-show="search != ''">
          <div class="card" :key="item.id" v-for="item in filtered">
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
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { mapGetters } from "vuex";
import LoadingSpinner from "../components/LoadingSpinner.vue";
export default {
  name: "ProductsPage",
  components: {
    IonPage,
    IonContent,
    LoadingSpinner,
  },
  data() {
    return {
      header: "",
      products: [],
      search: "",
      filterProducts: [],
    };
  },
  computed: {
    ...mapGetters(["allCategories", "allProducts"]),
    filtered() {
      return this.allProducts.filter((item) => {
        return item.name.includes(this.search);
      });
    },
  },
  created() {
    // this.veirfy();
    this.loading();
    console.log(this.products);
  },
  inject: ["veirfy", "loading"],
};
</script>

<style></style>
