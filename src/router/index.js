import Vue from 'vue'
import Router from 'vue-router'
vue.use(Router)
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () =>
            import ('views/home/Home.vue')
    },
    {
        path: '/cart',
        component: () =>
            import ('views/cart/Cart.vue')
    },
    {
        path: '/category',
        component: () =>
            import ('views/category/Category.vue')
    },
    {
        path: '/profile',
        component: () =>
            import ('views/profile/Profile.vue')
    }
]
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})