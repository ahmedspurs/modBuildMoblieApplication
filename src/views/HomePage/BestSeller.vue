<script setup>
  import ProductCard from "@/components/cards/ProductCard.vue";
  import { ref, computed, defineProps } from "vue";
  import { autoResizeBestProducts } from "@/composables/autoResizeSlider.js";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
  } from "swiper";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/a11y";
  import "swiper/css/autoplay";
  import "swiper/css/effect-fade";
  // import { computed } from 'vue';

  defineProps(["slides"]);

  const modules = [
    Navigation,
    Pagination,
    A11y,
    Scrollbar,
    Autoplay,
    EffectFade,
  ];

  const screenWidth = ref(window.innerWidth);
  window.addEventListener("resize", function () {
    screenWidth.value = window.innerWidth;
  });

  const auto = computed(() => autoResizeBestProducts(screenWidth.value));
</script>

<template>
  <div style="min-height: 370px">
    <swiper
      :slides-per-view="auto"
      :space-between="16"
      :autoplay="false"
      :pagination="false"
      :modules="modules"
      v-if="slides && slides.length > 0"
    >
      <swiper-slide v-for="slide in slides" :key="slide?.id">
        <product-card :product="slide"></product-card>
      </swiper-slide>
    </swiper>
  </div>
</template>
