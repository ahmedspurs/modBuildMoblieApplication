<script setup>
  import { IonApp, IonRouterOutlet } from "@ionic/vue";
  import { useCart } from "@/store/cart";
  import { onMounted } from "vue";

  const cartStore = useCart();

  onMounted(() => {
    if (localStorage["cartItems"]) cartStore.setCartFromLocalStorage();
  });

  // import { onMounted } from "vue";
  // import { useUser } from "./store/user";

  // const userStore = useUser();

  // onMounted(async () => {
  //   const loginStatus = await userStore.login(
  //     "amnnn80@gmail.com",
  //     "09123123Aa@",
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJod…n19fQ.K62QP-rThi4BdEZervumkkmuQL-R05CW3g6Xc0r-BdM"
  //   );
  //   console.log({ loginStatus });
  // });
</script>

<template>
  <ion-app>
    <ion-router-outlet class="main-wrapper" />
  </ion-app>
</template>

<style>
  :root {
    --radius: 0.5rem;
  }
  .main-wrapper {
    max-width: 600px;
    margin-inline: auto;
  }

  .bg-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
