<template>

	<div class="category-page">
		<search-bar></search-bar>

		<div class="container weui-flex">

			<div class="aside" ref="aside" @touchstart="asideTouchStart" @touchmove="asideTouchMove" @touchend="asideTouchEnd">

				<ul ref="aside-ul" :style="{top:asideTop+'px'}" :class="{transition:transition}">
					<li :class="{active:navIndex==index}" v-for="(item,index) in nav" v-text="item.title" @click="navIndex=index;getContentList(item.id);"> </li>
				</ul>

			</div>

			<div class="content weui-flex__item"  ref="content" @touchstart="contentTouchStart" @touchmove="contentTouchMove" @touchend="contentTouchEnd">

				<div class="category-list"  ref="category-list" :style="{top:contentTop+'px'}">

					<div class="category-image">
						<img :src="products.image">
					</div>

					<div class="category-jd" v-for="(row,i) in products.category">

						<div class="title" v-text="row.title"></div>
						<ul class="clear">
							<li class="prodcut left" v-for="(col,j) in row.list">
								<img :src="col.image">
								<div class="product-name" v-text="col.name"></div>
							</li>
						</ul>

					</div>

				</div>

			</div>

		</div>

		<bottom></bottom>
	</div>
</template>

<script>
	import SearchBar from "@/components/SearchBar"
	import Bottom from "@/components/Footer"
	export default {
		data() {
			return {
				nav: [{
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}],
				navIndex: 0,
				asideTop: 0,
				asideTopTmp: 0,
				asideStartY: 0,
				minTop: 0,
				transition: false,

				category: [{
					image: require('../assets/images/xinrenlibao.png'),
					category: [{
						title: '热门分类',
						list: [{
							image: require('../assets/images/phone.png'),
							name: '手机'
						}, {
							image: require('../assets/images/phone.png'),
							name: '手机'
						}, {
							image: require('../assets/images/phone.png'),
							name: '手机'
						}, {
							image: require('../assets/images/phone.png'),
							name: '手机'
						}, {
							image: require('../assets/images/phone.png'),
							name: '手机'
						}, {
							image: require('../assets/images/phone.png'),
							name: '手机'
						}, {
							image: require('../assets/images/phone.png'),
							name: '手机'
						}, {
							image: require('../assets/images/phone.png'),
							name: '手机'
						}, {
							image: require('../assets/images/phone.png'),
							name: '手机'
						}, {
							image: require('../assets/images/phone.png'),
							name: '手机'
						}]
					}, {
						title: '家电搜索',
						list: [{
							image: require('../assets/images/reshuihu.jpg'),
							name: '热水壶'
						}, {
							image: require('../assets/images/reshuihu.jpg'),
							name: '热水壶'
						}, {
							image: require('../assets/images/reshuihu.jpg'),
							name: '热水壶'
						}, {
							image: require('../assets/images/reshuihu.jpg'),
							name: '热水壶'
						}, {
							image: require('../assets/images/reshuihu.jpg'),
							name: '热水壶'
						}, {
							image: require('../assets/images/reshuihu.jpg'),
							name: '热水壶'
						}, {
							image: require('../assets/images/reshuihu.jpg'),
							name: '热水壶'
						}, {
							image: require('../assets/images/reshuihu.jpg'),
							name: '热水壶'
						}]
					}]
				}, {
					image: require('../assets/images/xinrenlibao.png'),
					category: [{
						title: '热门分类',
						list: [{
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}, {
							image: require('../assets/images/biyuntao.jpg'),
							name: '计生用品'
						}]
					}, {
						title: '家电搜索',
						list: [{
							image: require('../assets/images/huahzuangpin.jpg'),
							name: '化妆品'
						}, {
							image: require('../assets/images/huahzuangpin.jpg'),
							name: '化妆品'
						}, {
							image: require('../assets/images/huahzuangpin.jpg'),
							name: '化妆品'
						}, {
							image: require('../assets/images/huahzuangpin.jpg'),
							name: '化妆品'
						}, {
							image: require('../assets/images/huahzuangpin.jpg'),
							name: '化妆品'
						}, {
							image: require('../assets/images/huahzuangpin.jpg'),
							name: '化妆品'
						}, {
							image: require('../assets/images/huahzuangpin.jpg'),
							name: '化妆品'
						}]
					}]
				}],
				products: [],
				contentTop:0,
				contentTopTmp: 0,
				contentStartY: 0,
				contentMinTop: 0,
			};
		},
		methods: {
			asideTouchStart(event) {
				this.transition = false;
				this.asideStartY = event.changedTouches[0].clientY;
			},
			asideTouchMove(event) {
				var y = event.changedTouches[0].clientY;

				var t = this.asideTopTmp + y - this.asideStartY;
				// 限定上拉和下拉的阈值;
				t = t < this.minTop ? this.minTop : t;
				t = t > 150 ? 150 : t;

				this.asideTop = t;
			},
			asideTouchEnd(event) {
				this.transition = true;
				this.asideTop = this.asideTop > 0 ? 0 : this.asideTop;
				this.asideTop = this.asideTop < (this.minTop + 150) ? (this.minTop + 150) : this.asideTop;
				this.asideTopTmp = this.asideTop;
			},
			
			contentTouchStart(event) {
//				this.transition = false;
				this.contentStartY = event.changedTouches[0].clientY;
			},
			contentTouchMove(event) {
				var y = event.changedTouches[0].clientY;

				var t = this.contentTopTmp + y - this.contentStartY;
				// 限定上拉和下拉的阈值;
				t = t < this.contentMinTop ? this.contentMinTop : t;
				t = t > 150 ? 150 : t;

				this.contentTop = t;
			},
			contentTouchEnd(event) {
//				this.transition = true;
				this.contentTop = this.contentTop > 0 ? 0 : this.contentTop;
				this.contentTop = this.contentTop < (this.contentMinTop + 150) ? (this.contentMinTop + 150) : this.contentTop;
				this.contentTopTmp = this.contentTop;
			},
			
			getContentList(id) {
				this.products = { ...this.category[(Math.random() > 0.5 ? 0 : 1)]
				};
				console.log(this.products)
			}
		},
		mounted() {
			console.log(document.querySelector(".category-page .aside").clientHeight);
			console.log(document.querySelector(".category-page .aside ul").clientHeight);

			console.log(this.$refs['aside'].clientHeight);
			console.log(this.$refs['aside-ul'].clientHeight);

			this.minTop = this.$refs['aside'].clientHeight - 150 - this.$refs['aside-ul'].clientHeight;

			console.log(this.minTop);
			
			
			this.contentMinTop = this.$refs['content'].clientHeight - 150 - this.$refs['category-list'].clientHeight;
		},
		created() {
			this.getContentList();
		},
		updated(){
			this.contentMinTop = this.$refs['content'].clientHeight - 150 - this.$refs['category-list'].clientHeight;
		},
		components: {
			Bottom,
			SearchBar,
		}
	}
