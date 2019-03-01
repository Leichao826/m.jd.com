<template>

	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in data">
				<router-link :to="item.url">
					<img :src="item.image">
				</router-link>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>

</template>

<script>
	import Swiper from "swiper"
	import axios from "axios"

	export default {
		data() {
			return {
				data: [{image:require('../assets/images/swiper.jpg'),url:''}],
			};
		},
		methods: {
			getSwiper() {
				axios.get(this.serveRoot+'/index.php/api/index/getSwiper')
				.then(res => {
					this.data = res.data;
				}).catch(err=>{
					console.log("服务器错误！")
				});
			}
		},
		created() {
			this.getSwiper();
		},
		mounted() {
			console.log(this.data);
		},
		updated() {
			// 初始化轮播图
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});
		}
	}
</script>

<style>
	@import url("../assets/css/swiper.min.css");
	/*轮播图*/
	
	.swiper-container {}
	
	.swiper-container a {
		display: block;
	}
	
	.swiper-container img {
		width: 100%;
	}
</style>