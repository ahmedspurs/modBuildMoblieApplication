<script setup>
  import { computed } from "vue";
  import { useStore } from "@/store";
  import { Swiper, SwiperSlide } from "swiper/vue";
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

  const slides = computed(() => store.getAllAds);

  const modules = [
    Navigation,
    Pagination,
    A11y,
    Scrollbar,
    Autoplay,
    EffectFade,
  ];
</script>
<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    :autoplay="true"
    :speed="600"
    :loop="true"
    :pagination="true"
    :modules="modules"
    effect="fade"
    v-if="slides?.length > 0"
  >
    <swiper-slide v-for="slide in slides" :key="slide?.id">
      <div
        class="ads-slider-container"
        :style="{
          backgroundImage: 'url(' + `${slide?.x_featured_media}` + ')',
        }"
      ></div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
  .ads-slider-container {
    min-height: 170px;
    background: #ccc;
    border-radius: var(--radius);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media only screen and (min-width: 440px) {
    .ads-slider-container {
      min-height: 240px;
    }
  }
</style>
