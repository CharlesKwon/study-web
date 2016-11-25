$(document).ready(function(){

    function saveWindowHeight() {
        
        // 변수 ht에 브라우저의 높이값을 저장
        var ht = $(window).height();
        // 브라우저의 높이 값을 section의 높이 값으로 지정
        $("section").height(ht);

    }
    saveWindowHeight();

    // 브라우저가 리사이즈될 때마다 브라우저와 section의 높이 값을 갱신
    $(window).on("resize", function(){
        
        saveWindowHeight()
        
    });
    
    $("section").on("mousemove", function(event){
        
        // 변수에 마우스 커서의 위치를 저장
        var posX = event.pageX;
        var posY = event.pageY;
        
        $(".p11").css({"right": 20 - (posX / 30), "bottom": 20 - (posY / 30)});
        $(".p12").css({"right": 130 + (posX / 20), "bottom": -40 + (posY / 20)});
        $(".p13").css({"right": 60 + (posX / 20), "top": 180 + (posY / 20)});
        
        $(".p21").css({"right": -180 - (posX / 30), "bottom": -480 - (posY / 30)});
        $(".p21").css({"right": 130 + (posX / 50), "bottom": -40 - (posY / 50)});
        
        $(".p31").css({"right": 280 - (posX / 30), "bottom": 30 - (posY / 30)});
        $(".p32").css({"right": 110 + (posX / 20), "bottom": -270 + (posY / 20)});
        $(".p33").css({"right": -70 + (posX / 20), "bottom": -130 + (posY / 20)});

        $(".p41").css({"right": -20 - (posX / 30), "bottom": -120 - (posY / 30)});
        $(".p41").css({"right": 0 + (posX / 20), "bottom": -180 + (posY / 20)});
        
    });
    
    $("#menu li").on("click", function(event){
        
        // 디폴트 기능인 링크 기능을 막는다
        event.preventDefault();
        // 브라우저의 높이 값을 저장
        var ht = $(window).height();
        // li의 순서를 저장
        var i = $(this).index();
        // 스크롤 위치 값을 저장
        var nowTop = i * ht;
        // 스크롤 위치 값으로 문서를 이동
        $("html, body").stop().animate({"scrollTop": nowTop}, 1400);
        
    });
    
    $(window).on("scroll", function(){
        
        var ht = $(window).height();
        
        var scroll = $(window).scrollTop();
        
        if(scroll >= ht * 0 && scroll < ht * 1) {
            $("#menu li").removeClass();    
            $("#menu li").eq(0).addClass("on");    
        }
        if(scroll >= ht * 1 && scroll < ht * 2) {
            $("#menu li").removeClass();    
            $("#menu li").eq(1).addClass("on");    
        }
        if(scroll >= ht * 2 && scroll < ht * 3) {
            $("#menu li").removeClass();    
            $("#menu li").eq(2).addClass("on");    
        }
        if(scroll >= ht * 3 && scroll < ht * 4) {
            $("#menu li").removeClass();    
            $("#menu li").eq(3).addClass("on");    
        }
        
    });
    
    $("section").on("mousewheel", function(){
        
        if(delta > 0) {
            
            var prev = $(this).prev().offset().top;

            $("html, body").stop().animate({"scrollTop": prev}, 1400, "easeOutBounce");
        }
        else if(delta < 0)  {
            
            var next = $(this).next().offset().top;

            $("html, body").stop().animate({"scrollTop": next}, 1400, "easeOutBounce");
        }
        
    });
    
});




























