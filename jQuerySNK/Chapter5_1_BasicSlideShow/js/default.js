$(function(){
    
    var duration = 1250;
    
    $('.slideshow').each(function() {
        
        //변수 선언
        var $slides = $(this).find('img'),
            $slidesCount = $slides.length,
            $currentIndex = 0;
            
        //첫 이미지 보이기
        $slides.eq($currentIndex).fadeIn();
        
        //함수 반복 실행
        setInterval(showNextSlide, duration);
        
        //함수 정의
        function showNextSlide() {
            
            //다음 이미지, 마지막이라면 첫 번째로 변경
            var $nextIndex = ($currentIndex + 1) % $slidesCount;
            
            //현재 보이고 있는 이미지 사라지기
            $slides.eq($currentIndex).fadeOut();
            
            //다음 이미지 보이기
            $slides.eq($nextIndex).fadeIn();
            
            //현재 인덱스 저장
            $currentIndex = $nextIndex; 
        } 
    }); 
});





















