$(document).ready(function(){  		

	// 마우스 오버시
    $("article").on("mouseenter",function(){
        
        var video = $(this).find("video").get(0);
        video.currentTime = 0;
        video.play();
        
        $(this).stop().animate({"width": "35%"}, 1000, function(){
            $(this).find("h3").stop().animate({"right": "10px"}, 400);
            $(this).find("p").stop().animate({"right": "10px"}, 800);
        });
        $(this).find("video").stop().animate({"opacity": "0.9"}, 1200);
    });
    
	// 마우스 아웃시
    $("article").on("mouseleave",function(){
        
        var video = $(this).find("video").get(0);
        video.pause();
        
        $(this).stop().animate({"width": "12%"}, 700);
        $(this).find("video").stop().animate({"opacity": "0"}, 2000);
        $(this).find("h3").stop().animate({"right": "-310px"}, 200);
        $(this).find("p").stop().animate({"right": "-310px"}, 500);
    });

});















