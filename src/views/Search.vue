<template>

	<div class="search-page">

		

		<input type="text" v-model="keyword" name="" id="" value="" @focus="show=true" />

		<product v-for="(item,index) in products" :id="item.id" :title="item.title" :image="item.image" :price="item.price"></product>

		<bottom></bottom>

		<search-page v-model="show" @search="search"></search-page>

	</div>
</template>

<script>
	import Bottom from "@/components/Footer"
	import SearchPage from "@/components/SearchPage"
	import Product from "@/components/SearchProduct"
	import axios from "axios"
	import qs from "qs"
	export default {
		data() {
			return {
				keyword: '',
				products: [],
				show: false,
				fixed: false
			};
		},
		methods: {
			search(val){
				this.products = val;	
			}
		},
		components: {
			Bottom,
			SearchPage,
			Product
		},
		created() {
			console.log(this.$route);
			
			if(this.$route.params.product!=null){
				this.products = this.$route.params.product;
			}
			
//			console.log(this.$router);
		}
	}
</script>

<style>
	.search-bar {
		border-bottom: solid 1px #CCCCCC;
	}
</style>