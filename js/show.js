// Copyright 2012
// Author: Yang XinXin

$(document).ready(function(){
	$("#show1").click(function(){
		$("#content1").slideToggle("fast",function(){});
	});
	$("#show2").click(function(){
		$("#content2").slideToggle("normal",function(){});
	});
}); 