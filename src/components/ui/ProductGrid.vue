<script setup>
  import ProductCard from "@/components/cards/ProductCard.vue";
  import { defineProps } from "vue";

  defineProps(["products"]);
</script>

<template>
  <div v-if="products && products.length > 0" class="product-list">
    <product-card
      v-for="product in products"
      :key="product?.id"
      :product="product"
      :shadow="true"
    ></product-card>
  </div>
</template>

<style scoped>
  .product-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  @media only screen and (min-width: 350px) {
    .product-list {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (min-width: 540px) {
    .product-list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
