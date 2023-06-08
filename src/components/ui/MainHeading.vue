<script setup>
  import { defineProps } from "vue";
  import { IonText } from "@ionic/vue";
  defineProps(["title", "link"]);
</script>

<template>
  <div class="flex justify-between items-center">
    <ion-text>
      <h2 class="font-semibold text-xl">{{ title }}</h2>
    </ion-text>
    <ion-text class="flex items-center">
      <router-link :to="link">
        <h3 class="text-sm mt-8">عرض الكل</h3>
      </router-link>
    </ion-text>
  </div>
</template>
