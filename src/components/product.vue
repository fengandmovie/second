<!-- 定义模板 -->
<template>
	<div class="product">
		<div class="menu">
			<router-link v-for="(item, index) in list" v-text="item.text" :to="'/shop/' + $route.params.storeName + '/product/type/' + item.id" :key="index"></router-link>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>
<!-- 定义样式 -->
<style type="text/css" lang="less">
@bg: #ebedf0;
@color: #666;
@hoverColor: red;
.product {
	min-height: 500px;
	.menu {
		width:100px;
		background: @bg;
		float:left;
		text-align: center;
		padding:20px 0px;
		a {
			text-decoration: none;
			font-size:16px;
			height: 40px;
			line-height: 40px;
			display: block;
			color:@color;
			border-left:2px solid transparent;
			&.router-link-active {
				color:@hoverColor;
				border-left-color:@hoverColor;
				background: white;
			}
		}
	}
	.main {
		margin-left: 105px;
	}
}
</style>
<!-- 定义行为 -->
<script type="text/javascript">
	export default {
		data:() => ({
			list:[]
		}),
		created() {
			this.$http
				.get("data/menu.json", {
					params:{
						id:this.$route.params.storeName
					}
				})
				.then(({data}) => this.list = data.data);
		}
	}
</script>