<template>
  <ion-page>
    <ion-content>
        <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="
          flex flex-col
          items-center
          justify-center
          px-6
          py-8
          mx-auto
          h-full
          lg:py-0
        "
      >
        <a
          href="#"
          class="
            flex
            items-center
            mb-6
            text-2xl
            font-semibold
            text-gray-900
            dark:text-white
          "
        >
          مواد بناء
        </a>
        <div
          class="
            w-full
            bg-white
            rounded-lg
            shadow
            dark:border
            md:mt-0
            sm:max-w-md
            xl:p-0
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="
                text-xl
                font-bold
                leading-tight
                tracking-tight
                text-gray-900
                md:text-2xl
                dark:text-white
              "
            >
              انشئ حساب
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="register">
              <div>
                <label
                  for="name"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >الاسم</label
                >
                <input
                  type="text"
                  name="name"
                  v-model="name"
                  id="name"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900
                    sm:text-sm
                    rounded-lg
                    focus:ring-blue-600 focus:border-blue-600
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  placeholder="احد عادل"
                />
              </div>

              <!-- email section -->
              <div>
                <label
                  for="email"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >الايميل</label
                >
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  id="email"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900
                    sm:text-sm
                    rounded-lg
                    focus:ring-blue-600 focus:border-blue-600
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  placeholder="name@company.com"
                />
              </div>

              <!-- country section -->
              <div>
                <label
                  for="country"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                >
                  الدوله
                </label>
                <input
                  type="text"
                  name="country"
                  v-model="country"
                  id="country"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900
                    sm:text-sm
                    rounded-lg
                    focus:ring-blue-600 focus:border-blue-600
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  placeholder="Saudi Arabia"
                />
              </div>

              <!-- tel section -->

              <div>
                <label
                  for="tel"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >ؤقم الهاتف</label
                >
                <input
                  type="te;"
                  name="tel"
                  v-model="tel"
                  id="tel"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900
                    sm:text-sm
                    rounded-lg
                    focus:ring-blue-600 focus:border-blue-600
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  placeholder="+1423456789"
                />
              </div>

              <!-- address section -->

              <div>
                <label
                  for="address"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >العنوان</label
                >
                <input
                  type="text"
                  name="address"
                  v-model="address"
                  id="address"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900
                    sm:text-sm
                    rounded-lg
                    focus:ring-blue-600 focus:border-blue-600
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  placeholder="Al-Ryadh"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >كلمه السر</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="password"
                  placeholder="••••••••"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900
                    sm:text-sm
                    rounded-lg
                    focus:ring-blue-600 focus:border-blue-600
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                />
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="
                      w-4
                      h-4
                      border border-gray-300
                      rounded
                      bg-gray-50
                      focus:ring-3 focus:ring-blue-300
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:focus:ring-blue-600
                      dark:ring-offset-gray-800
                    "
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                    >بتسجيلك حساب جديد فأنت تقبل الشروط والاحكام
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="
                  w-full
                  text-white
                  bg-blue-600
                  hover:bg-blue-700
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  dark:bg-blue-600
                  dark:hover:bg-blue-700
                  dark:focus:ring-blue-800
                "
              >
                تسجيل حساب جديد
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                لديك حساب بالفعل ؟
                <router-link
                  to="/LoginPage"
                  class="
                    font-medium
                    text-blue-600
                    hover:underline
                    dark:text-blue-500
                  "
                  >تسجيل الدخول</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </ion-content>

  
  </ion-page>
</template>


<script>
import { IonPage , IonContent } from "@ionic/vue";

import axios from "axios";
export default {
  components: { IonPage , IonContent },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      country: "",
      address: "",
      tel: "",
      role: "user",
    };
  },

  methods: {
    async register() {
      const log = {
        name: this.name,
        email: this.email,
        password: this.password,
        country: this.country,
        address: this.address,
        tel: this.tel,
        role: "user",
      };
      if (
        this.name == "" &&
        this.email == "" &&
        this.password == "" &&
        this.country == "" &&
        this.address == "" &&
        this.tel == ""
      ) {
        this.failed();
      } else if (this.tel.toString().length < 9) {
        this.wrong("رقم الهاتف يجب ان يكون اكثر من 9 ارقام");
      } else {
        try {
          const res = await axios.post(
            "https://www.mod-bina.com/api/v1/auth/register",
            log
          );
          console.log(res.data);
          if (res.data.success) {
            this.name = "";
            this.email = "";
            this.password = "";
            this.country = "";
            this.address = "";
            this.tel = "";
            this.toast("top", "success", "      تم تسجيل حسابك بنجاح  ");

            this.$router.push("/LoginPage");
          } else if (res.data.error == "user with this email, already exist") {
            this.toast("top", "danger", "    المستخدم موجود بالفعل  ");
          }
        } catch (error) {
          if (
            error.response.data.error == "user with this email, already exist"
          ) {
            this.toast("top", "danger", "    المستخدم موجود بالفعل  ");
          } else {
            this.toast(
              "top",
              "danger",
              "  حدث خطاء ما الرجاء التحقق من الاتصال بالانترنت"
            );
          }
        }
      }

      if (this.tel.toString().length < 9) {
        this.wrong("رقم الهاتف يجب ان يكون اكثر من 9 ارقام");
      }

      // perform async actions
    },
    inject: ["toast"],
  },
};
</script>
<style>
</style>