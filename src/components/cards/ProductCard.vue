<script setup>
  import { defineProps } from "vue";
  import { IonButton } from "@ionic/vue";
  import { useRouter } from "vue-router";
  import { useCart } from "@/store/cart";
  import { ref } from "vue";

  defineProps(["product", "shadow"]);

  const router = useRouter();

  const navigate = (id) => {
    router.push(`/tabs/products-listing/${id}`);
  };

  const disableBtn = ref(false);
  const cartStore = useCart();
  const addToCart = (product) => {
    disableBtn.value = true;
    cartStore.addToCart(product);
    setTimeout(() => (disableBtn.value = false), 800);
  };
</script>

<template>
  <div class="product-card-container shadow-md" :class="shadow && 'shadow'">
    <div
      clickable
      @click.exact="navigate(product?.id)"
      class="product-card-image"
      :style="{
        backgroundImage: `url(${
          product && product.images && product.images.length > 0
            ? product.images[0].src
            : ''
        })`,
      }"
    ></div>
    <div class="product-card-body h-full px-4 pb-4">
      <h4
        clickable
        @click.exact="navigate(product?.id)"
        class="text-base font-bold"
      >
        {{ product?.name }}
      </h4>
      <div
        clickable
        @click.exact="navigate(product?.id)"
        class="price-container flex justify-between items-center"
      >
        <p class="text-base font-semibold">{{ product?.price }} ر.س</p>
        <p class="text-sm line-through">
          {{ product?.regular_price }}
          {{ product && product.regular_price ? "ر.س" : "" }}
        </p>
      </div>
      <!-- store info -->
      <div class="flex justify-between items-center mt-4">
        <span
          clickable
          @click.exact="navigate(product?.id)"
          class="block font-semibold text-sm text-slate-700"
          >{{ product?.store?.vendor_shop_name }}</span
        >
        <router-link
          class="block w-10 h-10"
          :to="`/tabs/products-listing?type=stores&id=${product?.store?.vendor_id}`"
        >
          <div
            class="w-full h-full rounded-full bg-image shadow-md"
            :style="{
              backgroundImage: `url(${product?.store?.vendor_shop_logo})`,
            }"
          ></div>
        </router-link>
      </div>
      <ion-button
        :disabled="disableBtn"
        @click="addToCart(product)"
        class="block w-full mt-auto"
        >إضافة للسلة</ion-button
      >
    </div>
  </div>
</template>

<style scoped>
  .product-card-container {
    max-width: 100%;
    min-height: 320px;
    overflow: hidden;
    border-radius: var(--radius);
    background: #f5f7fa;
  }
  .product-card-image {
    min-height: 150px;
    width: 100%;
    background: #ccc;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .product-card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 220px;
    max-height: 220px;
  }

  .shadow {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
</style>
