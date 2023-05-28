<script setup>
  import {
    IonPage,
    IonContent,
    IonButton,
    IonText,
    IonCard,
    IonCardContent,
  } from "@ionic/vue";

  import CartHeader from "@/views/Cart/CartHeader.vue";
  import EmptyCart from "@/views/Cart/EmptyCart.vue";

  import { useStore } from "@/store";
  import { useCart } from "@/store/cart";
  import { onMounted, computed } from "vue";

  import router from "@/router";

  const addItemQuantity = (item) => {
    item.qty++;
    localStorage.setItem("cart", JSON.stringify(cart.getCartItems));
  };

  const subItemQuantity = (item) => {
    if (item.qty == 1) {
      localStorage.setItem("cart", JSON.stringify(cart.getCartItems));
    } else {
      item.qty--;
      localStorage.setItem("cart", JSON.stringify(cart.getCartItems));
    }
  };

  const updateCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart.getCartItems));
  };

  const remFromCart = (index) => {
    cart.getCartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart.getCartItems));
  };

  const totalPrice = () => {
    let sum = 0;
    cart.getCartItems.forEach((item) => {
      let element = item.product.price * item.quantity;
      sum += element;
    });
    return sum;
  };

  const push = () => {
    updateCart();
    if (localStorage.getItem("mod_user_token")) {
      router.push("/tabs/CheckoutPage");
    } else if (localStorage.getItem("mod_user_token") == null) {
      router.push("/tabs/login");
    }
  };

  const store = useStore();
  const cart = useCart();
  const cartEmpty = cart.emptyCart;

  const cartItems = computed(() => cart.getCartItems);

  onMounted(() => {
    store.loading = true;
    setTimeout(() => {
      (store.loading = false), 1000;
    });
  });
</script>

<template>
  <ion-page class="h-full">
    <cart-header></cart-header>
    <empty-cart v-if="cartEmpty"></empty-cart>
    <ion-content v-else>
      <div class="cart h-3/4 oveflow-scroll">
        <div
          class="flex justify-between items-center p-4 border-b border-gray-300"
          :key="item"
          v-for="(item, index) in cartItems"
        >
          <div class="w-3/4">
            <img
              class="w-24 h-24"
              :src="item?.product?.images[0].src"
              loading="lazy"
            />
          </div>
          <div class="w-full">
            <span class="block">{{ item?.product?.name }}</span>

            <span class="font-semibold block pb-2"
              >{{
                (item?.product?.price * item.quantity)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}
              <span class="text-sm">SAR</span>
            </span>

            <div class="flex items-center justify-between">
              <!-- delete icon-->

              <svg
                @click="remFromCart(index)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <div class="flex">
                <button
                  class="bg-gray-300 text-black rounded-full p-1"
                  @click="addItemQuantity(item)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
                <input
                  class="w-10 text-center pr-3 text-gray-600"
                  type="number"
                  disabled
                  min="1"
                  v-model="item.quantity"
                />
                <button
                  class="bg-gray-300 text-black rounded-full p-1"
                  @click="subItemQuantity(item)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
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
                  <span class="font-semibold">{{ cartItems.length }} منتج</span>
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

        <!-- checkout section -->
        <div class="checkout p-2 w-full text-center">
          <ion-button @click="push()">اتمام الطلب</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
