<template>
  <login-layout>
    <password-form
      @save-password="handleSavePassword"
      @login-action="handleLogin"
      @show-password="handleShowPassword"
      :isShowPassword="isShowPassword"
      :isSavePassword="isSavePassword"
    />
  </login-layout>
</template>

<script>
import passwordForm from "@/components/login/password-form/password-form.vue";
import LoginLayout from "@/layouts/login-layout/login-layout.vue";
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "@/store/auth/auth";
import { emailSignIn } from "@/helpers/options/httpsOption";
export default {
  name: "login-page",
  components: { passwordForm, LoginLayout },
  data() {
    return {
      isShowPassword: false,
      isSavePassword: true,
    };
  },
  computed: {
    ...mapState(useAuthStore, ['isError', 'isLogin']),
  },
  methods: {
    ...mapActions(useAuthStore, { loginAction: "loginAction", getPost: 'getPost', setLoginOption: 'setLoginOption' }),
    handleLogin(password) {
      this.setLoginOption();
      const dataLogin = { email: emailSignIn, password: password };
      this.loginAction(this.isSavePassword, dataLogin);
    },
    handleShowPassword() {
      this.isShowPassword = !this.isShowPassword;
    },
    handleSavePassword() {
      this.isSavePassword = !this.isSavePassword;
    },
    handleLoginSuccess() {
      this.$router.push('/');
    }
  },
  watch: {
    isError() {
      if(this.isError) {
        alert("Đăng nhập không thành công. Thử lại");
      }
    },
    isLogin() {
      if(this.isLogin) {
        this.handleLoginSuccess();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>