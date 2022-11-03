<template>
  <ion-page>
    <loading-spinner v-if="$store.state.loader"  />
    <ion-header v-if="!$store.state.loader" >
      <div class="flex items-cnter justify-between px-4">
        <h2>الملف الشخصي</h2>
        <div class="flex items-center">
          <div class="p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
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
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content  v-if="!$store.state.loader" class="">
      <div class="flex flex-col justify-center items-center pt-4">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          loading="lazy"
          class="w-56 h-56 rounded-full"
        />
        <span class="block py-1 pt-2 text-xl font-semibold"> احمد عادل </span>
        <span class="block py-1 text-xl"> @ahmedspurs </span>
      </div>
      <div class="px-2 py-4">
        <router-link to="/tabs/EditProfile">
          <div class="flex bg-gray-200 rounded-xl justify-between p-2 mt-2">
            <span class="text-xl text-black"> تعديل الملف الشخصي </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </router-link>
        <router-link to="/tabs/LastOrders">
          <div class="flex bg-gray-200 rounded-xl justify-between p-2 mt-2">
            <span class="text-xl text-black"> الطلبات السابقه </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </router-link>

        <div
          @click="logout"
          class="flex bg-gray-200 rounded-xl justify-between p-2 mt-2"
        >
          <span class="text-xl text-red-500"> تسجيل الخروج </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent } from "@ionic/vue";
import LoadingSpinner from '../components/LoadingSpinner.vue';
import axios from "axios"
export default {
  name: "ProfilePage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    LoadingSpinner,
  },
  mounted(){
    this.loading()
  },
  methods: {

    async logout() {
      const token = localStorage.getItem("mod_user_token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      this.$store.state.loader = true;

      try {
        const res = await axios.get(
          "https://www.mod-bina.com/api/v1/auth/logout",
          config
        );
        if (!res.data.success) {
          this.$store.state.loader = false;
      this.toast("top", "danger", "عفوا حدث خطاء ما");
          return;
        }

        console.log(res);
        localStorage.clear();
        await this.$router.push("/LoginPage");
        location.reload();
      this.toast("top", "danger", "تم تسجيل الخروج بنجاح");
      } catch (error) {
        this.$store.state.loader = false;
      this.toast("top", "danger", "عفوا حدث خطاء ما");
      }
    },
  },
  inject: ["toast","loading"],
};
</script>

<style>
</style>