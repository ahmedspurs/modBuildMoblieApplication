import { defineStore } from "pinia";
import axios from "@/services/axios";
// import { products } from "../data/products";

export const useProduct = defineStore("products", {
  state: () => ({
    allProducts: [],
    filteredProducts: [],
    queryStatus: null,
    singleProduct: {
      id: 1,
      name: "Single Product",
      images: [
        {
          id: 1,
          src: "/assets/images/1.jpg",
        },
        {
          id: 2,
          src: "/assets/images/2.jpg",
        },
        {
          id: 3,
          src: "/assets/images/3.jpg",
        },
      ],
      store: {
        vendor_id: 1,
        vendor_shop_name: "متجر مدى",
        vendor_shop_logo: "/assets/images/mada.png",
      },
      price: 1900,
      regular_price: 2000,
      description: "Short description for a single product",
    },
  }),
  getters: {
    getAllProducts: (state) => state.allProducts,
    getFilteredProducts: (state) => state.filteredProducts,
    getQueryStatus: (state) => state.queryStatus,
    getSingleProduct: (state) => state.singleProduct,
  },
  actions: {
    async fetchAllProducts() {
      try {
        const res = await axios.get(
          "/wc/v3/products?_fields=id,name,price,regular_price,store,description,images,on_sale,rating_count,stock_quantity"
        );
        if (res.data) {
          this.allProducts = res.data;
          this.queryStatus = true;
          console.log({ data: res.data, allProducts: this.allProducts });
          return true;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        // this.allProducts = products;
        this.queryStatus = false;
        return false;
      }
    },
    async fetchSingleProduct(id) {
      try {
        const res = await axios.get(
          `/wc/v3/products/${id}?_fields=id,name,price,regular_price,store,description,images,on_sale,rating_count,stock_quantity`
        );
        if (res.data) {
          console.log({ singleProduct: res.data });
          return res.data;
        }
      } catch (err) {
        if (err.code == "ECONNABORTED") console.error("time out");
        else if (err.code == "ERR_NETWORK")
          console.error("bad internet connection");
        else console.error(err);
        return this.singleProduct;
      }
    },
  },
});
