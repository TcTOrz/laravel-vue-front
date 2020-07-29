/*
 * @Author: Li Jian
 * @Date: 2020-07-29 14:53:33
 * @LastEditTime: 2020-07-29 16:16:16
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/plugins/cookie.ts
 * @Motto: MMMMMMMM
 */
// import Vue from 'vue';

export default {
  setCookie(name:string, value:string, days = 1): void {
    const exp = new Date();
    exp.setTime(exp.getTime() + days * 11 * 60 * 60 * 1000);
    document.cookie = `${name}=${escape(value)}; path=/;expires=${exp.toUTCString()}`;
  },
  getCookie(name:string): any {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = document.cookie.match(reg);
    if (arr) {
      return unescape(arr[2]);
    }
    return null;
  },
  getAllCookie(): string {
    return document.cookie;
  },
  clearCookie(name:string): void {
    this.setCookie(name, '', -1);
  },
  delCookie(name:string): void {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = this.getCookie(name);
    if (cval != null) {
      document.cookie = `${name}=${cval}; path=/;expires=${exp.toUTCString()}`;
    }
  },
};
