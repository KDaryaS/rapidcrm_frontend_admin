import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import AboutUs from '../views/AboutUs.vue'
import PhotoGallery from '../views/PhotoGallery.vue'
import Orders from '../views/Orders.vue'
import Statistics from '../views/Statistics.vue'


import MenuChanges from '../views/MenuChanges.vue'
import SideMenuChanges from '../components/SideMenuChanges.vue'
import PhotoGalleryChanges from '../views/PhotoGalleryChanges.vue'

let routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/MenuChanges',
        name: 'MenuChanges',
        component: MenuChanges
    },
    {
        path: '/SideMenuChanges',
        name: 'SideMenuChanges',
        component: SideMenuChanges
    },
    {
        path: '/aboutUs',
        name: 'About',
        component: AboutUs
    },
    {
        path: '/photoGallery',
        name: 'PhotoGallery',
        component: PhotoGallery
    },
    {
        path: '/photoGalleryChanges',
        name: 'PhotoGalleryChanges',
        component: PhotoGalleryChanges
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    }
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router