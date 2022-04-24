import { APP_PERSONAL_TOKEN } from "@/helpers/commons";
import { defineStore } from "pinia";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore({
  id: "useAuthStore",
  state: () => ({
    user: null,
    isLogin: false,
    isError: false,
  }),
  getters: {},
  actions: {
    async loginAction(isSavePassword, dataLogin) {
      try {
        const response = await signInWithEmailAndPassword(
          getAuth(),
          dataLogin.email,
          dataLogin.password
        );
        console.log(response);
        if (!response) {
          throw response;
        }
        this.user = response.user;
        this.isLogin = true;
        this.isError = false;
        if (isSavePassword) {
          localStorage.setItem([APP_PERSONAL_TOKEN], response.user.accessToken);
        }
      } catch (error) {
        this.isError = true;
        this.isLogin = false;
        console.log(error);
      }
    },
    setLoginOption() {
        this.isLogin = false,
        this.isError = false;
    }
  },
});
