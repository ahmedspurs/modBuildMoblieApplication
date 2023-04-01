<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="flex items-cnter justify-between px-4">
          <h2>تعديل الملف الشخصي</h2>
          <div class="flex items-center">
            <div class="p-3">
              <router-link to="/tabs/CartPage">
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
              </router-link>
            </div>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="flex flex-col justify-center items-center pt-4">
        <img
          :src="'https://mod-bina.com/uploads/' + userData?.data?.image"
          loading="lazy"
          class="w-56 h-56 rounded-full"
        />
        <span class="px-2 py-1 rounded-full flex bg-gray-200 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          <span @click="uploadImage()">تغيير الصورة</span>
        </span>
      </div>

      <form
        ref="form"
        class="space-y-4 md:space-y-6 p-4"
        @submit.prevent="editProfile"
      >
        <input
          type="file"
          name="photos"
          style="visibility: hidden"
          id="uploadImage"
        />
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >الاسم</label
          >
          <input
            type="text"
            name="name"
            v-model="userData.data.name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
            placeholder="احد عادل"
          />
        </div>

        <!-- email section -->
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >الايميل</label
          >
          <input
            type="email"
            name="email"
            v-model="userData.data.email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
            placeholder="name@company.com"
          />
        </div>

        <!-- country section -->
        <div>
          <label
            for="country"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
          >
            الدوله
          </label>
          <input
            type="text"
            name="country"
            v-model="userData.data.country"
            id="country"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
            placeholder="Saudi Arabia"
          />
        </div>

        <!-- tel section -->

        <div>
          <label
            for="tel"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >رقم الهاتف</label
          >
          <input
            type="tel"
            name="tel"
            v-model="userData.data.tel"
            id="tel"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
            placeholder="+1423456789"
          />
        </div>

        <!-- address section -->

        <div>
          <label
            for="address"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >العنوان</label
          >
          <input
            type="text"
            name="address"
            v-model="userData.data.address"
            id="address"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
            placeholder="Al-Ryadh"
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >كلمه السر</label
          >
          <input
            type="password"
            name="password"
            id="password"
            v-model="userData.data.password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center non:bg-blue-600 non:hover:bg-blue-700 non:focus:ring-blue-800"
        >
          تعديل الملف الشخصي
        </button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, loadingController } from "@ionic/vue";
import { mapGetters } from "vuex";
export default {
  name: "EditProfile",
  components: {
    IonPage,
    IonHeader,
    IonContent,
  },
  mounted() {
    this.veirfy();
  },
  methods: {
    uploadImage() {
      document.querySelector("#uploadImage").click();
    },
    async editProfile() {
      const loading = await loadingController.create({
        cssClass: "my-custom-class",
      });

      await loading.present();

      const formData = new FormData(this.$refs.form);
      const id = this.userData.data.id;
      const payload = {
        user: formData,
        id,
      };
      if (
        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(this.userData.data.email)
      ) {
        this.toast("top", "danger", "عفوا الايميل غير صالح");

        loading.dismiss();
      } else if (this.userData.data.tel.toString().length < 13) {
        this.toast("top", "danger", "عفوا رقم الهاتف غير صالح");
        loading.dismiss();
      } else {
        try {
          console.log(this.userData);
          if (await this.$store.dispatch("updateUser", payload)) {
            console.log("user updated");
            loading.dismiss();

            this.toast("top", "success", "تم تعديل الملف الشخصي بنجاح");
          } else {
            loading.dismiss();

            this.toast(
              "top",
              "danger",
              "عفوا حدث خطاء ما الرجاء اعادة المحاوله"
            );
          }
        } catch (err) {
          loading.dismiss();

          this.toast("top", "danger", "عفوا حدث خطاء ما الرجاء اعادة المحاوله");
        }
      }
      loading.dismiss();
    },
  },
  computed: mapGetters(["userData"]),
  inject: ["toast", "veirfy"],
};
</script>
<style scoped>
.floating-input > input::placeholder,
.floating-input > textarea::placeholder {
  color: transparent;
}

.floating-input > input:focus,
.floating-input > textarea:focus,
.floating-input > input:not(:placeholder-shown) {
  @apply pt-8;
}

.floating-input > input:focus ~ label,
.floating-input > textarea:focus ~ label,
.floating-input > input:not(:placeholder-shown) ~ label {
  @apply opacity-75 scale-75 -translate-y-3 translate-x-1;
}
</style>
