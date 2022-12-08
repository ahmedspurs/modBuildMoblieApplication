<template>
  <ion-page>
      <ion-header>
    <div class="flex items-cnter justify-between px-4 py-2">
      <div class="p-4">
         <router-link to="/tabs/CartPage">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-black"
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
        </router-link>
        
      </div>
      <h2> اتمام الطلب </h2>
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

<!-- inputs -->

   <form
        ref="form"
        class="space-y-4 md:space-y-6 p-4"
        @submit.prevent="checkout"
      >
        
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >الاسم</label
          >
          <input
            type="text"
            name="name"
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
            placeholder=" الاسم"
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
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >العنوان</label
          >
          <input
            type="text"
            name="address"
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
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >رقم البطاقه</label
          >
          <input
            type="text"
            name="name"
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
            placeholder=" الاسم"
          />
        </div>

    <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            > الاسم علي البطاقه</label
          >
          <input
            type="text"
            name="name"
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
            placeholder=" الاسم"
          />
        </div>


             <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >تاريخ الانتهاء</label
          >
          <input
            type="text"
            name="name"
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
            placeholder=" mm / yy"
          />
        </div>


             <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >CVS</label
          >
          <input
            type="text"
            name="name"
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
            placeholder=" cvs"
          />
        </div>

   <div class="total-price">
          <ion-card>
            <ion-card-content>
              <div class="products flex justify-between">
                <ion-text color="dark">
                  <b>ملخص الطبيه</b>
                </ion-text>
                <ion-text color="dark">
                  <b>3 منتجات</b>
                </ion-text>
              </div>
              <div class="products flex justify-between">
                <ion-text color="dark">
                  <span>رسوم التوصيل</span>
                </ion-text>
                <ion-text color="dark">
                  <span>50$</span>
                </ion-text>
              </div>
              <div class="products flex justify-between">
                <ion-text color="dark">
                  <span>المجموع الكلي</span>
                </ion-text>
                <ion-text color="dark">
                  <span>550.99$</span>
                </ion-text>
              </div>
            </ion-card-content>
          </ion-card>
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
            non:bg-blue-600 non:hover:bg-blue-700 non:focus:ring-blue-800
          "
        >
  اتمام الطلب
        </button>
      </form>
    <!-- total price section -->
   

   
  </ion-content>
  </ion-page>
</template>

<script>
import {IonPage , IonHeader , IonContent , IonCard , IonCardContent,IonText} from "@ionic/vue"

export default {
name:"CheckoutPage",
components:{
  IonPage , IonHeader , IonContent , IonCard , IonCardContent,IonText
},
mounted(){
  this.veirfy()
},
inject : ["veirfy"]
}
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