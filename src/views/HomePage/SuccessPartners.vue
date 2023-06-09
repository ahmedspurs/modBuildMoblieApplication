<script setup>
  import ErrorSectionLocal from "@/components/Error/ErrorSectionLocal.vue";
  import PartnersSlider from "@/components/sliders/PartnersSlider.vue";
  import { useStore } from "@/store";
  import { computed } from "vue";

  const store = useStore();

  const partners = computed(() => store.getAllPartners);

  const fetchAllPartners = async () => {
    await store.fetchAllPartners();
  };
</script>

<template>
  <div class="partners-container p-4">
    <h2 class="text-white text-xl mt-0">شركاء النجاح</h2>
    <partners-slider
      v-if="store.partnersQueryStatus && partners?.length > 0"
    ></partners-slider>
    <error-section-local
      v-else-if="
        !store.partnersQueryStatus &&
        partners?.length == 0 &&
        !store.partnersLoading
      "
      @on-reload="fetchAllPartners"
    ></error-section-local>
  </div>
</template>

<style scoped>
  .partners-container {
    min-height: 150px;
    background: linear-gradient(45deg, #2638ff 0%, #292f53 100%);
  }
  @media only screen and (min-width: 450px) {
    .partners-container {
      min-height: 170px;
    }
  }
</style>
