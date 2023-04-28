import { reactive } from "vue";

/**
 * các biến global
 */
const state = reactive({
  isLogin: false,
  user: null,
  isHeaderAndFooterShow: true,
  isShowLogin: false,
  cartNumber : 0,
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
      me.$state.toastMessage.splice(me.$state.toastMessage.length - 1, 1);
      clearTimeout();
    }, 4000);
  },
  setUser(user) {
    // eslint-disable-next-line no-debugger
    debugger
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
