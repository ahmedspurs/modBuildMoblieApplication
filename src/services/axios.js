import axios from "axios";
import env from "../env";
import { encode } from "base-64";

const instance = axios.create({
  baseURL: env.WP_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic " + encode(env.WP_KEY + ":" + env.WP_SECRET),
  },
});

export default instance;
