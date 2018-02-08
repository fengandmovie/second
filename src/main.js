import Vue from 'vue';
import router from './router/router.js';
import axios from 'axios';
import store from './store/store.js'
// 在Vue原型上拓展axios
Vue.prototype.$http = axios;
// 创建vue实例化对象
new Vue({
	// 绑定视图
	el:"#app",
	// 绑定数据
	data:{},
	// 定义模板
	template:`
		<router-view></router-view>
	`,
	// 绑定路由
	router:router,
	// 注册store
	store:store
})
