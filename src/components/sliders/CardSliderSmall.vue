<script setup>
  import { ref, computed, defineProps } from "vue";
  import { autoResizeCardSliderSmall } from "@/composables/autoResizeSlider.js";
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

  const props = defineProps(["slides", "slideType"]);

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

  const auto = computed(() => autoResizeCardSliderSmall(screenWidth.value));

  const link = (id) => {
    if (props.slideType == "categories")
      return `/tabs/products-listing?type=categories&id=${id}`;
    else return `/tabs/products-listing?type=stores&id=${id}`;
  };
</script>

<template>
  <div style="min-height: 107px">
    <swiper
      :slides-per-view="auto"
      :space-between="16"
      :autoplay="false"
      :pagination="false"
      :modules="modules"
      v-if="slides && slides.length > 0"
    >
      <swiper-slide
        v-for="slide in slides"
        :key="slideType == 'stores' ? slide?.vendor_id : slide?.id"
      >
        <router-link
          :to="link(slideType == 'stores' ? slide?.vendor_id : slide?.id)"
        >
          <div
            class="card-slider-small-container shadow-md"
            :style="{
              backgroundImage:
                'url(' +
                `${
                  slideType == 'stores'
                    ? slide?.vendor_shop_logo
                    : slide?.image?.src
                }` +
                ')',
            }"
          >
            <p class="text-xs card-text">
              {{
                slideType == "stores" ? slide?.vendor_shop_name : slide?.name
              }}
            </p>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
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
    margin-bottom: 3rem;
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
