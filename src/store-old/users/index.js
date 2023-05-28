import axios from "axios";

const state = {
  user: {},
  session_url: " https://mod-bina.com/api/v1/auth/me",
  register_url: " https://mod-bina.com/api/v1/auth/register",
  logout_url: " https://mod-bina.com/api/v1/auth/logout",
  update_url: " https://mod-bina.com/api/v1/users",
  token: null,
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("mod_user_token"),
    },
  },
};

const getters = {
  userData: (state) => {
    return state.user;
  },
};

const actions = {
  async login({ commit, state }, user) {
    try {
      const response = await axios.post(state.login_url, user);
      localStorage.setItem("mod_user_token", response.data.token);
      commit("loginUser", response.data);
    } catch (err) {
      commit("loginUser", err.response.data);
    }
  },
  async register({ commit, state }, user) {
    try {
      const response = await axios.post(state.register_url, user, state.config);
      if (response.data.success) {
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
  async logout({ commit, state }) {
    try {
      const response = await axios.get(state.logout_url, state.config);
      localStorage.removeItem("mod_user_token");
      commit("logoutUser", response.data);
    } catch (err) {
      commit("logoutUser", err.response.data);
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
    if (user.success == true) {
      state.token = user.token;
    }
  },
  registerUser: (state, data) => {
    if (data.success == true) {
      state.user = data;
    }
  },
  logoutUser: (state, data) => {
    if (data.success == true) {
      state.token = null;
    }
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
