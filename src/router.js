import { createRouter } from 'vue-router';
import editorMarkdown from './components/editor-markdown.vue';
import b from './components/b.vue'
import { createWebHashHistory } from 'vue-router';
const routes = [
    {
       path: '/',
       redirect: '/editorMarkdown'
    },
    {
        path: '/editorMarkdown',
        component: editorMarkdown
    },
    {
        path: '/b',
        component: b
    },
    {
        path: '/digital-man',
        component: import('./components/digital-man.vue')
    },
    {
        path: '/element-plus-theme',
        component: import('./components/element-plus-theme.vue')
    },
    {
        path: '/content-test',
        component: import('./components/content-test.vue')
    },
    {
        path: '/fullCalendar',
        component: import('./components/fullCalendar.vue')
    },
    {
        path: '/vvt',
        component: import('./components/vvt.vue')
    },
    {
        path: '/better-scroll-test',
        component: import('./components/better-scroll-test.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;