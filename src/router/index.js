import { createRouter, createWebHashHistory } from "@ionic/vue-router";
// main routes
import TabsPage from "@/views/TabsPage.vue";
import HomePage from "@/views/HomePage/HomePage.vue";
import StoresListingPage from "@/views/StoreListingPage/StoreListingPage.vue";
import CategoriesListingPage from "@/views/CategoryListingPage/CategoryListingPage.vue";
import ProductListing from "@/views/ProductListingPages/ProductListing.vue";
import ProducPage from "@/views/ProductListingPages/SingleProduct/ProducPage.vue";
// user related routes
import ProfilePage from "@/views/UserPages/ProfilePage.vue";
import EditProfile from "@/views/UserPages/EditProfile.vue";
import ContactPage from "@/views/UserPages/ContactPage.vue";
import LoginPage from "@/views/UserPages/LoginPage.vue";
import RegisterPage from "@/views/UserPages/RegisterPage.vue";
// cart & checkout routes
import CartPage from "@/views/Cart/CartPage.vue";
import LastOrders from "@/views/ProductPurchasePages/LastOrders.vue";
import CheckoutPage from "@/views/ProductPurchasePages/CheckoutPage.vue";
import OrderDetails from "@/views/ProductPurchasePages/OrderDetails.vue";
import LastOrder from "@/views/ProductPurchasePages/LastOrder.vue";

const routes = [
  {
    path: "/payment",
    beforeEnter() {
      location.href = "https://api.moyasar.com/v1/payments.html";
    },
  },
  {
    path: "/",
    redirect: "/tabs/home",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      // main routes
      {
        path: "",
        redirect: "/tabs/home",
      },
      {
        path: "home",
        component: HomePage,
      },
      { path: "stores", component: StoresListingPage },
      {
        path: "categories",
        component: CategoriesListingPage,
      },
      {
        path: "products-listing",
        component: ProductListing,
      },
      {
        path: "products-listing/:id",
        component: ProducPage,
      },
      // user related routes
      {
        path: "login",
        component: LoginPage,
      },
      {
        path: "register",
        component: RegisterPage,
      },
      {
        path: "ContactPage",
        component: ContactPage,
      },
      {
        path: "ProfilePage",
        component: ProfilePage,
      },
      { path: "EditProfile", component: EditProfile },
      // product purchase routes
      {
        path: "CartPage",
        component: CartPage,
      },
      {
        path: "CheckoutPage",
        component: CheckoutPage,
      },
      {
        path: "LastOrders",
        component: LastOrders,
      },
      {
        path: "LastOrder",
        component: LastOrder,
      },
      {
        path: "OrderDetails",
        component: OrderDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
