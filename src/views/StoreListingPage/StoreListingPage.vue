<script setup>
  import { IonPage, IonContent } from "@ionic/vue";
  import TheHeader from "@/components/TheHeader/TheHeader.vue";
  import CitySlider from "@/components/sliders/CitySlider.vue";
  import StoresGrid from "@/views/StoreListingPage/StoresGrid.vue";
  import { cities } from "@/data/cities";
  import { computed, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { useVendor } from "@/store/vendors";
  import { useStore } from "@/store";
  import LoadingSpinner from "@/components/LoadingSpinner.vue";
  import ErrorSection from "../../components/Error/ErrorSection.vue";

  const store = useStore();
  const loading = computed(() => store.getLoading);

  const route = useRoute();

  const vendorStore = useVendor();
  const allVendors = computed(() => vendorStore.getAllVendors);

  const queryStatus = computed(() => vendorStore.getQueryStatus);

  onMounted(async () => {
    store.loading = true;
    if (route.query?.filter == undefined) {
      route.query.filter = "all";
      // allColor.value = "primary";
    } else {
      // allColor.value = "dark";
    }

    if (allVendors.value.length == 0) {
      await vendorStore.fetchAllVendors();
    }
    console.log({ queryStatus: queryStatus.value });
    store.loading = false;
  });

  const reload = async () => {
    await vendorStore.fetchAllVendors();
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
        v-else-if="allVendors.length == 0 && queryStatus"
        class="h-3/4 flex items-center justify-center text-center"
      >
        <p class="text-slate-500 text-sm">عفوا لا توجد مغالق</p>
      </div>
      <div v-if="allVendors.length > 0 && queryStatus" class="px-4">
        <!-- cities filter -->
        <city-slider
          class="my-4"
          :slides="cities"
          :show-all="true"
        ></city-slider>
        <stores-grid :stores="allVendors"></stores-grid>
      </div>
    </ion-content>
  </ion-page>
</template>
