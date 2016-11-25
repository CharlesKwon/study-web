$(function () {

    // 시작
    initScene1();

    function initScene1 () {
        
        // 변수 선언
        var $container = $('#scene-1 .image-sequence'),
            $images = $container.find('img'),

            frameLength = $images.length, // 전체 이미지 갯수
            currentFrame = 0, // 현재 이미지 인데스
            counter = 0, // 애니메이션 진행 사항 저장 변수
            velocity = 0,
            timer = null, // 실행 시점 제어
            imageAspectRatio = 864 / 486; // 이미지 배율


        $container.on('mousewheel', function (event, delta) {

            // 마우스 휠의 방향과 양에 따라 속도 제어
            if (delta < 0) {
                velocity += 1.5;
            } else if (delta > 0) {
                velocity -= 1.5;
            }

            startAnimation();
        });

        // 애니메이션 시작
        function startAnimation () {
            // 실행 중인 애니메이션이 없으면 실행
            if (!timer) {
                // 1/30 초마다 업데이트
                timer = setInterval(animateSequence, 1000 / 30);
            }
        }
        // 애니메이션 종료
        function stopAnimation() {
            clearInterval(timer);
            timer = null;
        }

        function animateSequence () {

            var nextFrame;

            // 마찰 계수
            velocity *= 0.9;

            if ( - 0.00001 < velocity && velocity < 0.00001 ) {
                stopAnimation();
            } else {
                // 속도를 더할 때
                // 카운터를 총 이미지 수 안에서 제한
                counter = (counter + velocity) % frameLength;
            }

            // 정수화
            nextFrame = Math.floor(counter);
            if (currentFrame !== nextFrame) {
                $images.eq(nextFrame).show();
                $images.eq(currentFrame).hide();
                currentFrame = nextFrame;
            }
        }

        // 컨테이너 종횡비를 유지하면서 표시 영역 가득 배치
        // 윈도우가 리사이즈 될 때마다 재조정된다
        $(window).on('resize', function () {

            // 윈도우의 폭과 높이를 취득
            var $window = $(this),
                windowWidth = $window.width(),
                windowHeight = $window.height();

            // 사진과 창의 가로 세로 비율을 비교하고
            // 컨테이너의 크기와 위치를 조정
            if (imageAspectRatio > windowWidth / windowHeight) {
                $container.css({
                    width: windowHeight * imageAspectRatio,
                    height: '100%',
                    top: 0,
                    left: (windowWidth - windowHeight * imageAspectRatio) / 2
                });
            } else {
                $container.css({
                    width: '100%',
                    height: windowWidth / imageAspectRatio,
                    top: (windowHeight - windowWidth / imageAspectRatio) / 2,
                    left: 0
                });
            }
        });

        // 창 크기 이벤트를 발생시킨 최초의 배치를 조정
        $(window).trigger('resize');
    }
});











