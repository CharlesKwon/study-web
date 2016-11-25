$(document).ready(function(){
    
    // 4000 위치로 스크롤 이동
	/*$("html, body").scrollTop(4000);*/
    
    // 아티클 갯수 저장
    var numAc = $("article").size();
    // 아티클 총 넓이
    var widSec = 200 * numAc;
    // 패널 확장 크기 더함
    var widTotal = widSec + 600;
    // 넓이 크기 대입
    $("section").width(widTotal);
    // 높이값 대입
    $("body").height(widSec);
    // 스크롤 끝으로 이동
    $("html, body").scrollTop(widSec);
        
	//브라우저를 스크롤 할때
	$(window).on("scroll",function(){
        
        // 스크롤한 거리를 저장
        var scroll = $(this).scrollTop();
        // 스크롤한 거리만큼 마이너스 갑으로 이동
        $("section").stop().animate({"left": -scroll}, 600);
        
	});
	
	
	//각 article의 h2를 클릭했을 때
	$("article h2").on("click",function(event){
        
        // 원래 기능 날림
        event.preventDefault();
        // 아티클의 순서를 저장
        var index = $(this).parent().index();
        // a의 href 값을 저장
        var src = $(this).children("a").attr("href");
        // 순서값에 아티클 하나 크기를 곱함
        var posAc = 200 * index;
        
        // 모든 아티클의 클래스 삭제
        $("article").removeClass('on');
        // 클릭한 아티클에 클래스 추가
        $(this).parent().addClass('on');
        // 이미지 속성을 지움
        $("srticle p img").attr({"src": ""});
        // 변수 src 값으로 변경
        $(this).siblings("p").children("img").attr({"src": src});
        // 해당 아티클 위치로 이동
        $("html, body").scrollTop(posAc);
        
	});
	
    
	//닫기 버튼 클릭시 
	$("span").on("click",function(){
        
        $("article").removeClass("on");
        
	});
		
    
	//#navi li를 클릭 했을때
	$("#navi li").on("click",function(){
        
        // 순서값 저장
        var i = $(this).index();
        // 5개씩 이동
        var posNavi = 1000 * i;
        // 클래스 제거
        $("#navi li, article").removeClass();
        // 클래스 추가
        $(this).addClass("on");
        // 저장한 값으로 대입
        $("html, body").scrollTop(posNavi);
        
	});
    	
});















