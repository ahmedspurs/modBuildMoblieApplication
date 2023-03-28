<template>
  <ion-page>
    <!-- HEADER -->
    <ion-header>
      <div class="flex items-cnter justify-between px-4 py-2">
        <div class="p-4">
          <router-link to="/tabs/LastOrders">
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
        <h2>تفاصيل الطلب</h2>
        <div class="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            loading="lazy"
            class="w-12 rounded-full mt-2 mx-2"
          />
        </div>
      </div>
    </ion-header>
    <ion-content>
      <!-- order status -->
      <div class="px-4 flex justify-between items-center">
        <h2 class="font-semibold">حاله الطلب</h2>
        <h2 class="font-semibold text-blue-500">قيد التنفيذ</h2>
      </div>
      <!-- order date -->
      <div class="px-4 flex justify-between items-center">
        <h2 class="font-semibold">تاريخ الطلب</h2>
        <h2>20/10/022 || 05:55 pm</h2>
      </div>
      <div class="cart px-4 py-2">
        <h2>تفاصيل الطلب</h2>

        <div
          class="flex justify-between items-center"
          :key="item"
          v-for="item in 4"
        >
          <div class="w-3/4">
            <img
              class="w-24 h-24"
              src="http://www.unitycement.com/site-Ar/wp-content/uploads/2017/11/%D8%A8%D9%88%D8%B1%D8%AA%D9%84%D8%A7%D9%86%D8%AF%D9%8A-%D8%B9%D8%A7%D8%AF%D9%8A1.png"
              loading="lazy"
            />
          </div>
          <div class="w-full">
            <h2 class="block">مفك براغي</h2>
            <div class="flex justify-between">
              <span class="text-blue-500 font-semibold block text-xl pb-2"
                >125.99$</span
              >
              <span class="block text-xl">الكميه : 5</span>
            </div>
          </div>
        </div>
      </div>

      <!-- total price section -->

      <div class="total-price">
        <ion-card>
          <ion-card-content>
            <div class="products flex justify-between">
              <ion-text color="dark">
                <b>ملخص الطبيه</b>
              </ion-text>
              <ion-text color="dark">
                <b>3 منتجات</b>
              </ion-text>
            </div>
            <div class="products flex justify-between">
              <ion-text color="dark">
                <span>رسوم التوصيل</span>
              </ion-text>
              <ion-text color="dark">
                <span>50$</span>
              </ion-text>
            </div>
            <div class="products flex justify-between">
              <ion-text color="dark">
                <span>المجموع الكلي</span>
              </ion-text>
              <ion-text color="dark">
                <span>550.99$</span>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonText,
  IonCard,
  IonCardContent,
} from "@ionic/vue";

export default {
  name: "LastOrder",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonText,
    IonCard,
    IonCardContent,
  },
};
</script>

<style></style>
