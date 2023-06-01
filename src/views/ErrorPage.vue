<script setup>
  import { IonPage, IonContent, IonButton } from "@ionic/vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const reload = () => {
    router.push("/");
  };
</script>

<template>
  <ion-page>
    <ion-content>
      <div class="p-4 flex justify-center items-center h-full">
        <div class="flex flex-col justify-center">
          <p class="text-lg mb-4">لقد حدث خطأ ما</p>
          <ion-button @click="reload">إعادة التحميل</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
