import Vue from "vue"
import VueRouter from "vue-router"
import Shop from "../components/shop.vue"
import Product from "../components/product.vue"
import Type from "../components/type.vue"
// 安装路由
Vue.use(VueRouter);
// 定义路由规则
let routes = [
	// 商店路由
	{
		path:"/shop/:storeName",
		component: Shop,
		children:[
			{
				path:"product",
				component: Product,
				children: [
					{
						path:"type/:id",
						component:Type
					}
				]
			},
			{
				path:"evaluate",
				component: {template:`<h3>evaluate 页</h3>`}
			},
			{
				path:"seller",
				component: {template:`<h3>seller 页</h3>`}
			}
		]
	}
]
export default new VueRouter({
	routes:routes
})