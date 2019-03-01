<template>
	<div class="home">
		<search-bar></search-bar>
		<swiper></swiper>
		<quick-nav></quick-nav>
		<recommend></recommend>
		<bottom></bottom>
	</div>
</template>

<script>
	import SearchBar from "@/components/SearchBar"
	import Swiper from "@/components/Swiper"
	import QuickNav from "@/components/QuickNav"
	import Recommend from "@/components/RecommendProductList"
	import Bottom from "@/components/Footer"
	import axios from "axios"
	import qs from "qs"
	export default {
		data() {
			return {
				product: []

			};
		},
		components: {
			SearchBar,
			Swiper,
			QuickNav,
			Recommend,
			Bottom
		},
		created() {
			// 当前页面的路由对象
			console.log(this.$route);
			console.log(this.$router);
		},
		mounted() {
			/**
			 * ajax数据通信
			 * 
			 * .then(res=>{}) 等效于  success:function(res){}
			 * .catch(err => {}) 等效于  error:function(){}
			 * 
			 * 尽量使用箭头函数作为回调使用
			 * **/
			//			axios.post("/data.json",qs.stringify({id:12,uid:321})).then((res)=>{
			//				this.product = res.data;
			//			}).catch(err => {});
		}
	}
</script>