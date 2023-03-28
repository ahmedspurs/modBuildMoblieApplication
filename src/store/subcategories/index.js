import axios from "axios";

const state = {
  session_url: "https://eng-alzubair.com/wp-json/wc/v3/products/categories",
  subCategories: [],
  catName: "",
  categoryIndex: 0,
  auth: {
    username: "ck_cfd30277f5f54cdf6ae4ae28d91317ee1dffecdb",
    password: "cs_c3ee33707231d3787bad4f125ace3bd2685237c6",
  },
  addError: [],
  loader: 0,
};

const getters = {
  allSubCategories: (state) => {
    return state.subCategories;
  },
  catIndex: (state) => {
    return state.categoryIndex;
  },
};

const actions = {
  async fetchSubCategories({ commit }) {
    const response = await axios.get(state.session_url, { auth: state.auth });
    localStorage.setItem("subCategories", JSON.stringify(response.data));
    commit("setSubCategories", response.data);
  },
};

const mutations = {
  setSubCategories: (state, subCategories) => {
    state.subCategories = subCategories;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
