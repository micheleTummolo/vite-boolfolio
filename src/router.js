import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage

        },
        {
            path: '/blog',
            name: 'projectlist',
            component: ProjectList

        },
        {
            path: '/blog/:slug',
            name: 'single-project',
            component: SingleProject

        },

    ]
});

export { router };