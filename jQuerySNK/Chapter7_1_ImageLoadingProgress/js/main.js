$(function () {
    
    // 진행률 표시 함수를 호출
    imagesProgress();
    
    // 진행률 표시 함수를 호출
    function imagesProgress () {
        
        /*전체, 바, 텍스트*/
        var $container = $('#progress'),
            $progressBar = $container.find('.progress-bar'),
            $progressText = $container.find('.progress-text');

        /*총 이미지 수, 로딩이 완료된 이미지*/
        var imgLoad = imagesLoaded('body'),
            imgTotal = imgLoad.images.length,

            /*로딩 완료된 이미지 수, 현재 진행률*/
            imgLoaded = 0,
            current = 0,

            /*1초에 60번 확인*/
            progressTimer = setInterval(updateProgress, 1000 / 60);

        imgLoad.on('progress', function () {
            imgLoaded++;

        });

        /*업데이트*/
        function updateProgress () 
        {    
            // 백분율로 변환
            var target = (imgLoaded / imgTotal) * 100;

            // 이징 효과, 살짝 여유를 주기위함
            current += (target - current) * 0.1;

            $progressBar.css({ width: current + '%' });
            // 소수점 이하 버림
            $progressText.text(Math.floor(current) + '%');

            // 종료
            if (current >= 100) {
                // 업데이트 중단
                clearInterval(progressTimer);

                // 스타일 변경
                $container.addClass('progress-complete');
                
                // 하나의 제이쿼리 객체로 만듬, 동시에 애니메이션 시키기 위함
                $progressBar.add($progressText)
                    // 0.5초 대기
                    .delay(500)
                    // 페이드아웃
                    .animate({ 
                        opacity: 0 
                    }, 250, function() {
                        // 슬라이드아웃
                        $container.animate({
                            top: '-100%' 
                        }, 1000, 'easeInOutQuint');
                    });
            }
            
            // 100으로 간주, 강제 종료
            if (current > 99.9) {
                current = 100;
            }
        }  
    }

    
    
    
    
    
    
    
    
    
    

});
