<template>
  <ion-page>
    <loading-spinner v-if="$store.state.loader" />
    <ion-header v-if="!$store.state.loader">
      <div class="flex items-cnter justify-between px-4">
        <h2>الاقسام</h2>
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
    <ion-content v-if="!$store.state.loader">
         <div v-if="allCategories.length==0 " class="h-screen flex items-center justify-center text-center">
        <h2>عفوا لا توجد اقسام</h2>
      </div>
      <div class="grid grid-cols-2 gap-4 p-4">
        <div class="card" :key="item.id" v-for="item in allCategories">
          <ion-card v-if="!item.parent" class="shadow-none">
            <router-link :to="`/tabs/SubCategory/${item.id}`">
              <img
                :src="item?.image?.src"
                loading="lazy"
                class="h-36 w-full"
              />
            </router-link>
                  <h1 style="font-size: 18px;text-align:center;color:black"> {{ item?.name }}</h1>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonHeader, IonCard } from "@ionic/vue";
import { mapGetters } from "vuex";
import { ref } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  name: "CategoryPage",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonCard,
    LoadingSpinner,
  },
  mounted() {
    this.loading();
  },
  computed: mapGetters(["allCategories"]),
  setup() {
    const accordionGroup = ref();
    return {
      accordionGroup,
    };
  },
  inject: ["loading"],
};
</script>

<style></style>
