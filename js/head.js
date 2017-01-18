function topPage(){
		$(".Vxin").hover(function(){
			$("#sao").css({"display":"block"})
		},function(){
			$("#sao").css({"display":"none"})
		})
		var Li=$(".li");
		Li.mouseover(function (e) {
			e=e||window.event;
			e.preventDefault();
			$(this).find("ol").stop(true).slideDown();
		})
		Li.mouseout(function(e){
			e=e||window.event;
			e.preventDefault();
			$(this).find("ol").stop(true,true).slideUp();
		})
		$(".shoppingcar").hover(function(){
			$("#shoppingCar").removeClass("active")
			$("#shoppingCar").addClass("hover");
			$(".carTab").css("display","block")
		},function(){
			$("#shoppingCar").addClass("active");
			$("#shoppingCar").removeClass("hover");
			$(".carTab").css("display","none")
		})
		
		
}

