import axios from "axios";

const state = {
  categories: [],
  session_url: "https://eng-alzubair.com/wp-json/wc/v3/products/categories",
  addError: [],
  auth: {
    username: "ck_6df23b04cb977dea0f6441042490abe14e18dcf4",
    password: "cs_e81a9ff338b655486de081a588a8026c216506f5",
  },
};

const getters = {
  allCategories: (state) => {
    return state.categories;
  },
};

const actions = {
  async fetchCategories({ commit, state }) {
    const response = await axios.get(state.session_url, state.auth);
    commit("setCategories", response.data);
  },
};

const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
