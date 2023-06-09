<script setup>
  import { IonText, IonCard, IonCardContent } from "@ionic/vue";

  import { useCart } from "@/store/cart";
  import { computed } from "vue";

  const cart = useCart();

  const totalPrice = () => {
    let sum = 0;
    cart.getCartItems.forEach((item) => {
      let element = item.product.price * item.quantity;
      sum += element;
    });
    return sum;
  };

  const cartItems = computed(() => cart.getCartItems);
</script>

<template>
  <div class="px-4">
    <ion-card class="mx-0 mt-4">
      <ion-card-content>
        <ion-text color="dark">
          <span class="text-[16px] font-semibold">ملخص الطلبيه</span>
        </ion-text>
        <div class="products flex justify-between ml-9 pt-2">
          <ion-text color="dark">
            <span cla> عدد المنتجات</span>
          </ion-text>
          <ion-text color="dark">
            <span class="font-semibold">{{ cartItems.length }} منتج</span>
          </ion-text>
        </div>

        <div class="products flex justify-between">
          <ion-text color="dark">
            <span>المجموع الكلي </span>
          </ion-text>
          <ion-text color="dark">
            <span class="font-semibold"
              >{{
                totalPrice()
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}
              SAR</span
            >
          </ion-text>
        </div>
      </ion-card-content>
    </ion-card>
  </div>
</template>
