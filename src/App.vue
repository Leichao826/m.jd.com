<!--
	
	整个项目，最最开始入口的组件
	
-->
<template>
	<div id="app">
		
		<!--<button @click="$router.go(-1)">上一页</button>
		<button @click="$router.go(1)">下一页</button>-->
		<router-view/>
	</div>
</template>

<style>
	body {
		margin: 0px;
		font-size: 14px;
		color: #333;
		font-family: "微软雅黑";
	}
	#app{
		width: 100%;
		max-width: 640px;
		margin: 0px auto;
	}
</style>