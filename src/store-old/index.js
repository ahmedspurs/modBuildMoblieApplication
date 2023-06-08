import { createStore } from "vuex";
import products from "./products";
import categories from "./categories";
import subcategories from "./subcategories";
import users from "./users";

export default createStore({
  state: {
    loader : true
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    categories,
    subcategories,
    users
  },
});
