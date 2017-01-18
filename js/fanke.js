function banner(){
		$("#box > div").each(function(i){
			$(this).find("a").html("<img />")
			$(this).find("img")[0].src="images/"+(i+1)+".jpg"
		})
		var index = 0;
		var timer=0;
		var _img=$("#box > div");
		var _span=$("#points > span").get();
		timer = setInterval(fade,3000);
		function fade(){
			index++;
			if(index==_img.length){
				index=0;
			}
			animate(index);
		}
		function animate(index){
			_img.animate({"opacity":0,"zIndex":0})
			$("#points > span").css({"background":"#dddddd"})
			_span[index].style.backgroundColor="#a10000";
			_img.eq(index).stop(true,true).animate({"opacity":1,"zIndex":10},1000);
		}
			for(var i = 0;i <_span.length;i++){
				_span[i].index = i;
				_span[i].onmouseover = function(){
					index=this.index;
					animate(index);
				}
			}
			$("#box").mouseover(function(){
				clearInterval(timer);
				$("#prev")[0].style.display="block";
				$("#next")[0].style.display="block";
			})
			$("#box").mouseout(function(){
				timer=setInterval(fade,3000);
			})
			$("#prev").click(function(){
				index--;
				if(index==-1){
					index=_img.get().length-1;
				}
				animate(index)
			})

			$("#next").click(fade);
}

function setPicture(){
	$(".Box").find("a").each(function(i){
			$(this).html("<img src=\"\"/>");
	})
	ajax();
}
function ajax(){
	$.post("json/picture.json",function(data){
		$(".Box").find("img").each(function(i){
			$(this).attr("src","img/xp"+data["picture1"][i]+".jpg")
		})
		$("#Box2").find("img").each(function(i){
			$(this).attr("src","img/xp"+data["picture2"][i]+".jpg")
		})
		$("#Box3").find("img").each(function(i){
			$(this).attr("src","img/hgg"+data["picture3"][i]+".jpg")
		})
		$("#Box4").find("img").each(function(i){
			$(this).attr("src","img/hgg"+data["picture4"][i]+".jpg")
		})
		$("#Box5").find("img").each(function(i){
			$(this).attr("src","img/"+data["picture5"][i]+".jpg")
		})
		$("#Box6").find("img").each(function(i){
			$(this).attr("src","img/"+data["picture6"][i]+".jpg")
		})
		$(".box").find("img").each(function(i){
			$(this).attr("src","img/"+data["picture7"][i]+".jpg")
		})
	})
}

function head(){
	$("#head").load("head.html",function(data,textStatus){
			if(textStatus=="success"){
				topPage();
			}
	});
	$("#footer").load("footer.html");
}





$(function(){
	banner();
	setPicture();
	head();
})