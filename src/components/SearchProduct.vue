<template>
	<router-link :to="{path:'/product',query:{id:id}}">
		<div class="search-product">

			<div class="product-image">
				<img :src="image">
			</div>

			<div class="product-info">

				<div class="product-title" v-text="title"></div>
				<div class="product-price">
					￥<span v-text="price"></span>
				</div>
			</div>

		</div>
	</router-link>
</template>

<script>
	export default {

		data() {
			return {};
		},
		props: {
			id: {
				type: Number,
				default: 0,
			},
			image: {
				type: String,
				default: ''
			},
			title: {
				type: String
			},
			price: {
				type: Number
			}
		}

	}
</script>

<style scoped="scoped">
	a {
		display: block;
		text-decoration: none;
	}
	
	.search-product {
		padding: 5px 0px 2px;
		display: flex;
		display: -webkit-flex;
	}
	
	.product-image {
		height: 120px;
		width: 120px;
	}
	
	.product-image img {
		width: inherit;
		height: inherit;
	}
	
	.product-info {
		flex: 1;
		-webkit-flex: 1;
		height: 120px;
		padding: 0px 10px 8px;
		box-sizing: border-box;
		border-bottom: solid 1px #CCCCCC;
	}
	
	.product-title {
		word-break: break-all;
		margin-top: 8px;
		color: #333;
		line-height: 1.5em;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		height: 39px;
	}
	
	.product-price {
		margin-top: 13px;
		display: inline-block;
		height: 18px;
		color: #e93b3d;
		min-width: 40px;
	}
</style>