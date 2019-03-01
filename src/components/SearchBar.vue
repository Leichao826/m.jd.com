<template>

	<div class="search-bar weui-flex" :class="{fixed:fixed}">
		<div class="category">
			<span class="fa fa-th-list"></span>
		</div>
		<div class="search weui-flex__item">
			<input type="search" placeholder="请输入搜索内容" @focus="show=true" />
		</div>
		<div class="user">
			<span class="fa fa-user"></span>
		</div>
			
		<search-page v-model="show"  @search="search"></search-page>
	</div>

</template>

<script>
	
	
	import SearchPage from "@/components/SearchPage"
	export default {
		data() {
			return {
				fixed: false,
				show:false
			};
		},
		methods: {},
		watch: {},
		computed: {},
		created() {
			console.log("search-bar");
		},
		methods:{
			search(val){
				console.log(val);
				this.$router.push({name:'search',params:{product:val}});
			}
		},
		mounted() {
			var self = this;
			window.addEventListener("scroll", function() {
				var scrollTop = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
				if(scrollTop > 10) {
					self.fixed = true;
				} else {
					self.fixed = false;
				}
			});
		},components:{
			SearchPage
		}
	}
</script>

<style>
	.search-bar {
		position: fixed;
		top: 0px;
		left: 0px;
		height: 44px;
		width: 100%;
		z-index: 9999;
	}
	
	.search-bar .category,
	.search-bar .user {
		width: 50px;
		height: 44px;
		font-size: 20px;
		color: #FFF;
		line-height: 44px;
		text-align: center;
	}
	
	.search-bar .search {
		padding-top: 7px;
	}
	
	.search-bar input {
		width: 100%;
		height: 30px;
		border-radius: 15px;
		border: none;
		outline: none;
		padding-left: 40px;
		background-color: #f7f7f7;;
		box-sizing: border-box;
	}
	
	.search-bar.fixed {
		background-color: #e43130;
	}
</style>