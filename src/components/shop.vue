<!-- 定义模板 -->
<template>
	<div class="shop">
		<div class="header">
			<h2>{{data.title}}</h2>
			<img :src="'img/' + data.logo" alt="">
			<p>{{data.info + " | "}}</p>
		</div>
		<div class="nav">
			<router-link v-for="(item,index) in data.menu" v-text="item.text" :to="'/shop/' + data.store + '/'+ item.id" :key="index"></router-link>
		</div>
		<router-view></router-view>
		<div class="shopping-car">
			<span>Total:{{$store.state.num}}元</span>
			<span class="btn-buy">选好了</span>
		</div>
	</div>
</template>
<!-- 定义样式 -->
<style type="text/css" lang="less">
@color: #ed813f;
.shop {
	.header {
		background: @color;
		height:100px;
		color:#fff;
		h2{
			text-align: center;
			line-height: 50px;
			font-size: 20px;
			font-weight:normal;
			color:white
		}
		img {
			float:left;
			margin-left:10px;
			width:50px;
			height:50px;
			border-radius:50%
		}
		p {
			margin-left:90px;
			line-height: 40px;
			font-size:14px;
			color:#214818;
		}
	}
	.nav {
		height:60px;
		font-size:20px;
		line-height: 60px;
		background: #f9fdff;
		text-align: center;
		a {
			text-decoration:none;
			display: inline-block;
			padding:0px 30px;
			height: 60px;
			color: #666;
			border-bottom:2px solid transparent;
			&.router-link-active {
				border-bottom-color:red;
				color:red;
			}
		}
	}
	.shopping-car {
		position: fixed;
		bottom:0px;
		left:0px;
		right:0px;
		height: 60px;
		line-height: 60px;
		font-size: 22px;
		color:#fff;
		background:#484d54;
		span {
			padding-left:40px;
		}
		span.btn-buy {
			float:right;
			padding:0px 30px;
			background: #fe2947;
		}
	}
}
</style>
<!-- 定义行为 -->
<script type="text/javascript">
	export default {
		// 绑定数据
		data: () => ({
			data:{}
		}),
		//请求数据
		created() {
			console.log(111,this);
			this.$http
				.get("data/" + this.$route.params.storeName + ".json")
				.then(({data}) => this.data = data.data)
		} 
	}
</script>