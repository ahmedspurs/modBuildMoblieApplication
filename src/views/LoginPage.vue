<template>
  <ion-page>
    <section class="bg-gray-50 non:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 non:text-white"
        >
          مود بناء
        </a>
        <div
          class="w-full bg-white rounded-lg shadow non:border md:mt-0 sm:max-w-md xl:p-0 non:bg-gray-800 non:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl non:text-white"
            >
              تسجيل الدخول الي حسابك
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="login()">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
                  >الايميل</label
                >
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
                  >كلمه السر</label
                >
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center non:bg-blue-600 non:hover:bg-blue-700 non:focus:ring-blue-800"
              >
                تسجيل الدخول
              </button>
              <p class="text-sm font-light text-gray-500 non:text-gray-400">
                ليس لديك حساب ؟<router-link
                  to="/tabs/RegisterPage"
                  class="font-medium text-blue-600 hover:underline non:text-blue-500"
                  >انشئ حساب جديد</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </ion-page>
</template>

<script>
import { IonPage, useBackButton, loadingController } from "@ionic/vue";

export default {
  components: { IonPage },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  setup() {
    useBackButton(1, () => {
      console.log("backPresssed");
    });
  },
  methods: {
    async login() {
      const loading = await loadingController.create({
        cssClass: "my-custom-class",
      });

      await loading.present();

      if (this.email == "" || this.password == "") {
        this.toast("top", "danger", "  الرجاء مل كل الحقول");
        loading.dismiss();
      } else {
        try {
          const userData = { email: this.email, password: this.password };

          if (await this.$store.dispatch("login", userData)) {
            loading.dismiss();
            this.toast("top", "success", "  تم تسجيل الدخول بنجاح ");
            this.$store.dispatch("getUser");
            await this.$router.push("/tabs/HomePage");
            location.reload();
          } else {
            loading.dismiss();

            this.toast("top", "danger", "عفوا حدث خطاء ما اعد المحاوله");
          }
        } catch (error) {
          loading.dismiss();

          this.toast("top", "danger", "عفوا حدث خطاء ما اعد المحاوله");

          console.error(error);
          // expected output: ReferenceError: nonExistentFunction is not defined
          // Note - error messages will vary depending on browser
        }
        loading.dismiss();
      }
    },
  },
  inject: ["toast"],
};
</script>

<style></style>
