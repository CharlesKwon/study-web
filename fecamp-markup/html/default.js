jQuery(function($){
	// 모바일 GNB 토글 버튼
 	var $gnbBtn = $(".gnb>button");

	$($gnbBtn).on("click", function()
	{	
		$(".gnb>ul").slideToggle(200);
		// $(this).next("ul").slideToggle(200);
		// $(this).next().slideToggle(200);

		// if($(".gnb>ul").is(":hidden") ) {
		if($($gnbBtn).text() === "메뉴 열기")
		{
			$($gnbBtn).text("메뉴 닫기");
		} 
		else 
		{
			$($gnbBtn).text("메뉴 열기");
		}
	});

	// 태블릿 + 데스크톱 GNB 메뉴
	$(".gnb>ul>li>a").on("mouseover focus", function() {
		// alert("wow");
		// $(this).parent("li").addClass("active").siblings("li"); 생략가능
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
});