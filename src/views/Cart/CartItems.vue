<script setup>
  import { useCart } from "@/store/cart";
  import { computed } from "vue";

  const cart = useCart();

  const cartItems = computed(() => cart.getCartItems);

  const deleteItem = (id) => cart.removeFromCart(id);

  const addItemQuantity = (id) => cart.addItemQuantity(id);

  const subItemQuantity = (id) => cart.subItemQuantity(id);
</script>

<template>
  <div
    class="flex justify-between items-center p-4 shadow-lg border border-gray-300 mx-4 mt-4"
    :key="item"
    v-for="item in cartItems"
  >
    <div class="w-3/4">
      <img
        class="w-24 h-24"
        :src="item?.product?.images[0].src"
        loading="lazy"
      />
    </div>
    <div class="w-full">
      <span class="block">{{ item?.product?.name }}</span>

      <span class="font-semibold block pb-2"
        >{{
          (item?.product?.price * item.quantity)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }}
        <span class="text-sm">SAR</span>
      </span>

      <div class="flex items-center justify-between">
        <!-- delete icon-->

        <svg
          @click="deleteItem(item?.id)"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        <div class="flex">
          <button
            class="bg-gray-300 text-black rounded-full p-1"
            @click="addItemQuantity(item?.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <input
            class="w-10 text-center pr-3 text-gray-600"
            type="number"
            disabled
            min="1"
            v-model="item.quantity"
          />
          <button
            class="bg-gray-300 text-black rounded-full p-1"
            @click="subItemQuantity(item?.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 12H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
