import axios from "axios";

const state = {
  user: {},
  session_url: "https://eng-alzubair.com/wp-json/wc/v3/customers",
  token: null,
  auth: {
    username: "ck_6df23b04cb977dea0f6441042490abe14e18dcf4",
    password: "cs_e81a9ff338b655486de081a588a8026c216506f5",
  },
};

const getters = {
  userData: (state) => {
    return state.user;
  },
};

const actions = {
  async login({ commit, state }) {
    try {
      const id = localStorage.currentUserId;
      if (!id) return false;
      if (localStorage.isLoggIn) return false;
      const response = await axios.get(`${state.session_url}/${id}`, {
        auth: state.auth,
      });
      localStorage.setItem("currentUserDate", response.data);
      localStorage.isLoggIn = true;
      commit("loginUser", response.data);
    } catch (err) {
      commit("loginUser", err.response.data);
    }
  },
  async register({ commit, state }, user) {
    try {
      const response = await axios.post(state.session_url, user, {
        auth: state.auth,
      });
      if (response.status) {
        localStorage.currentUserId = response.data.id;
        localStorage.currentUserData = response.data;
        localStorage.isLoggIn = true;
        commit("registerUser", response.data);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      commit("registerUser", err.response.data);
      return false;
    }
  },
  async logout({ commit }) {
    try {
      if (!localStorage.isLoggIn) return false;
      localStorage.removeItem("currentUserData");
      localStorage.isLoggIn = false;
      commit("logoutUser");
    } catch (err) {
      console.log(err);
    }
  },
  async getUser({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setUser", response.data);
  },
  async updateUser({ commit, state }, payload) {
    try {
      const { id, user } = payload;
      const response = await axios.put(
        `${state.update_url}/${id}`,
        user,
        state.config
      );
      if (response.data.success) {
        commit("editUser", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
  },
  loginUser: (state, user) => {
    state.user = user;
    console.log(`logged in ${user}`);
  },
  registerUser: (state, data) => {
    state.user = data;
  },
  logoutUser: () => {
    console.log(`logged out`);
  },

  editUser: (state, data) => {
    state.user = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
