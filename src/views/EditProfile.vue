<template>
  <ion-page>
    <ion-header>
      <div class="flex items-cnter justify-between px-4">
        <h2>تعديل الملف الشخصي</h2>
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
    <ion-content>
      <div class="flex flex-col justify-center items-center pt-4">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
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
          <span>تغيير الصورة</span>
        </span>
      </div>

      <!-- inputs -->
      <div class="contact pb-8">
        <ion-card class="shadow-none">
          <ion-card-content>
            <form class="w-full">
              <div class="floating-input mb-5 relative">
                <input
                  type="text"
                  id="name"
                  class="
                    border border-gray-200
                    focus:outline-none
                    rounded-md
                    focus:border-gray-500 focus:shadow-sm
                    w-full
                    p-3
                    h-16
                  "
                  placeholder=" "
                  autocomplete="off"
                  value="ahmed adil"
                />
                <label
                  for="email"
                  class="
                    absolute
                    top-0
                    right-0
                    px-3
                    py-5
                    h-full
                    pointer-events-none
                    transform
                    origin-left
                    transition-all
                    duration-100
                    ease-in-out
                  "
                  >الاسم</label
                >
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="email"
                  id="email"
                  class="
                    border border-gray-200
                    focus:outline-none
                    rounded-md
                    focus:border-gray-500 focus:shadow-sm
                    w-full
                    p-3
                    h-16
                  "
                  placeholder=" "
                  autocomplete="off"
                  value="amnnn80@gmail.com"
                />
                <label
                  for="email"
                  class="
                    absolute
                    top-0
                    right-0
                    px-3
                    py-5
                    h-full
                    pointer-events-none
                    transform
                    origin-left
                    transition-all
                    duration-100
                    ease-in-out
                  "
                  >الايميل</label
                >
              </div>

              <div class="floating-input mb-5 relative">
                <input
                  type="number"
                  id="phone"
                  class="
                    border border-gray-200
                    focus:outline-none
                    rounded-md
                    focus:border-gray-500 focus:shadow-sm
                    w-full
                    p-3
                    h-16
                  "
                  placeholder=" "
                  autocomplete="off"
                  value="0125803725"
                />
                <label
                  for="phone"
                  class="
                    absolute
                    top-0
                    right-0
                    px-3
                    py-5
                    h-full
                    pointer-events-none
                    transform
                    origin-left
                    transition-all
                    duration-100
                    ease-in-out
                  "
                  >رقم الهاتف</label
                >
              </div>
              <div class="checkout">
                <ion-button expand="block" @click="editProfile">
                  تعديل الملف الشخصي</ion-button
                >
              </div>
            </form>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
} from "@ionic/vue";
export default {
  name: "EditProfile",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
  },
  methods: {
    editProfile() {
      this.toast("top", "success", "تم تعديل الملف الشخصي بنجاح");
    },
  },
  inject: ["toast"],
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
