<script setup>
  import { IonContent, IonText } from "@ionic/vue";
</script>

<template>
  <ion-content>
    <div class="flex flex-col justify-center items-center h-full -mt-12">
      <ion-text size="small">
        <p class="px-8 text-gray-400">
          عفوا السله فارغه الرجاء اضافه بعض المنتجات اولا
        </p>
      </ion-text>
      <router-link class="py-4" to="/tabs/home">
        <button class="p-3 rounded bg-blue-500 text-white my-2">
          اذهب الي المتجر
        </button>
      </router-link>
    </div>
  </ion-content>
</template>
