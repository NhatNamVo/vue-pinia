<template>
  <section class="content-form">
    <div class="form-text-description">
      Thay đổi mật khẩu mới
      <router-link :to="{ name: 'login' }">
        <unicon
          class="login-go-back"
          name="arrow-left"
          fill="#C4C4CF"
          height="100%"
          width="100%"
        />
      </router-link>
    </div>
    <div class="form-input-new-password">
      <el-input
        class="input-new-password"
        :type="showPasswordAction"
        name="password"
        placeholder="Nhập password mới"
        v-model.lazy="$v.password.$model"
        @blur="$v.password.$touch()"
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
    <div class="form-new-password-validate">
      <small class="error" v-if="$v.password.$error && !$v.password.required">
        Password không được để trống
      </small>
      <small class="error" v-if="!$v.password.minLength">
        Password cần
        {{ $v.password.$params.minLength.min }} ký tự.
      </small>
    </div>

    <el-button
      @click="$emit('change-password', password)"
      class="form-new-password-submit"
      type="primary"
      plain
      >Thay đổi</el-button
    >
  </section>
</template>

<script>
import loginMixin from "@/mixins/login/login-mixin.vue";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "forgot-password",
  mixins: [loginMixin],
  validations: {
    password: {
      required: required,
      minLength: minLength(6),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./forgot-password.scss";
</style>