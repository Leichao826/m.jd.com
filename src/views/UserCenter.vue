<template>
	<div class="user-center">
		<h1>个人中心</h1>
		<bottom></bottom>
	</div>
</template>

<script>
	import Bottom from "@/components/Footer"
	export default {
		data(){
			return{}
		},
		methods:{},
		computed:{
			login() {
				return this.$store.state.user.login;
			}
		},
		created(){
			// 如果未登录则跳转到登录页面
			if(!this.login){
				this.$router.push({path: '/login',
					query: {
						from: '/user'
					}
				});
			}
		},
		name: 'user',
		components: {
			Bottom
		}
	}
</script>

<style>

</style>