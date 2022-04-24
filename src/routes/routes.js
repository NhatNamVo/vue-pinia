import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        name: 'dashboard',
        path: '/',
        component: () => import('../pages/dashboard/dashboard.vue'),
    },
    {
        name: 'about',
        path: '/about',
        component: () => import('../pages/abouts/about.vue'),

    },
    {
        name: 'experience',
        path: '/experiences',
        component: () => import('../pages/experiences/experience.vue'),

    },
    {
        name: 'project',
        path: '/projects',
        component: () => import('../pages/projects/project.vue'),
    },
    {
        name: 'economy',
        path: '/economy',
        component: () => import('../pages/economy/economy.vue'),
    },
    {
        name: 'schedules',
        path: '/schedules',
        component: () => import('../pages/schedules/schedules.vue'),
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../pages/login/login.vue'),
    },
    {
        name: 'forgot-password',
        path: '/forgot-password',
        component: () => import('../pages/forgot-password/forgot-password-page.vue'),
    },

];

const router = new VueRouter({
    routes,
});

export default router;