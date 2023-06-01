<script setup>
  import { IonPage, IonContent } from "@ionic/vue";
  import TheHeader from "@/components/TheHeader/TheHeader.vue";
  import CategoriesGrid from "@/views/CategoryListingPage/CategoriesGrid.vue";
  import { useCategory } from "@/store/categories";
  import { computed, onMounted } from "vue";
  import { useStore } from "@/store";
  import LoadingSpinner from "@/components/LoadingSpinner.vue";

  const store = useStore();
  const loading = computed(() => store.getLoading);
  const categoryStore = useCategory();
  const allCAtegories = computed(() => categoryStore.getAllCategories);

  onMounted(async () => {
    store.loading = true;
    if (allCAtegories.value.length == 0) {
      await categoryStore.fetchAllCategories();
    }
    store.loading = false;
  });
</script>

<template>
  <ion-page>
    <loading-spinner v-if="loading" />
    <ion-content v-else>
      <the-header></the-header>
      <div v-if="allCAtegories.length > 0" class="px-4 py-6">
        <categories-grid :categories="allCAtegories"></categories-grid>
      </div>
      <div v-else class="h-3/4 flex items-center justify-center text-center">
        <p class="text-slate-800 text-xl">عفوا لا توجد اقسام</p>
      </div>
    </ion-content>
  </ion-page>
</template>