</script>

<style>
	html,
	body,
	#app,
	.category-page {
		height: 100%;
	}
	
	.category-page {}
	
	.category-page .search-bar {
		background-color: #e43130;
	}
	
	.category-page .container {
		background-color: #FFFFFF;
		height: 100%;
		padding: 45px 0px 50px;
		box-sizing: border-box;
	}
	
	.category-page .aside {
		height: 100%;
		width: 85px;
		overflow: hidden;
		position: relative;
		background-color: #f8f8f8;
	}
	
	.category-page .aside ul {
		margin: 0;
		padding: 0;
		list-style: none;
		width: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		border-right: solid 1px #CCCCCC;
		border-top: solid 1px #CCCCCC;
		box-sizing: border-box;
	}
	
	.transition {
		-webkit-transition: top 0.3s linear;
		transition: top 0.3s linear;
	}
	
	.category-page .aside li {
		height: 46px;
		line-height: 46px;
		text-align: center;
		border-bottom: solid 1px #CCCCCC;
		box-sizing: border-box;
		color: #333;
		font-size: 14px
	}
	
	.category-page .aside li.active {
		color: #f23030;
	}
	
	.category-page .content {
		overflow: hidden;
		position: relative;
	}
	
	.category-list {
		width: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.category-image {
		padding: 7px 7px 0px;
		box-sizing: border-box;
	}
	
	.category-image img {
		width: 100%;
	}
	
	.category-jd {
		padding: 19px 7px 0px;
		box-sizing: border-box;
	}
	
	.category-jd .title {
		font-size: 14px;
		color: #333;
		margin: 0;
		padding: 0;
		line-height: 1em;
		font-weight: 700;
		color: #080808;
	}
	
	.category-jd ul {
		margin: 9px 0px 0px;
		padding: 0px;
	}
	
	.category-jd li {
		width: 33.333%;
		list-style: none;
		text-align: center;
	}
	
	.category-jd li img {
		width: 70px;
		height: 70px;
	}
	
	.category-jd li .product-name {
		color: #333;
		height: 35px;
		margin-top: 2px;
	}
</style>