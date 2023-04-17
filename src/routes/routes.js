import Thehome from "@/views/home/TheHome.vue";
import ProductDetail from "@/views/product/ProductDetail.vue";
import TheCart from "@/views/TheCart.vue";
import MRegister from "@/views/account/MRegister";
import MCheckout from "@/views/checkout/MCheckout.vue";


/**
 * Các routes của page
 */
const routes = [
  {
    path: "",
    component:Thehome,
 },
 {
  path: "/products",
    component:ProductDetail,
 },
 {
  path: "/cart",
    component:TheCart,
 },
 {
 path: "/account/register",
    component:MRegister,
 },
 {
   path: "/checkouts/:id",
    component:MCheckout,
 },
];

export default routes;
