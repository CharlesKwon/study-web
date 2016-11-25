$(function(){
    
    var duration = 1250;
    
    $('.page-main').each(function() {
        
        // 변수 선언
        var $container = $(this),
            $slideGroup = $container.find('.slideshow'),
            $slides = $slideGroup.find('.slide'),
            $nav = $container.find('.navigation'),
            $indicator = $container.find('.indicator'),
            
            slideCount = $slides.length,
            indicatorHTML = '',
            currentIndex = 0,
            duration = 500,
            easing = 'easeInOutExpo',
            interval = 3500,
            timer;
            
        // 인디케이터 동적 생성
        $slides.each(function(i) {
            
            $(this).css({
                left: 100 * i + '%'
            });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });
        $indicator.html(indicatorHTML);
        
        // 슬라이드
        function goToSlide(index) {
        
            $slideGroup.animate({
                left: - 100 * index + '%'
            }, duration, easing);
                
            currentIndex = index;
                
            updateNav();
        }
        
        // 네비게이션, 인디게이터 상태 업데이트 
        function updateNav() {
            
            var $navPrev = $nav.find('.prev'),
                $navNext = $nav.find('.next');
            
            if (currentIndex === 0) {
                $navPrev.addClass('disabled');
            } 
            else {
                $navPrev.removeClass('disabled');
            }
            
            if (currentIndex === slideCount - 1) {
                $navNext.addClass('disabled');
            } 
            else {
                $navNext.removeClass('disabled');
            }
            
            $indicator.find('a').removeClass('active')
                .eq(currentIndex).addClass('active');
        }

        // 타이머 함수
        function startTimer() {
            
            timer = setInterval(function() {
                
                var nextIndex = (currentIndex + 1 ) % slideCount; 
                goToSlide(nextIndex);
                
            }, interval); 
        } 
        function stopTimer() {
            
            clearInterval(timer);
            
        }
        
        // 네비게이션 이벤트
        $nav.on('click', 'a', function(event){
            
            event.preventDefault();
            
            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } 
            else {
                goToSlide(currentIndex + 1);
            }
        });
        
        // 인디케이터 이벤트
        $indicator.on('click', 'a', function(event) {
           
            event.preventDefault();
            
            if (!$(this).hasClass('active')) {
                goToSlide($(this).index());
            }
        });
        
        // 다수 이벤트 등록
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });
        
        // 시작
        goToSlide(currentIndex); 
        startTimer();
        
    }); 
});





















