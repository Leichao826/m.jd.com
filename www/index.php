<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 设置ajax访问请求可跨域
header('Access-Control-Allow-Origin:*');//允许所有来源访问
header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
// 设置编码格式问题
header("Content-type: text/html; charset=utf-8"); 

// 定义应用目录
define('APP_PATH', __DIR__ . '/app/');
// 定义扩展目录&插件目录
define('EXTEND_PATH', __DIR__ . '/extend/');
define('VENDOR_PATH', __DIR__ . '/vendor/');
define('RUNTIME_PATH', __DIR__ . '/runtime/');
// 加载框架引导文件
require __DIR__ . '/thinkphp/start.php';
