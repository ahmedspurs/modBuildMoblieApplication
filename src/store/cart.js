import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    getCartItems: (state) => state.cartItems,
    emptyCart: (state) => state.cartItems.length == 0,
  },
  actions: {
    addToCart(product) {
      const existedItems = this.cartItems.filter(
        (i) => i.product.id == product.id
      );
      if (this.cartItems.length > 0 && existedItems.length > 0) {
        existedItems[0].quantity++;
        this.setCartToLocalStorage();
        return;
      }

      this.cartItems.push({
        id: Date.now(),
        quantity: 1,
        product,
      });
      this.setCartToLocalStorage();
    },
    setCartToLocalStorage() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    setCartFromLocalStorage() {
      this.cartItems = JSON.parse(localStorage["cartItems"]);
    },
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter((i) => i.id != id);
      this.setCartToLocalStorage();
    },
    emptyTheCart() {
      this.cartItems = [];
      this.setCartToLocalStorage();
    },
  },
});
