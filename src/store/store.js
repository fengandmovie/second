import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)
export default new Store({
	state:{
		num:0
	},
	mutations: {
		addNum(state,num) {
			state.num += +num;
		},
		reduceNum(state,num) {
			state.num -= num;
		}
	}
})