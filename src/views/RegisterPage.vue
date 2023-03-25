<template>
  <ion-page>
    <ion-content>
      <section class="bg-gray-50 non:bg-gray-900">
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
              non:text-white
            "
          >
            مود بناء
          </a>
          <div
            class="
              w-full
              bg-white
              rounded-lg
              shadow
              non:border
              md:mt-0
              sm:max-w-md
              xl:p-0
              non:bg-gray-800 non:border-gray-700
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
                  non:text-white
                "
              >
                انشئ حساب
              </h1>
              <form
                ref="form"
                class="space-y-4 md:space-y-6"
                @submit.prevent="register"
              >
                <div>
                  <label
                    for="name"
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      non:text-white
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
                      non:bg-gray-700
                      non:border-gray-600
                      non:placeholder-gray-400
                      non:text-white
                      non:focus:ring-blue-500
                      non:focus:border-blue-500
                    "
                    placeholder=" اسمك"
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
                      non:text-white
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
                      non:bg-gray-700
                      non:border-gray-600
                      non:placeholder-gray-400
                      non:text-white
                      non:focus:ring-blue-500
                      non:focus:border-blue-500
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
                      non:text-white
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
                      non:bg-gray-700
                      non:border-gray-600
                      non:placeholder-gray-400
                      non:text-white
                      non:focus:ring-blue-500
                      non:focus:border-blue-500
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
                      non:text-white
                    "
                    >رقم الهاتف</label
                  >
                  <input
                    type="tel"
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
                      non:bg-gray-700
                      non:border-gray-600
                      non:placeholder-gray-400
                      non:text-white
                      non:focus:ring-blue-500
                      non:focus:border-blue-500
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
                      non:text-white
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
                      non:bg-gray-700
                      non:border-gray-600
                      non:placeholder-gray-400
                      non:text-white
                      non:focus:ring-blue-500
                      non:focus:border-blue-500
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
                      non:text-white
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
                      non:bg-gray-700
                      non:border-gray-600
                      non:placeholder-gray-400
                      non:text-white
                      non:focus:ring-blue-500
                      non:focus:border-blue-500
                    "
                  />
                </div>

                <!-- image upload -->

                <div class="flex justify-center items-center w-full">
                  <label
                    for="dropzone-file"
                    class="
                      flex flex-col
                      justify-center
                      items-center
                      w-full
                      h-32
                      bg-gray-50
                      rounded-lg
                      border-2 border-gray-300 border-dashed
                      cursor-pointer
                      non:hover:bg-bray-800 non:bg-gray-700
                      hover:bg-gray-100
                      non:border-gray-600
                      non:hover:border-gray-500
                      non:hover:bg-gray-600
                    "
                  >
                    <div
                      class="
                        flex flex-col
                        justify-center
                        items-center
                        pt-5
                        pb-6
                      "
                    >
                      <svg
                        class="mb-3 w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 non:text-gray-400">
                        رفع صورة الملف الشخصي
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      name="photos"
                      type="file"
                      class="hidden"
                    />
                  </label>
                </div>

                <!-- image upload -->

           
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
                    non:bg-blue-600
                    non:hover:bg-blue-700
                    non:focus:ring-blue-800
                  "
                >
                  تسجيل حساب جديد
                </button>
                <p class="text-sm font-light text-gray-500 non:text-gray-400">
                  لديك حساب بالفعل ؟
                  <router-link
                    to="/tabs/LoginPage"
                    class="
                      font-medium
                      text-blue-600
                      hover:underline
                      non:text-blue-500
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
import { IonPage, IonContent,loadingController } from "@ionic/vue";

import axios from "axios";
export default {
  components: { IonPage, IonContent },
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
      // const log = {
      //   name: this.name,
      //   email: this.email,
      //   password: this.password,
      //   country: this.country,
      //   address: this.address,
      //   tel: this.tel,
      //   role: "user",
      // };
         const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
          });

        await loading.present();

      if (
        this.name == "" ||
        this.email == "" ||
        this.password == "" ||
        this.country == "" ||
        this.address == "" ||
        this.tel == ""
      ) {
        this.toast("top", "danger", "الرجاء ملء كل الحقول");
                 loading.dismiss()

      } else if (this.tel.toString().length < 9) {
        this.toast("top", "danger", "رقم الهاتف يجب ان يكون اكثر من 9 ارقام");
                 loading.dismiss()

      } else {
        const formData = new FormData(this.$refs.form);
        formData.append("role", "user");
        try {
          const res = await axios.post(
            "https://mod-bina.com/api/v1/auth/register",
            formData
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
                 loading.dismiss()

            await this.$router.push("/tabs/LoginPage");
            location.reload()
          } else if (res.data.error == "user with this email, already exist") {
            this.toast("top", "danger", "    المستخدم موجود بالفعل  ");
                 loading.dismiss()

          }
        } catch (error) {
          if (
            error.response.data.error == "user with this email, already exist"
          ) {
            this.toast("top", "danger", "    المستخدم موجود بالفعل  ");
                 loading.dismiss()

          } else {
            this.toast(
              "top",
              "danger",
              "  حدث خطاء ما الرجاء التحقق من الاتصال بالانترنت"
            );
                 loading.dismiss()

          }
        }
      }


      // perform async actions
    },
  },
  inject: ["toast"],
};
</script>
<style></style>
