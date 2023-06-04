<script setup>
  import { IonButton } from "@ionic/vue";
  import { defineEmits, ref } from "vue";

  const emit = defineEmits(["onReload"]);

  const disabled = ref(false);

  const reload = () => {
    disabled.value = true;
    setTimeout(() => (disabled.value = false), 5000);
    emit("onReload");
  };
</script>

<template>
  <div class="p-4 flex justify-center items-center h-full">
    <div class="flex flex-col justify-center text-center">
      <p class="text-xl">لقد حدث خطأ ما</p>
      <p class="text-sm text-slate-600 mb-4">راجع إتصالك بالشبكة</p>
      <ion-button :disabled="disabled" @click="reload"
        >إعادة التحميل</ion-button
      >
    </div>
  </div>
</template>
