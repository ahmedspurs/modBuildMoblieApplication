<script setup>
  import { IonPage, IonContent } from "@ionic/vue";
  import TheHeader from "@/components/TheHeader/TheHeader.vue";
  import CategoriesGrid from "@/views/CategoryListingPage/CategoriesGrid.vue";
  import { useCategory } from "@/store/categories";
  import { computed, onMounted } from "vue";
  import { useStore } from "@/store";
  import LoadingSpinner from "@/components/LoadingSpinner.vue";
  import ErrorSection from "../../components/Error/ErrorSection.vue";

  const store = useStore();
  const loading = computed(() => store.getLoading);
  const categoryStore = useCategory();
  const allCAtegories = computed(() => categoryStore.getAllCategories);

  const queryStatus = computed(() => categoryStore.getQueryStatus);

  onMounted(async () => {
    store.loading = true;
    if (allCAtegories.value.length == 0) {
      await categoryStore.fetchAllCategories();
    }
    store.loading = false;
  });

  const reload = async () => {
    await categoryStore.fetchAllCategories();
  };
</script>

<template>
  <ion-page>
    <loading-spinner v-if="loading" />
    <ion-content v-else>
      <the-header></the-header>
      <div v-if="!queryStatus" class="h-3/4">
        <error-section @on-reload="reload"></error-section>
      </div>
      <div
        v-else-if="allCAtegories.length == 0 && queryStatus"
        class="h-3/4 flex items-center justify-center text-center"
      >
        <p class="text-slate-500 text-sm">عفوا لا توجد أقسام</p>
      </div>
      <div v-if="allCAtegories.length > 0 && queryStatus" class="px-4 py-6">
        <categories-grid :categories="allCAtegories"></categories-grid>
      </div>
    </ion-content>
  </ion-page>
</template>
