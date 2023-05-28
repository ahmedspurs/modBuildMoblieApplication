<script setup>
  import { useCart } from "@/store/cart";
  import { computed } from "vue";

  const cartStore = useCart();
  const count = computed(() => cartStore.getCartItems.length);
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <!-- home page tab -->
        <ion-tab-button tab="HomePage" href="/tabs/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <ion-label>الرئيسية</ion-label>
        </ion-tab-button>
        <!-- stores  tab -->
        <ion-tab-button tab="ContactPage" href="/tabs/stores">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>
          <ion-label>المغالق</ion-label>
        </ion-tab-button>
        <!-- cart tab -->
        <ion-tab-button tab="CartPage" href="/tabs/CartPage" class="relative">
          <span
            class="bg-pink-600 rounded-full px-1.5 absolute top-1 right-1 text-white"
            >{{ count }}</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <ion-label>السلة</ion-label>
        </ion-tab-button>
        <!-- category tab -->
        <ion-tab-button tab="CategoryPage" href="/tabs/categories">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <ion-label>الأقسام</ion-label>
        </ion-tab-button>
        <!-- profile tab -->
        <ion-tab-button tab="ProfilePage" @click="push()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <ion-label>البروفايل</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
  import { defineComponent } from "vue";
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonPage,
    IonRouterOutlet,
    IonLabel,
  } from "@ionic/vue";

  export default defineComponent({
    name: "TabsPage",
    components: {
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonPage,
      IonRouterOutlet,
      IonLabel,
    },
    methods: {
      push() {
        if (localStorage.getItem("mod_user_token")) {
          this.$router.push("/tabs/ProfilePage");
        } else if (localStorage.getItem("mod_user_token") == null) {
          this.$router.push("/tabs/login");
        }
      },
    },
  });
</script>

<style scoped>
  ion-tab-bar {
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    height: 60px;
  }
  ion-tab-button {
    background: #edf0f5;
    padding-top: 0.25rem;
  }
</style>
