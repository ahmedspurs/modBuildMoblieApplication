<template>
  <ion-page>
    <loading-spinner  v-if="$store.state.loader"/>
  <ion-header v-if="!$store.state.loader">
           <div class="flex items-cnter justify-between px-4">
          <h2>
              تواصل معنا
          </h2>
          <div class="flex items-center">
            <div class=" p-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
            </div>
          </div>
        </div>
      </ion-header>
    <ion-content v-if="!$store.state.loader">

      <div class="contact py-4">
        <ion-card class="shadow-none">
          <ion-card-content>
            <form class="w-full">
              <div class="floating-input mb-5 relative">
                <input
                  type="text"
                  id="name"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="name"
                >
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >الاسم</label>
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="email"
                  id="email"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="email"
                >
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >الايميل</label>
              </div>

              <div class="floating-input mb-5 relative">
                <input
                  type="number"
                  id="phone"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="phone"
                >
                <label
                  for="phone"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >رقم الهاتف</label>
              </div>

              <div class="floating-input mb-5 relative">
                <textarea
                  id="message"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="message"
                ></textarea>
                <label
                  for="message"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >رسالتك</label>
              </div>

              <div class="checkout">
                <ion-button expand="block" @click="send()">ارسال الرساله</ion-button>
              </div>
            </form>
          </ion-card-content>
        </ion-card>
      </div>

      <!-- fab -->
      <div class="fab">
        <ion-fab horizontal="end" vertical="bottom" slot="fixed">
          <ion-fab-button color="primary">
            <ion-icon :icon="chatbubblesOutline"/>
          </ion-fab-button>
          <ion-fab-list side="start">
            <ion-fab-button color="primary">
              <ion-icon :icon="logoFacebook"/>
            </ion-fab-button>
            <ion-fab-button color="primary">
              <ion-icon :icon="logoInstagram"/>
            </ion-fab-button>
            <ion-fab-button color="primary">
              <ion-icon :icon="logoTwitter"/>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  alertController,
  toastController,
  IonCard,
  IonCardContent,
  IonFab,
  IonButton,
  IonIcon,
  IonFabButton,
  IonFabList
} from "@ionic/vue";
import {
  chatbubblesOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter
} from "ionicons/icons";
import LoadingSpinner from '../components/LoadingSpinner.vue';
export default {
  name: "ContactPage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonIcon,
    IonCard,
    IonCardContent,
    IonButton,
    IonFab,
    IonFabButton,
    IonFabList,
    LoadingSpinner
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      phone: "",
      validate: true
    };
  },
  mounted(){
    this.loading()
  },
  methods: {
    send() {
      if (this.name == "" && this.email == "" && this.message == "") {
        this.failed()
      } else if (this.name != "" && this.email != "" && this.message != "") {
        this.validate = true;

        // do email function
        this.success();
        this.name = "";
        this.email = "";
        this.message = "";
        this.phone = "";
      }
    },
    async presentAlert() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: " شكرا لتواصلك معنا ",
        message: "سيتم الرد عليك في اقرب فرصه",
        buttons: ["تم"]
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    },
    async success() {
      const toast = await toastController.create({
        message: "تم ارسال رسالتك",
        duration: 4000,
        position: "top",

        color: "success"
      });
      return toast.present();
    },
        async failed() {
      const toast = await toastController.create({
        message: " الرجاء ملء كل الحقول ",
        duration: 4000,
        position: "top",

        color: "primary"
      });
      return toast.present();
    }
  },
  setup() {
    return {
      chatbubblesOutline,
      logoFacebook,
      logoInstagram,
      logoTwitter
    };
  },
  inject:["loading"]
};
</script>
<style scoped>
ion-content {
  --background: white !important;
}
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
