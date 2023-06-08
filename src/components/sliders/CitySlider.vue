<script setup>
  import { IonChip } from "@ionic/vue";
  import { ref, computed, defineProps, onMounted } from "vue";
  import { autoResizeCityChips } from "@/composables/autoResizeSlider.js";
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

  const props = defineProps(["slides", "showAll"]);

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

  const handleClick = (id) => {
    slidesData.value.forEach((city) => {
      city.active = false;
      if (city.id == id) city.active = true;
    });
  };

  const slidesData = ref([]);

  onMounted(() => (slidesData.value = props.slides));

  const auto = computed(() => autoResizeCityChips(screenWidth.value));
</script>

<template>
  <swiper
    :slides-per-view="auto"
    :space-between="16"
    :autoplay="false"
    :pagination="false"
    :modules="modules"
    v-if="slidesData && slidesData.length > 0"
  >
    <!-- list of cities -->
    <swiper-slide v-for="slide in slidesData" :key="slide?.id">
      <router-link
        @click="handleClick(slide?.id)"
        :to="`/tabs/stores?filter=${slide?.name}`"
      >
        <ion-chip :color="slide?.active ? 'primary' : 'dark'" class="chip">{{
          slide && slide.name
        }}</ion-chip>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
  a {
    color: inherit;
  }
  .card-text {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  .card-slider-small-container {
    width: 80px;
    height: 80px;
    margin-bottom: 2rem;
    background: #ccc;
    border-radius: var(--radius);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }

  @media only screen and (min-width: 300px) {
    .card-slider-small-container {
      width: 80px;
      height: 80px;
    }
  }

  @media only screen and (min-width: 380px) {
    .card-slider-small-container {
      width: 75px;
      height: 75px;
    }
  }

  @media only screen and (min-width: 460px) {
    .card-slider-small-container {
      width: 90px;
      height: 90px;
    }
  }

  @media only screen and (min-width: 520px) {
    .card-slider-small-container {
      width: 100px;
      height: 100px;
    }
  }
</style>
