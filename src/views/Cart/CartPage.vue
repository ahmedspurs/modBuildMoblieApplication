<script setup>
  import { IonPage, IonContent, IonButton } from "@ionic/vue";

  import CartSummary from "./CartSummary.vue";
  import CartHeader from "@/views/Cart/CartHeader.vue";
  import EmptyCart from "@/views/Cart/EmptyCart.vue";
  import cartItems from "@/views/Cart/CartItems";

  import { useStore } from "@/store";
  import { useCart } from "@/store/cart";
  import { computed, onMounted } from "vue";

  import router from "@/router";

  const push = () => {
    if (localStorage.getItem("mod_user_token")) {
      router.push("/tabs/CheckoutPage");
    } else if (localStorage.getItem("mod_user_token") == null) {
      router.push("/tabs/login");
    }
  };

  const store = useStore();
  const cart = useCart();
  const cartEmpty = computed(() => cart.emptyCart);
  const emptyTheCart = () => cart.emptyTheCart();

  onMounted(() => {
    store.loading = true;
    setTimeout(() => {
      (store.loading = false), 1000;
    });
  });
</script>

<template>
  <ion-page class="h-full">
    <cart-header></cart-header>
    <empty-cart v-if="cartEmpty"></empty-cart>
    <ion-content v-else>
      <div class="cart h-3/4 oveflow-scroll">
        <!-- cart items section -->
        <cart-items></cart-items>

        <!-- cart summary section -->
        <cart-summary></cart-summary>

        <!-- checkout section -->
        <div class="p-4 w-full flex justify-between items-center text-center">
          <ion-button @click="push()">إتمام الطلب</ion-button>
          <ion-button color="danger" shape="outline" @click="emptyTheCart()"
            >إفراغ السلة</ion-button
          >
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
