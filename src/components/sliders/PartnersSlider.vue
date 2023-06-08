<script setup>
  import { computed, ref } from "vue";
  import { useStore } from "@/store";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { autoResizePartners } from "@/composables/autoResizeSlider";
  import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
  } from "swiper";

  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/a11y";
  import "swiper/css/autoplay";
  import "swiper/css/effect-fade";

  const store = useStore();

  const slides = computed(() => store.getAllPartners);

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

  const auto = computed(() => autoResizePartners(screenWidth.value));
</script>

<template>
  <swiper
    :slides-per-view="auto"
    :space-between="16"
    :autoplay="true"
    :loop="slides.length > auto"
    :pagination="false"
    :modules="modules"
    v-if="slides?.length > 0"
  >
    <!-- list of cities -->
    <swiper-slide v-for="slide in slides" :key="slide?.id">
      <img
        :src="slide?.x_featured_media"
        :alt="slide?.title?.rendered"
        loading="lazy"
        class="h-20"
      />
    </swiper-slide>
  </swiper>
</template>
