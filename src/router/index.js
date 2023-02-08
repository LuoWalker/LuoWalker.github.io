// 用于创建整个文件的路由器
import { createRouter, createWebHistory } from 'vue-router'
const Column = () => import('../pages/Column.vue')
const Member = () => import('../pages/Member.vue')
const ArticleList = () => import('../pages/ArticleList.vue')
const routes = [
    { path: '/', name: 'default', component: ArticleList, },
    { path: '/column', name: 'column', component: Column, },
    { path: '/article', name: 'article', component: ArticleList, },
    { path: '/member', name: 'member', component: Member },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router