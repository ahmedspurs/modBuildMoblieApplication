<template>
  <ion-page>
    <ion-header>
      <div class="flex items-cnter justify-between px-4 py-2">
        <div class="p-4">
          <router-link to="/tabs/ProfilePage">
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
        <h2>الطلبات السابقه</h2>
        <div class="flex items-center">
          <div class="p-3">
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
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content>
      <div class="last-order p-4">
        <router-link to="/tabs/LastOrder">
          <div
            class="
              flex
              items-center
              justify-between
              bg-gray-200
              p-4
              rounded-xl
              mt-2
            "
            :key="item"
            v-for="item in 7"
          >
            <div>
              <h2 class="text-gray-700">طلب رقم #1298</h2>
              <h2 class="text-gray-700">20/10/022 || 05:55 pm</h2>
            </div>
            <h2 class="text-blue-600">126.99$</h2>
          </div>
        </router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage , IonHeader , IonContent } from "@ionic/vue";

export default {
  name: "LastOrders",
  components: {
    IonPage , IonHeader , IonContent
  },
};
</script>

<style>
</style>