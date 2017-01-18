function head(){
	$("#head").load("head.html",function(data,textStatus){
			if(textStatus=="success"){
				topPage();
			}
	});
	$("#footer").load("footer.html");
}





$(function(){
	head();
})