<template>

	<div class="prodcut-detail">

		<top-bar>

			<ul>
				<li :class="{active:navIndex==index}" v-for="(item,index) in nav" @click="navIndex=index;scroll(item.ref)"> <span v-text="item.title"></span> </li>
			</ul>

		</top-bar>

		<div class="prodcuted" id="product" ref="product">
			<div class="oppo">

				<div class="swiper-container">

					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="../assets/images/OPPO FIND X1.jpg">
						</div>
						<div class="swiper-slide">
							<img src="../assets/images/OPPO FIND X2.jpg">
						</div>
						<div class="swiper-slide">
							<img src="../assets/images/OPPO FIND X3.jpg">
						</div>
						<div class="swiper-slide">
							<img src="../assets/images/OPPO FIND X4.jpg">
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
				<div class="twelve">
					<span class="twelve-shuzi">12.12</span>
					<div class="twelve-text">
						<span class="twelve-big">京东暖暖节</span><br />
						<span class="twelve-small">该商品正在参加双12大促，请火速抢购吧！</span>
					</div>
				</div>
				<div class="findx-title">
					<span class="title1">12.12 </span>&nbsp;&nbsp;
					<span class="title2">【京东物流】</span>
					<span>OPPO FIND X【送蓝牙音箱】3期免息 拍照游戏屏下指纹手机A1升级R17同款屏水滴屏 梵星蓝 6G+64G 官方标配</span><br />
					<a href="#">【快速物流】自营多仓就近发货 √先送便携式蓝牙音箱✚OPPO耳机(前100)✚套装送充电宝 √再送6个月碎屏险✚晒单礼✚全国联保 √还享0首付✚3期白条免息 √还有40天退换货（详询客服） </a>
					<br />
					<br />
					<div class="findx-price">
						<span>￥4999.0</span>
					   <button onclick="">降价提醒</button>
					</div>
					<div class="fangxingo">
						<span>京东放心购   闪电退款   送运费险</span><i class="fa fa-ellipsis-h"></i>
					</div>
						
					

				</div>

			</div>
		</div>
		<div class="comment" ref="comment" >
			<div class="comment-top"><span class="comment-title">评价</span>
			<i class="fa fa-chevron-right"></i>
			</div>	
			
			<div class="comment-text">
				<textarea name="" rows="6" cols="85"placeholder="请输入评价内容"></textarea>
			</div>
			<button onclick="">提交</button>
			<button onclick="" >重置</button>
			
		</div>
		<div class="recommend" id="recommend" ref="recommend">
			<p class="tuijian">猜你喜欢</p>
			<div class="product-list clear">
				<div class='product' v-for="(item,index) in products">
					<a :href='item.id'>
						<div class='product-image'>
							<img :src='item.image'>
						</div>
						<div class='product-title' v-text='item.title'></div>
						<div class='product-info'>
							<div class='product-price'>￥<span v-text='item.price'></span></div>
							<div class='product-similar'></div>
						</div>
						<div class='similar-info'></div>
					</a>
				</div>
			</div>
		</div>
		<div class="detail" ref="detail">
			<div class="container">

				<table border="1" cellspacing="0.5" cellpadding="0.5">
					<caption>
						<h3>商品参数</h3></caption>

					<tr>
						<td>商品编号</td>
						<td>315744974694</td>
					</tr>
					<tr>
						<th>基本信息</th>
					</tr>
					<tr>
						<td>机身颜色</td>
						<td>其他</td>
					</tr>
					<tr>
						<td>机身长度</td>
						<td>158.3mm</td>
					</tr>
					<tr>
						<td>机身宽度</td>
						<td>75.5mm</td>
					</tr>
					<tr>
						<td>机身厚度</td>
						<td>7.5mm</td>
					</tr>
					<tr>
						<td>机身重量</td>
						<td>约156g</td>
					</tr>
					<tr>
						<td>输入方式</td>
						<td>触屏式</td>
					</tr>
					<tr>
						<td>屏占比</td>
						<td>91%</td>
					</tr>
					<tr>
						<th>存储</th>
					</tr>
					<tr>
						<td>ROM</td>
						<td>64GB</td>
					</tr>

					<tr>
						<td>RAM</td>
						<td>6GB/8GB</td>
					</tr>

					<tr>
						<td>存储卡</td>
						<td>支持MicroSD卡</td>
					</tr>
					<tr>
						<td>最大存储容量</td>
						<td>256GB</td>
					</tr>
					<tr>
						<th>主体</th>
					</tr>
					<tr>
						<td>品牌</td>
						<td>OPPO</td>
					</tr>
					<tr>
						<td>型号</td>
						<td>FIND X</td>
					</tr>
					<tr>
						<td>入网型号</td>
						<td>官网信息为准</td>
					</tr>
					<tr>
						<td>上市年份</td>
						<td>2018年</td>
					</tr>
					<tr>
						<td>上市月份</td>
						<td>8月</td>
					</tr>
					<tr>
						<th>操作系统</th>
					</tr>
					<tr>
						<td>操作系统</td>
						<td>Android</td>
					</tr>
					<tr>
						<td>操作系统版本</td>
						<td>8.4</td>
					</tr>
					<tr>
						<th>主芯片</th>
					</tr>
					<tr>
						<td>CPU品牌</td>
						<td>骄龙（Snapdagon）</td>
					</tr>
					<tr>
						<td>CPU频率</td>
						<td>1.95GHZ</td>
					</tr>
					<tr>
						<td>CPU核数</td>
						<td>8核</td>
					</tr>
					<tr>
						<td>CPU型号</td>
						<td>骄龙840</td>
					</tr>
					<tr>
						<th>网络支持</th>
					</tr>
					<tr>
						<td>双卡机类型</td>
						<td>双卡双待</td>
					</tr>
					<tr>
						<td>最大SIM支持</td>
						<td>2</td>
					</tr>
					<tr>
						<td>4G支持</td>
						<td>全网通</td>
					</tr>
					<tr>
						<th>屏幕</th>
					</tr>
					<tr>
						<td>主屏幕尺寸</td>
						<td>6.4英寸</td>
					</tr>
					<tr>
						<td>分辨率</td>
						<td>2340*1080</td>
					</tr>
					<tr>
						<td>屏幕材质类型</td>
						<td>OLED</td>
					</tr>
					<tr>
						<th>前置摄像头</th>
					</tr>
					<tr>
						<td>前置摄像头</td>
						<td>2500万像素</td>
					</tr>
					<tr>
						<td>美颜技术</td>
						<td>支持</td>
					</tr>

					<tr>
						<td>拍照特点</td>
						<td>美颜</td>
					</tr>
					<tr>
						<th>后置摄像头</th>
					</tr>
					<tr>
						<td>摄像头数量</td>
						<td>2</td>
					</tr>
					<tr>
						<td>后置摄像头</td>
						<td>2500万+200万像素</td>
					</tr>
					<tr>
						<th>电池信息</th>
					</tr>
					<tr>
						<td>电池容量</td>
						<td>3600mAh</td>
					</tr>
					<tr>
						<td>电池是否拆卸</td>
						<td>否</td>
					</tr>
					<tr>
						<td>充电器</td>
						<td>5V/2A</td>
					</tr>
					<tr>
						<td>闪充</td>
						<td>支持</td>
					</tr>

					<tr>
						<td>无限充电</td>
						<td>不支持</td>
					</tr>
					<tr>
						<th>数据接口</th>
					</tr>
					<tr>
						<td>数据传输接口</td>
						<td>蓝牙，wifi热点，WIFI，OTG接口</td>
					</tr>
					<tr>
						<td>耳机接口类型</td>
						<td>3.5mm</td>
					</tr>
					<tr>
						<td>充电器接口</td>
						<td>USB接口</td>
					</tr>
					<tr>
						<th>手机特性</th>
					</tr>
					<tr>
						<td>指纹识别</td>
						<td>支持</td>
					</tr>
					<tr>
						<td>GPS</td>
						<td>支持</td>
					</tr>

				</table>
				<h3>商品详情</h3>
				<img src="../assets/images/FINDX-5.jpg" />
				<img src="../assets/images/FINDX-6.jpg" />
				<img src="../assets/images/FINDX-7.jpg" />
				<img src="../assets/images/FINDX-8.jpg" />
				<img src="../assets/images/FINDX-9.jpg" />
				<img src="../assets/images/FINDX-10.jpg" />
				<img src="../assets/images/FINDX-11.png" />
				<img src="../assets/images/FINDX-12.jpg" />
				<img src="../assets/images/FINDX-13.png" />
				<img src="../assets/images/FINDX-14.png" />
				<img src="../assets/images/FINDX-15.png" />
			</div>
		</div>
		<!--	底部-->
		<footer>

			<ul>
				<li v-for="(item,index) in foot">
					<router-link :to="item.to">
						<span class="fa" :class="item.icon"></span>
						<span class="title" v-text="item.title"></span>
					</router-link>
				</li>
			</ul>

		</footer>
		<div id="goTop">
			<div class="goTop" v-show="goTopShow" @click="goTop"><i class="goTopIcon"></i></div>
		</div>

	</div>
