<template>
  <div class="content-form">
    <div class="form-title">Hello Mr.Nam</div>
    <div class="form-login">
      <div class="login-input-password-wraper">
        <el-input
          class="login-input-password"
          :type="showPasswordAction"
          placeholder="Nhập password"
          v-model="password"
        ></el-input>
        <unicon
          @click="$emit('show-password')"
          v-show="!isShowPassword"
          class="password-display"
          name="eye"
          fill="#C4C4CF"
          height="100%"
          width="100%"
        />
        <unicon
          @click="$emit('show-password')"
          v-show="isShowPassword"
          class="password-hidden"
          name="eye-slash"
          fill="#C4C4CF"
          height="100%"
          width="100%"
        />
      </div>
      <div class="form-login-option">
        <el-checkbox
          @change="$emit('save-password')"
          class="login-save-password"
          :value="isSavePassword"
          >Lưu password</el-checkbox
        >
        <router-link
          class="login-forgot-password"
          :to="{ name: 'forgot-password' }"
        >
          Quên mật khẩu
        </router-link>
      </div>
      <el-button
        @click="$emit('login-action', password)"
        class="form-login-submit"
        type="primary"
        plain
        >Đăng nhập</el-button
      >
    </div>
  </div>
</template>

<script>
import loginMixin from '@/mixins/login/login-mixin';
export default {
  name: "password-form",
  mixins: [loginMixin]
};
</script>

<style lang="scss" scoped>
@import "./password-form.scss";
</style>