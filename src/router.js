import Vue from 'vue'
import Router from 'vue-router'

/**
 * 每一个需要路由的页面
 * */
import Home from './views/Home.vue'
import Cart from './views/ShoppingCart.vue'
import User from './views/UserCenter.vue'
import Category from './views/Category.vue'
import Search from './views/Search.vue'
import Product from './views/ProductDetail.vue'
import Goods from './components/Goods.vue'
import Comment from './components/Comment.vue'
import Detail from './components/Detail.vue'
import Recommend from './components/Recommend.vue'
import Login from'./views/Login.vue'
Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/index',
		redirect: '/'
	}, {
		path: '/',
		name: 'home',
		alias: '/aaaa',
		component: Home
	}, {
		path: '/cart',
		name: 'cart',
		component: Cart
	}, {
		path: '/user',
		name: 'user',
		component: User
	}, {
		path: '/category',
		name: 'category',
		component: Category
	}, {
		path: '/search',
		name: 'search',
		component: Search
	},{
		path: '/login',
		name: 'login',
		component: Login
	},{
		path: '/product',
		name: 'product',
		component: Product,
		children: [{
			path: 'goods',
			component: Goods
		}, {
			path: 'detail',
			component: Detail
		}, {
			path: 'comment',
			component: Comment
		}, {
			path: 'recommend',
			component: Recommend
		}]
	}]
});

// 全局的路由守卫 -看大门的，要问一句从哪里来啊？到哪里去啊？下一步要怎么做？
router.beforeEach((to, from, next) => {
	next();
})

router.afterEach((to, from) => {

})
export default router;