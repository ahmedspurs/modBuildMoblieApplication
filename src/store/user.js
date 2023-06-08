import { defineStore } from "pinia";
import axios from "@/services/axios";

export const useUser = defineStore("user", {
  state: () => ({
    user: {},
    token: "",
  }),
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post(`/jwt-auth/v1/token`, {
          username,
          password,
        });

        const { token } = response.data;
        localStorage.setItem("mod_token", token);
        const { user_display_name } = response.data;
        this.user = { user_display_name };
        console.log({ data: response.data, user: this.user });
        return true;
      } catch (error) {
        // Handle login error
        console.error(error);
        // Return false to indicate failed login
        return false;
      }
    },
    async register(username, email, password) {
      try {
        const response = await axios.post(`/wp/v2/users`, {
          username,
          email,
          password,
        });

        // const { token } = response.data;
        // Save the token to local storage or a secure storage mechanism
        // localStorage.setItem("token", token);
        console.log({ data: response.data });

        // Return true to indicate successful login
        return response.data;
      } catch (error) {
        // Handle login error
        console.error(error);
        // Return false to indicate failed login
        return false;
      }
    },
    async uploadProfilePicture(file, userId) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(`/wp/v2/media`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const mediaId = response.data.id;
        console.log({ media: response.data });
        this.updateUserAvatar(mediaId, userId);
      } catch (error) {
        console.error(error);
      }
    },
    async updateUserAvatar(mediaId, userId) {
      try {
        const response = await axios.patch(`/wp/v2/users/${userId}`, {
          avatar_media_id: mediaId,
        });

        console.log("User avatar updated successfully:", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
