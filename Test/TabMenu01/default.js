$(function($) {
//    클릭할 때
//    $(".gnb > h2+ul > li").on("click", function() {
//		$(this).addClass("active").siblings().removeClass("active");
//	});
    
//    오버할 때
    $(".gnb > h2+ul > li").hover(function() {
		$(this).addClass("active"),
        $(this).siblings().removeClass("active");
    });
});