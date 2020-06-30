export default {
  setCookie(name, value, days = 1) {
    const exp = new Date();
    exp.setTime(exp.getTime() + days * 11 * 60 * 60 * 1000);
    document.cookie = `${name}=${escape(value)}; path=/;expires=${exp.toGMTString()}`;
  },
  getCookie(name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = document.cookie.match(reg);
    if (arr) {
      return unescape(arr[2]);
    }
    return null;
  },
  getAllCookie() {
    return document.cookie;
  },
  clearCookie(name) {
    this.setCookie(name, '', -1);
  },
  delCookie(name) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = this.getCookie(name);
    if (cval != null) {
      document.cookie = `${name}=${cval}; path=/;expires=${exp.toGMTString()}`;
    }
  },
};
