<template>
<div class="type">
	<ul>
		<li v-for="(item,index) in list" :key="index">
			<img :src="'img/item/' + item.img" alt="">
			<div class="content">
				<h3>{{item.title}}</h3>
				<p class="text">已售{{item.sales}}份</p>
				<p>
					<span class="price">¥{{item.price}}</span>
					<span class="add" @click="addItemNum(item); $store.commit('addNum', item.price)">+</span>
					<span class="num" v-show="item.num > 0">{{item.num}}</span>
					<span class="reduce" v-show="item.num > 0" @click="reduceItemNum(item); $store.commit('reduceNum', item.price)">-</span>
				</p>
			</div>
		</li>
	</ul>
</div>
</template>
<style type="text/css" lang="less">
.type {
	padding:10px 0px;
	li {
		padding:10px;
		border-bottom:1px solid #eee;
		img {
			float:left;
			width: 65px;
			height:50px;
			border-radius: 0;
			margin:0;
		}
		.content {
			margin-left:75px;
			h3 {
				font-size:14px;
				text-overflow:ellipsis;
				white-space:nowrap;
				overflow:hidden;
			}
			.text {
				color:#666;
				font-size: 12px;
			}
			.price,
			.add,
			.reduce{
				color:red;
				font-size: 14px;
			}
			.num {
				font-size:14px;
				margin:0 5px;
				position:relative;
				top:2px;
			}
			.num,
			.add,
			.reduce {
				float:right;
			}
			.add,
			.reduce {
				display:inline-block;
				height:18px;
				width:18px;
				font-size:16px;
				border:1px solid #ccc;
				border-radius:50%;
				text-align:center;
				line-height: 18px;
			}
		}
	}
}
</style>
<script type="text/javascript">
	export default {
		data: () => ({
			list:[],
			// 缓存数据，避免重复数据反复加载
			all:{}
		}),
		methods: {
			getData() {
				let id = this.$route.params.id;
				if(this.all[id]) {
					this.list = this.all[id];
				} else {
					this.$http
						.get("data/" + this.$route.params.id + ".json")
						.then(({data}) => {
							this.list = data.data
							this.all[id] = this.list
						})
				}
			},
			addItemNum(item) {
				item.num++
			},
			reduceItemNum(item) {
				item.num--
			}
		},
		created() {
			this.getData();
		},
		watch: {
			$route() {
				this.getData();
			}
		}
	}
</script>