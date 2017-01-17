$(function($) {
    $(".gnb > h2+ul > li").on("click", function() {
		$(this).addClass("active").siblings().removeClass("active");
	});
});