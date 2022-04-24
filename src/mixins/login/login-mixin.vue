<script>
export default {
  name: "login-mixins",
  props: {
    isShowPassword: {
      type: Boolean,
      default: false,
    },
    isSavePassword: {
      type: Boolean,
      defaut: true,
    },
  },
  data() {
    return {
      password: "",
    };
  },
  computed: {
    showPasswordAction() {
      if (this.isShowPassword) return "text";
      return "password";
    },
  },
};
</script>