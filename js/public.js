// Copyright 2012
// Author: Yang XinXin

var timeoutId;
$(function() {
	$(document).bind("contextmenu", function(e) {
		return false;
	});
	
	$("#top").load("./top.html");
	$("#scroll").load("./scroll.html");
	$("#notice").load("./notice.html");
	$("#product").load("./product.html");
	$("#bottom").load("./bottom.html");
	
	$("#tab_container li").each(function(index) {
		// 有了index的值之后，就可以找到当前标签对应的内容区域
		$(this).mouseover(function() {
			var liNode = $(this);
			timeoutId = setTimeout(function() {
				// 将当前显示的区域隐藏
				$("div.contentin").removeClass("contentin").addClass("content");
				// 显示鼠标移上的区域
				$("div.content").eq(index).removeClass("content").addClass("contentin");
				$("#tab_container li.tabin").removeClass("tabin");
				liNode.addClass("tabin");
			}, 300);
		}).mouseout(function() {
			clearTimeout(timeoutId);
		});
	});
	$("#tab_container1 li").each(function(index) {
		// 有了index的值之后，就可以找到当前标签对应的内容区域
		$(this).mouseover(function() {
			var liNode = $(this);
			timeoutId = setTimeout(function() {
				// 将当前显示的区域隐藏
				$("div.contentin").removeClass("contentin").addClass("content");
				// 显示鼠标移上的区域
				$("div.content").eq(index).removeClass("content").addClass("contentin");
				$("#tab_container1 li.tabin").removeClass("tabin");
				liNode.addClass("tabin");
			}, 300);
		}).mouseout(function() {
			clearTimeout(timeoutId);
		});
	});
});