</template>
<script>
	import Swiper from "swiper"
	import TopBar from "@/components/TopBar";
	export default {
		name: "goTop",
		data() {
			return {
				nav: [{
					ref: 'product',
					title: '商品'
				}, {
					ref: 'comment',
					title: '评价'
				}, {
					ref: 'detail',
					title: '详情'
				}, {
					ref: 'recommend',
					title: '推荐'
				}],
				navIndex: 0,
				foot: [{
					title: '联系客服',
					icon: 'fa-user',
					to: '/user',
				}, {
					title: '进店',
					icon: 'fa-home',
					to: '/',
				}, {
					title: '购物车',
					icon: 'fa-shopping-cart',
					to: '/cart',
				}, {
					title: '加入购物车',
					icon: '',
					to: '/cart',
				}, {
					title: '立即购买',
					icon: '',
					to: '/cart',
				}],
				products: [{
					title: 'OPPO FINDX全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
					image: require('../assets/images/OPPO FIND X1.jpg'),
					price: 5999,
					id: 2
				}, {
					title: 'OPPO FINDX全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
					image: require('../assets/images/OPPO FIND X2.jpg'),
					price: 4999,
					id: 1
				}, {
					title: 'OPPO FINDX全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
					image: require('../assets/images/OPPO FIND X3.jpg'),
					price: 5999,
					id: 2
				}, {
					title: 'OPPO FINDX全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
					image: require('../assets/images/OPPO FIND X4.jpg'),
					price: 4999,
					id: 1
				}],
				scrollTop: '',
				goTopShow: false
			};
		},

		methods: {
			scroll(ref) {

				console.log(this.$refs[ref]);
				var top = this.$refs[ref].offsetTop;
				//				var tmp = document.documentElement.scrollTop;
				//				var count = 20;
				//				var step = (top-tmp)/count;
				//				var t = setInterval(()=>{
				//					
				//					tmp += step;
				//					document.documentElement.scrollTop = tmp;
				//					count--;
				//					
				//					if(count<=0){
				//						clearInterval(t);
				//					}
				//					
				//				},50);

				document.documentElement.scrollTop = top;
				//				document.body.scrollTop = top;
			},

			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(this.scrollTop > 500) {
					this.goTopShow = true
				} else {
					this.goTopShow = false
				}
			},
			goTop() {
				let timer = null,
					_that = this;
				cancelAnimationFrame(timer)
				timer = requestAnimationFrame(function fn() {
					if(_that.scrollTop > 0) {
						_that.scrollTop -= 50;
						document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
						timer = requestAnimationFrame(fn)
					} else {
						cancelAnimationFrame(timer);
						_that.goTopShow = false;
					}
				})
			}

		},
		mounted() {

			console.log(document.body.scrollTop);
			console.log("初始化轮播图！");
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});
			window.addEventListener('scroll', this.handleScroll);
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll)
		},

		components: {
			TopBar
		}
	}
