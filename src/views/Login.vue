<template>
<div class="login-page">
		<div class="top-bar">
		<div class="go-back">
			<a href="#" @click.prevent="goBack"><i class="fa fa-angle-left"></i></a>
		</div>
		<div class="slot">
			<slot>京东登录</slot>
		</div>
	 </div>
	<div class="login-in">
	 	<input class="user" id="username"  type="text" v-model="name" placeholder="用户名/邮箱/已验证手机" >
	 	<div  class="pwd" v-model="pd">
	 	<input  class="password" type="password" name="" id="password" v-model="pwd" placeholder="请输入密码" />
	 	<i  class="fa fa-angle-down" v-model="icon"></i></div>
	 	<button class="forget" ><span class="shu">|</span>&nbsp;&nbsp; 忘记密码</button>
	 	<button class="go-in"      :class="{'disabled':loginEnable}" @click="login">登录</button>
	 	
	 	<span class="message">短信验证码登录</span><span class="phone">手机快速登录</span>
	 </div>
	  <div class="line">
	  	<h4>其他登录方式</h4>
	  	<i class="fa fa-qq"></i>
	  	<span>QQ</span>
	  	<p>登录即代表您已同意<a href="#">京东隐私政策</a></p>
	  </div>
		
</div>
		
	
</template>

<script>
	import axios from 'axios'
	import qs from 'qs'
	export default{
			data() {
			return {
				loginUrl:"http://api.niyinlong.com/index.php/api/index/login",
				name:'',
				pwd:'',
				
			};
		},
		methods: {
	     
	   
			
			login() {
				// 提交数据:name,pwd
				// 地址：loginUrl
				// 方式：post

				if(this.loginEnable) {
					this.loading = true;
					axios.post(this.loginUrl, qs.stringify({
						name: this.name,
						pwd: this.pwd
					})).then(res => {
						alert(res.data.msg);
						if(res.data.code>0){
							
							this.$store.commit('setLoginState',true);
							// 控制登录后该去的地方
							switch(this.from){
								case '/cart':this.$router.push('/cart');break;
								case '/user':this.$router.push('/user');break;
								default:this.$router.push('/');break;
							}
						}
						this.loading = false;
					}).catch(err => {
						this.loading = false;
					});

				}

			},
			goBack() {
				window.history.length>1?this.$router.go(-1):this.$router.push("/");
			}
		},
		computed:{
			loginEnable(){
				if(this.name.length>4&&this.pwd.length>4){
					return true;
				}else{
					return false;
				}
			}
		},
		watch:{},
		created() {
			// 获取来的方向
			this.from = this.$route.query.from;
			
		},
		
		
	}
</script>

<style>
	.login-page{
		position: relative;
		width: 100%;
	}
	.top-bar {
		width: 100%;
		background-color: #fff;
		color: #252525;
		height: 44px;
		text-align: center;
		display: flex;
		border-bottom: solid 1px #e5e5e5;
	}
	
	.top-bar a {
		color: #252525;
	}
	
	.top-bar .slot {
		line-height: 44px;
		flex: 1;
	}
	
	.top-bar .go-back{
		width: 40px;
		height: 44px;
		font-size: 22px;
		line-height: 44px;
		position: relative;
	}
	.login-in{
		position: relative;
		top: 40px;
		width: 100%;
	}
	.user{
		width:100%;
		height: 40px;
		border: none;
		margin-left: 25px;
		margin-right: 25px;
		font-size: 18px;
		outline: none;
	}
	
	.password{
		width:100%;
		height: 40px;
		border: none;
		margin-left: 25px;
		margin-right: 25px;
		font-size: 18px;
		outline: none;
		margin-top: 10px;
	}
	 .pwd .fa{
	 	position: absolute;
		 top: 60px;
		right: 1px;
		color: red;
		padding: 5px;
		width: 100px;
	 }
	.forget{
		position: absolute;
		top: 50px;
		right: 10px;
		font-size: 14px;
	    outline: none;
	    border: none;
	    height: 40px;
	    background-color: white;
	    text-align: center;
	    
	}
	.shu{
		color: gainsboro;
		height: 40px;
	}
	.go-in{
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
		border-radius: 20px;
		height: 40px;
		margin-top: 20px;
		color: white;
	   background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
	   text-align: center;
	   font-size: 20px;
	   outline: none;
	   border: none;
	}
	.disabled{
		background-image: linear-gradient(90deg,#f10000,#ff2000 73%,#ff4f18);
     }   
     .message{
     	font-size: 14px;
     	color: gainsboro;
     	float: left;
     	margin-left: 25px;
     	margin-top: 10px;
     } 
     .phone{
     	font-size: 14px;
     	color: gainsboro;
     	float: right;
     	margin-right: 25px;
     	margin-top: 10px;
     }
     .line{
     	background-color: gainsboro;
     	height: 1px;
     	position: relative;
     	margin-top: 150px;
     }
     .line h4{
     	position: absolute;
     	top: -10px;
     	left: 45%;
     	font-size: 14px;
     	z-index: 1000;
     	color: grey;
     }
     .line .fa{
     	position: absolute;
     	left: 50%;
     	top: 37px;
     	color: lightskyblue;
     	width: 150px;
     	height: 50px;
     	
     }
     .line span{
     	position: absolute;
     	left: 53.5%;
     	top: 35px;
     	font-size: 14px;
     	text-align: center;
     	color: darkgrey;
     	display: block;
     }
     .line p{
     	position: absolute;
     	
     	top: 100px;
     	font-size: 14px;
     	line-height: 14px;
     	height: 30px;
     	color: darkgrey;
     	width: 100%;
     	text-align: center;
     }
     .line a{
     	text-decoration: none;
     }
	
	

	

</style>