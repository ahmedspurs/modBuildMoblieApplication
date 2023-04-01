import axios from "axios";

const state = {
  categories: [],
  session_url: "https://eng-alzubair.com/wp-json/wc/v3/products/categories",
  addError: [],
  auth: {
    username: "ck_cfd30277f5f54cdf6ae4ae28d91317ee1dffecdb",
    password: "cs_c3ee33707231d3787bad4f125ace3bd2685237c6",
  },
};

const getters = {
  allCategories: (state) => {
    return state.categories;
  },
};

const actions = {
  async fetchCategories({ commit, state }) {
    const response = await axios.get(state.session_url, { auth: state.auth });
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
