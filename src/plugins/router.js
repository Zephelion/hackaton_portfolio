import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/project/:name', name:'project', component: () => import('../views/Details.vue'),
    },
    {
        path: '/', name:'home', component: () => import('../views/Landing.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;