import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const home = () => import('../views/home/home')
const car = () => import('../views/car/car')
const category = () => import('../views/category/category')
const profile = () => import('../views/profile/profile')

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/car',
            component: car
        },
        {
            path: '/category',
            component: category
        },
        {
            path: '/profile',
            component: profile
        }
    ],
    mode: 'history'
})

export default router