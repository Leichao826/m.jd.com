<template>
	<div class="search-mask" v-show="show">
		<header class="top-bar weui-flex">

			<div class="go-back">
				<a href="#" @click.prevent="hide"><i class="fa fa-angle-left"></i></a>
			</div>
			<div class="search weui-flex__item">
				<input type="search" v-model="keyword" placeholder="请输入搜索内容" />
			</div>
			<div class="menu" style="width: 60px;">
				<a @click="search">搜索</a>
			</div>

		</header>

	</div>
</template>

<script>
	
	import axios from "axios"
	import qs from "qs"
	export default {
		data() {
			return {
				show: false,
				keyword: ''
			};
		},
		props: ['value'],
		created() {
			this.show = this.value;

		},
		watch: {
			value(val) {
				this.show = val;
				if(val) {
					document.body.style.overflow = "hidden";
				} else {
					document.body.style.overflow = "auto";
				}
			}
		},
		methods: {
			hide() {
				this.show = false;
				this.$emit('input', false);
				document.body.style.overflow = "auto";
			},
			search() {
				axios.post(this.serveRoot + "/index.php/api/index/searchProduct", qs.stringify({
					keyword: this.keyword,
					id: 123,
					order: 456
				})).then(res => {
					this.hide();
					this.$emit('search', res.data);
				}).catch(err => {});
			}
		}
	}
</script>

<style>
	.search-mask {
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		z-index: 999;
		background-color: #FFFFFF;
	}
	
	.search-mask .top-bar .search {
		padding-top: 7px;
	}
	
	.search-mask .top-bar input {
		width: 100%;
		height: 30px;
		border-radius: 15px;
		border: solid 1px #CCCCCC;
		outline: none;
		padding-left: 40px;
		background-color: #fff;
		box-sizing: border-box;
	}
	
	.search-mask .top-bar .menu a {
		position: static;
		padding: 6px;
		box-sizing: border-box;
		background-color: #e93b3d;
		color: #fff;
		border-radius: 4px;
		font-size: 14px;
		line-height: 44px;
	}
</style>