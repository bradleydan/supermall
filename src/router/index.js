import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装插件
Vue.use(VueRouter);

// 懒加载
const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')
const Detail = () =>
    import ('../views/detail/Detail')
 
const routes = [{
    path: '',
    redirect: '/home'
},
{
    path: '/home',
    component: Home
},
{
    path: '/category',
    component: Category
},
{
    path: '/cart',
    component: Cart
},
{
    path: '/profile',
    component: Profile
},
{
    // 动态路由
    path: '/detail/:iid',
    component: Detail
}
]
// 创建路由对象
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router