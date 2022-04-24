<template>
  <login-layout>
    <forgot-password @show-password="handleShowPassword" @change-password="handleChangePassword" :isShowPassword="isShowPassword"></forgot-password>
  </login-layout>
</template>

<script>
import loginLayout from "@/layouts/login-layout/login-layout.vue";
import ForgotPassword from '@/components/login/forgot-password/forgot-password.vue';
export default {
  components: { loginLayout, ForgotPassword, },
  name: "forgot-password-page",
  data() {
    return {
      isShowPassword: false,
    }
  },
  methods: {
    handleShowPassword() {
      this.isShowPassword = !this.isShowPassword;
    },
    handleChangePassword() {

    }
  }
};
</script>

<style lang="scss" scoped>

</style>