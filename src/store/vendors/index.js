import axios from "axios";

const state = {
  vendors: [],
  vendor: {},
  session_url: "https://eng-alzubair.com/wp-json/wcfmmp/v1/store-vendors",
  auth: {
    username: "ck_cfd30277f5f54cdf6ae4ae28d91317ee1dffecdb",
    password: "cs_c3ee33707231d3787bad4f125ace3bd2685237c6",
  },
};

const getters = {
  allVendors: (state) => {
    return state.vendors;
  },
  singleVendor: (state) => {
    return state.vendor;
  },
};

const actions = {
  async fetchVendors({ commit, state }) {
    const response = await axios.get(state.session_url, {
      auth: state.auth,
    });
    try {
      if (response.status == 200) {
        commit("setVendors", response.data);
        return;
      }
    } catch (err) {
      console.error(err);
    }
  },
  // get single vendor
  // @GET session url /id
  async fetchVendor({ commit, state }, id) {
    const response = await axios.get(`${state.session_url}/${id}`, {
      auth: state.auth,
    });
    try {
      if (response.status == 200) {
        commit("setVendor", response.data);
        return;
      }
    } catch (err) {
      console.error(err);
    }
  },
};

const mutations = {
  setVendors: (state, vendors) => {
    state.vendors = vendors;
  },
  setVendor: (state, vendor) => {
    state.vendor = vendor;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
