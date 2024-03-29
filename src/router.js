import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';
import Skills from './pages/Skills.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage

        },
        {
            path: '/projects',
            name: 'projectlist',
            component: ProjectList

        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject

        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills

        },
        {
            path: '/*',
            name: 'not-found',
            component: NotFound

        },

    ]
});

export { router };