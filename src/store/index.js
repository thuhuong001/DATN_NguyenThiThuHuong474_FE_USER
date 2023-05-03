import { reactive } from "vue";

/**
 * các biến global
 */
const state = reactive({
  isLogin: false,
  user: null,
  isHeaderAndFooterShow: true,
  isShowLogin: false,
  cartNumber: localStorage.getItem("cartNumber"),
  /**
   * Mảng chứa các toast message
   */
  toastMessage: [],

  accountLogin: false,
  isLoadding: false,
  /**
   * Hàm hiển thị toast message
   */
  addToastMessage: function (me, msg) {
    me.$state.toastMessage.unshift(msg);
    if (this.timeout) clearTimeout(this.timeout);
    setTimeout(() => {
      me.$state.toastMessage.splice(0, 1);
      clearTimeout();
    }, 2000);
  },
  setUser(user) {
    // const encodedUser = window.btoa(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
  },
  getUser() {
    try {
      const encodedUser = localStorage.getItem("user");
      if (encodedUser) {
        const user = JSON.parse(encodedUser);
        this.user = user;
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      localStorage.removeItem("token");
    }
  },
  formatPrice(price) {
    if (!price) return "";
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  },
  isMask() {
    this.isLoadding = true;
  },
  unMask() {
    this.isLoadding = false;
  },
});

export default {
  state,
};
