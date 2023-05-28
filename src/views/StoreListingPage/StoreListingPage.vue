<script setup>
  import { IonPage, IonContent } from "@ionic/vue";
  import TheHeader from "@/components/TheHeader/TheHeader.vue";
  import CitySlider from "@/components/sliders/CitySlider.vue";
  import StoresGrid from "@/views/StoreListingPage/StoresGrid.vue";
  import { cities } from "@/data/cities";
  import { computed, onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  import { useVendor } from "@/store/vendors";
  import { useStore } from "@/store";
  import LoadingSpinner from "@/components/LoadingSpinner.vue";

  const store = useStore();
  const loading = computed(() => store.getLoading);

  const allColor = ref("dark");

  const route = useRoute();

  const vendorStore = useVendor();
  const allVendors = computed(() => vendorStore.getAllVendors);

  onMounted(async () => {
    store.loading = true;
    if (route.query?.filter == undefined) {
      route.query.filter = "all";
      allColor.value = "primary";
    } else {
      allColor.value = "dark";
    }

    if (allVendors.value.length == 0) {
      await vendorStore.fetchAllVendors();
    }
    store.loading = false;
  });
</script>

<template>
  <ion-page>
    <loading-spinner v-if="loading" />
    <ion-content v-else>
      <the-header></the-header>
      <div v-if="allVendors.length > 0" class="px-4">
        <!-- cities filter -->
        <city-slider
          class="my-4"
          :slides="cities"
          :show-all="true"
          :all-color="allColor"
        ></city-slider>
        <stores-grid :stores="allVendors"></stores-grid>
      </div>
      <div v-else class="h-3/4 flex items-center justify-center text-center">
        <p class="text-slate-800 text-xl">عفوا لا توجد مغالق</p>
      </div>
    </ion-content>
  </ion-page>
</template>
