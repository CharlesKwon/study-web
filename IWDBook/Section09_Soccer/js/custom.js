$(document).ready(function(){
	
	//페이지 로딩 시 제일 상단으로 스크롤 이동
    $("body, html").stop().animate({"scrollTop": 0}, 1500, "swing");
    
	$(window).scroll(function(){
		
		var scroll = $(this).scrollTop();
        
        $("h1").text(scroll);	
        
        /*$("section > article").eq(0).css({"transform": "translateZ(" + ( 0 + scroll) + "px)"});
        $("section > article").eq(1).css({"transform": "translateZ(" + ( -5000 + scroll) + "px)"});
        $("section > article").eq(2).css({"transform": "translateZ(" + ( -10000 + scroll) + "px)"});
        $("section > article").eq(3).css({"transform": "translateZ(" + ( -15000 + scroll) + "px)"});
        $("section > article").eq(4).css({"transform": "translateZ(" + ( -20000 + scroll) + "px)"});*/
        
        for ( var i = 0; i < 5; i++ ) {
            
            $("section > article").eq(i).css({"transform": "translateZ(" + ((-5000 * i) + scroll) + "px)"});
        
            if( scroll >= (i * 5000) - 2500 && scroll < ((i + 1) * 5000) - 2500) {
                
                $(".scrollNavi li").removeClass();
                $(".scrollNavi li").eq(i).addClass("on");
                $("article").removeClass();
                $("article").eq(i).addClass("on");
                
            } 
        }
        
	});
	
	
	//스크롤 네비게이션 클릭 시 스크롤 이동
	$(".scrollNavi li").on("click",function(){
		
        var i = $(this).index();
        
        $("html, body").stop().animate({"scrollTop": 5000 * i}, 1500, "swing");
        
	});		
	
	//화면에서 마우스 무브 시 박스안의 콘텐츠 움직이기
	$("body").on("mousemove",function(event){
		
        var posX = event.pageX/100;
        var posY = event.pageY/150;		

        $(".obj11").css({"left":-270-posX , "bottom":-100-posY });
        $(".obj12").css({"right":-593+posX , "top":-85+posY });
        $(".obj13").css({"left":-100+posX , "bottom":20+posY });

        $(".obj21").css({"right":-710-posX , "bottom":-420-posY });
        $(".obj22").css({"right":-50+posX , "bottom":-100+posY });

        $(".obj31").css({"right":110-posX , "bottom":70-posY });
        $(".obj32").css({"left":100-posX , "bottom":-160+posY });

        $(".obj41").css({"left":350+posX , "bottom":-150-posY });
        $(".obj42").css({"right":167+posX , "top":-255-posY });
        $(".obj43").css({"right":-100+posX , "bottom":-120+posY });

        $(".obj51").css({"left":-100-posX , "bottom":-290-posY });
        $(".obj52").css({"right":30+posX , "top":170-posY });
        $(".obj53").css({"left":-30+posX , "bottom":0-posY });
        
	});
	
});















