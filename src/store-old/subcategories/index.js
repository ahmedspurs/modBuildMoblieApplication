import axios from "axios";

const state = {
  subCategories: [],
  session_url: " https://mod-bina.com/api/v1/SubSections",
  addError: [],
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("mod_user_token"),
    },
  },
};

const getters = {
  allSubCategories: (state) => {
    return state.subCategories;
  },
};

const actions = {
  async fetchSubCategories({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
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
