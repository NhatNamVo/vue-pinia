<template>
  <div id="app">
    <template v-if="!isLayout">
      <router-view></router-view>
    </template>

    <template v-else>
      <main-layout></main-layout>
    </template>
    
  </div>
</template>

<script>
import { useAuthStore } from '@/store/auth/auth';
import { mapState } from 'pinia';

import mainLayout from './layouts/main-layout.vue';

export default {
  name: 'App',
  components: {
    mainLayout,
  },
  data() {
    return {
      isLayout: true,
    }
  },
  computed: {
    ...mapState(useAuthStore, ['isLogin']),
  },
  watch: {
    '$route.path': function (value) {
      if(value === '/login' || value === '/404' || value === '/505' || value === '/forgot-password') {
        this.isLayout = false;
      }
      else{
        this.isLayout = true;
      }
    }
  },
  mouted() {
    const routePath = this.$router.path;
    if(routePath === '/login' || routePath === '404' || routePath === '505') {
      this.isLayout = false;
    }
    else{
      this.isLayout = true;
    }
  },
}
</script>

<style>

</style>
