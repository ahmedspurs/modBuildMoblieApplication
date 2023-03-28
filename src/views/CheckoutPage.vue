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
        <h2>اتمام الطلب</h2>
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

      <!-- <form
        ref="form"
        class="space-y-4 md:space-y-6 p-4"
        @submit.prevent="checkout"
      > -->
      <form
        id="myForm"
        method="post"
        class="p-4"
        action="https://api.moyasar.com/v1/payments.html"
      >
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >الاسم</label
          >
          <input
            type="text"
            name="userName"
            id="name"
            v-model="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
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
            v-model="phone"
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
            id="address"
            v-model="address"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
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
            name="source[number]"
            v-model="cNum"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
            placeholder=" رقم البطاقه"
          />
        </div>

        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
          >
            الاسم علي البطاقه</label
          >
          <input
            type="text"
            name="source[name]"
            id="name"
            v-model="noc"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
            placeholder=" الاسم"
          />
        </div>

        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white my-2"
            >تاريخ الانتهاء</label
          >
        </div>
        <input
          type="text"
          name="source[month]"
          v-model="month"
          id="name"
          class="my-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
          placeholder="mm"
        />
        <input
          type="text"
          name="source[year]"
          id="name"
          v-model="year"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
          placeholder="yy"
        />

        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 non:text-white"
            >CVC</label
          >
          <input
            type="text"
            name="source[cvc]"
            id="name"
            v-model="cvc"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 non:bg-gray-700 non:border-gray-600 non:placeholder-gray-400 non:text-white non:focus:ring-blue-500 non:focus:border-blue-500"
            placeholder=" cvc"
          />
        </div>

        <!-- total price section -->
        <div class="total-price">
          <ion-card>
            <ion-card-content>
              <ion-text color="dark">
                <span class="text-[16px] font-semibold">ملخص الطلبيه</span>
              </ion-text>
              <div class="products flex justify-between ml-9 pt-2">
                <ion-text color="dark">
                  <span cla> عدد المنتجات</span>
                </ion-text>
                <ion-text color="dark">
                  <span class="font-semibold"
                    >{{ $store.state.products.cart.length }} منتج</span
                  >
                </ion-text>
              </div>

              <div class="products flex justify-between">
                <ion-text color="dark">
                  <span>المجموع الكلي </span>
                </ion-text>
                <ion-text color="dark">
                  <span class="font-semibold"
                    >{{
                      totalPrice()
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                    SAR</span
                  >
                </ion-text>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
        <input
          type="hidden"
          name="callback_url"
          value="https://moyasar.com/thanks"
        />
        <input
          type="hidden"
          name="publishable_api_key"
          value="pk_test_ZcsLqrJypvVT2X9HTkaTr8utDa3tuwgvf2eizdM7"
        />
        <input type="hidden" name="amount" :value="totalPrice() * 100" />
        <input type="hidden" name="source[type]" value="creditcard" />
        <input type="hidden" name="description" value="new order" />
        <button
          @click.prevent="vaildation"
          to="/payment"
          class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center non:bg-blue-600 non:hover:bg-blue-700 non:focus:ring-blue-800"
        >
          اتمام الطلب
        </button>
      </form>
      <!-- total price section -->
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
  IonText,
} from "@ionic/vue";

export default {
  name: "CheckoutPage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonCard,
    IonCardContent,
    IonText,
  },
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      cvc: "",
      noc: "",
      cNum: "",
      month: "",
      year: "",
    };
  },
  mounted() {
    this.veirfy();
  },
  methods: {
    vaildation() {
      if (
        this.name == "" ||
        this.phone == "" ||
        this.address == "" ||
        this.cvc == "" ||
        this.noc == "" ||
        this.cNum == "" ||
        this.month == "" ||
        this.year == ""
      ) {
        this.toast("top", "danger", "الرجاء ملء كل الحقول");
      } else {
        if (this.cvc.toString().length > 3) {
          this.toast("top", "danger", "cvc غير صالح");
          return 0;
        }
        if (this.cNum.toString().length != 16) {
          this.toast("top", "danger", " رقم بطاقه غير صالح ");
          return 0;
        }
        if (this.month.toString().length != 2) {
          this.toast("top", "danger", "  الرجاء ادخال شهر  صحيح");
          return 0;
        }
        if (this.year.toString().length > 4) {
          this.toast("top", "danger", "الرجاء ادخال سنه صحيحه  ");
          return 0;
        }
        document.getElementById("myForm").submit();
      }
    },
    totalPrice() {
      let sum = 0;
      this.$store.state.products.cart.forEach((item) => {
        let element = item.price * item.qty;
        sum += element;
      });
      this.total = sum;
      console.log(sum);
      return this.total;
    },
  },
  inject: ["veirfy", "toast"],
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
label {
  margin: 10px 0;
}
</style>
