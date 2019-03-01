<?php
namespace app\api\controller;

class Index{
    public function index(){
    	
    	$res = [['title'=>'商品','price'=>12.54],['title'=>'商品2','price'=>999.89],['title'=>'商品3','price'=>212.54]];
    	
    	return $res;
    }
    
    // 获取商品列表
    public function productList(){
    	$res = db('product')->select();
    	return $res;
    }
    
    // 获取轮播图数据
    public function getSwiper(){
    	return db('swiper')->select();
    }
    
    public function searchProduct(){
    	$str = input('post.keyword');
    	if($str=="")
    		return [];
    	// 查找和这个传入的keyword有关联的标题
    	return db('product')->where(['title'=>array('like',"%".$str."%")])->select();
    }
}
