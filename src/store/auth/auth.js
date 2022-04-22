import { defineStore } from 'pinia';


export const useAuthStore = defineStore({
    id: 'useAuthStore',
    state: () => ({
        user: null,
        token: '',
        isLogin: false,
    }),
    getters: {

    },
    actions: {

    },

})
