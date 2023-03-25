import axios from "axios";

const state = {
  session_url: "https://eng-alzubair.com/wp-json/wc/v3/products",
  subCategories: [],
  catName: "",
  categoryIndex: 0,
  auth: {
    username: "ck_6df23b04cb977dea0f6441042490abe14e18dcf4",
    password: "cs_e81a9ff338b655486de081a588a8026c216506f5",
  },
  addError: [],
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
    const response = await axios.get(
      `${state.session_url}/categories`,
      {
        auth: state.auth
      }
    );
    const response2 = await axios.get(
      `${state.session_url}`,
      {
        auth: state.auth
      }
    );
    if (response.data) {
      let mainCat = [];
      response.data.forEach((element) => {
        if (element.parent == 0) {
          mainCat.push(element);
        }
      });

      let allCats = [];
      mainCat.forEach((element) => {
        let sub = [];
        let subCats = [];
        response2.data.forEach((item) => {
          for (let i = 0; i < item.categories.length; i++) {
            if (element.id == item.categories[i].id) {
              sub.push(item);
            }
          }
        });
        response.data.forEach((item) => {
          if (element.id == item.parent) {
            subCats.push(item);
          }
        });
        allCats.push({ name: element.name, sub: sub, subCats: subCats });
      });
      allCats.splice(0, 1);
      commit("setSubCategories", allCats);
    }
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
