<script setup>
  import { useCart } from "@/store/cart";
  import { computed } from "vue";

  const cartStore = useCart();
  const count = computed(() => cartStore.getCartItems.length);
</script>

<template>
  <div class="flex items-center relative">
    <span class="bg-pink-600 rounded-full px-2 absolute -top-4 -right-4">{{
      count
    }}</span>
    <router-link to="/tabs/CartPage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </router-link>
  </div>
</template>
