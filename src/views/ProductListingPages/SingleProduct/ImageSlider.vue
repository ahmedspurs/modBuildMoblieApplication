<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { defineProps } from "vue";
  import "swiper/css";
  import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
  } from "swiper";

  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/a11y";

  const modules = [
    Navigation,
    Pagination,
    A11y,
    Scrollbar,
    Autoplay,
    EffectFade,
  ];

  defineProps(["images"]);
</script>

<template>
  <div class="img z-10 relative">
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :pagination="true"
      :modules="modules"
      dir="rtl"
      class="p-2 leatest"
    >
      <swiper-slide class="p-2 relative" v-for="(image, i) in images" :key="i">
        <img
          class="w-full h-1/2 rounded-b-2xl shadow-md"
          :src="image?.src"
          loading="lazy"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