</script>

<style  scoped="scoped">
	.prodcut-detail,.prodcuted,.comment,.detail,.recommend{
		width: 100%;
		text-align: center;
	}
	
	
	
	.top-bar{
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
	}
	.top-bar ul {
		margin: 0;
		padding: 0;
		text-align: center;
		list-style: none;
		padding: 0px 40px;
	}
	
	.top-bar ul li {
		float: left;
		width: 25%;
	}
	
	.top-bar ul li.active span {
		color: #e4393c;
		font-weight: bold;
		padding-left: 13px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 8px;
	}
	/*product start*/
	
	@import url("../assets/css/swiper.css");
	.swiper-container {
		margin-top: 44px;
		padding-top: 10px;
		
	}
	
	.swiper-container a {
		display: block;
	}
	
	.swiper-container img {
		width: 100%;
	}
	.twelve{
		position: relative;
		height: 110px;
		background-color: #FF3B30;
		width: 100%;
		color: white;
	}
	.twelve-shuzi{
		position: absolute;
		left: 30px;
		top:15px;
		font-size: 40px;
		
		text-align: center;
		
	}
	.twelve-text{
		position: absolute;
		left: 200px;
		top: 10px;
	}
	.twelve-big{
		font-size: 30px;
	}
	.twelve-small{
		font-size: 20px;
	}
	.title1{
		color: white;
		background-color: red;
		font-family: arial;
	}
	.title2{
		color: white;
		background-color: red;
		font-family: arial;
	}
	.findx-title a{
		color:red;
		text-decoration: underline;
	}
	 .prodcuted .findx-price{
		position: relative;
		height: 16px;
       line-height: 16px;
	}
	.prodcuted .findx-price span{
		position: absolute;
		left: 10px;
		font-size: 16px;
		line-height: 16px;
		color: red;
		height: 16px;
       
	}
	.prodcuted .findx-price button{
	position: absolute;
    width: 90px;
    font-size: 16px;
    text-align: center;
    line-height: 16px;
    height: 16px;
    background-color: white;
    right:0px;
    outline: none;
	border:  solid 1px lightblue;
	}
	.prodcuted .fangxingo{
	position: relative;
    height: 30px;
    line-height: 30px;
    background: #fbf0fd;
    margin-top: 5px;
   
		
	}
	.prodcuted .fangxingo span{
		position: absolute;
		left: 5px;
		float:  left;
		margin-right: 10px;
		width:  200px;
		font-size: 14px;
		line-height: 30px;
		height: 30px;
	}
	.prodcuted .fangxingo i.fa{
		width: 40px;
		height: 30px;
		line-height: 30px;
		display: block;
		text-align: center;
		position: absolute;
		top: 0px;
		font-size: 15px;
		right: 0;
	}
	/*product end*/
	/*comment start*/
	.comment{
		position: relative;
		margin-top: 30px;
		}
		.comment .comment-top{
			border-bottom: solid 1px lightgrey;
		}
	.comment .comment-title{
		position: absolute;
		left: 1px;
		font-size: 16px;
		line-height: 16px;
		text-align: left;
		height: 20px;
	}
	.comment  i.fa{
		position: right;
		right: 1px;
		height: 16px;
		line-height: 16px;
		display: block;
		text-align: right;
		font-size: 16px;
	}
	.comment .comment-text{
		margin-top: 2px;
	}
	.comment .comment-text textarea{
		width: 100%;
		
	}
	.comment button{
		width: 50px;
		height: 40px;
		text-align: center;
		margin-right: 15px;
		margin-bottom: 5px;
		color: white;
		border: none;
		outline: none;
		font-size: 16px;
		background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
	}
	/*comment end*/
	 
	/*recomment start*/
		img {
		border: 0 none;
		vertical-align: top;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	.tuijian{
		 text-align: left;
		 font-size: 16px;
		 font-family: arial;
		 border-top: solid 2px gainsboro;
		 padding-top: 2px;
		 padding-bottom: 2px;
	}
	.product {
		width: 50%;
		float: left;
		padding-right: 2px;
		padding-bottom: 4px;
		box-sizing: border-box;
		border: solid 2px lightgrey;
	}
	
	.product a {
		background-color: #FFFFFF;
		display: block;
		text-decoration: none;
	}
	
	.product:nth-child(2n) {
		padding-right: 0px;
		padding-left: 1px;
	}
	
	.product-image img {
		width: 100%;
	}
	
	.product-title {
		box-sizing: border-box;
		height: 31px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-word;
		color: #232326;
		margin-top: 5px;
		line-height: 16px;
		margin-bottom: 3px;
		padding: 0 4px;
		background-color: #fff;
	}
	
	.product-price {
		color: #f23030;
		display: inline-block;
		padding: 0 5px 0 4px;
		position: relative;
		top: 1px;
		height: 25px;
		line-height: 25px;
	}
	
	.similar-info {
		height: 26px;
	}
	/*recomment end*/
	/*detail start*/
	.container{
		width: 100%;
		
	}
	table{
		width: 100%;
		
	  
	}
	table th{
		text-align: left;
		border: solid 1px lightgrey;
	}
	table td {
		padding-left: 5px;
		border: solid 1px lightgrey;
	}
	table tr{
		padding-left: 5px;
		border: solid 1px lightgrey;
	}
	.container img{
		width: 100%;
	}
	h3{
		color: red;
		text-align: center;
		font-size: 20px;
		padding-top: 5px;
	}
	/*detail end*/
	/*<!--底部-->*/
	footer {
		width: 100%;
		height: 50px;
		background-color: red;
		position: fixed;
		bottom: 0px;
		left: 0px;
		color: #353535;
		text-align: center;
		background-color: #fff;
		box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-moz-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
	}
	footer a {
		color: #353535;
		text-decoration: none;
	}
	footer a.router-link-exact-active {
		color: #f23030;
	}
		
	footer ul {
		margin: 0;
		padding: 0;
		display: flex;
		display: -webkit-flex;
	}
	
	footer ul li {
		flex: 1;
		padding-top: 5px;
		list-style: none;
	}
	
	footer ul li span.fa {
		font-size: 20px;
	}
	
	footer ul li .title {
		display: block;
		font-size: 12px;
	}
	/*返回顶部*/
	 .goTop{
    position: fixed;
    right: 20px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    background:rgba(0,0,0,.65);
  }
  .goTop:hover{
    background:rgba(0,0,0,.85);
  }
  .goTopIcon{
    display: block;
    width: 50px;
    height: 50px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABaUlEQVRYR+2W7U3DQBBE31QAJaQDUkJSAXQA6QAqACqADggVBCoAKoAOCBWEDgatZEcHyeX8AYqQvD/P59t3s7tjiz2H9pyfAWBQ4H8rYPtQ0mefSeqlgO0HYCVp1hWiM4DtOXACHADzrhCdAGxfAZdAffM74ELSbVslWgPYPgMi4UxSqMC2taYgrQCSRNeSQoV1VCU5BaaSnn8dwPYYeAIeJYUKG1FBHFcQb00gGimQJH+RFI2XDdtx+6OmEEWAmHXgHfgAJqW5r/YHhCuInT6xE6A6LGSPfcXktSzVe1GCVQmiBBCHjICxpGWTmiYQ0TOhxKukae7dLEBiNHHzRg31M0nVOwGxyBnVVoCuI5WZjGjaRc4tNwBsnwM3qdG0kT4DsWFe9b5vAH0crQSZu9gawHYt1X3OaEpJSs+3lTYFiGZZ/lXyZDri+zGSNIm1FKD3z0VJgdQnakMrOmHTQ7vuGwAGBQYFvgCufKAhUkYyWwAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-position: center center;
  }

</style>