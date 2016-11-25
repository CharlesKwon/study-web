$('.slider').each(function() { // 모든 슬라이더를 찾는다
    // 슬라이더 요소 저장
    var $this = $(this), 
        $group = $this.find('.slide-group'),
        $slides = $this.find('.slide'); 
    // 탐색 버튼 배열
    var buttonArray = [],
        currentIndex = 0,
        timeout; 

    // 새 슬라이드로 이동
    function move(newIndex) { 
        // 변수 선언
        var animateLeft, // 움직일 크기
            slideLeft; // 배치 위치

        // 다시 호출
        advance(); 
        // 애니메이션 중에는 아무것도 하지 않음
        if ($group.is(':animated') || currentIndex === newIndex) return;

        // 현재 아이템은 클래스 삭제, 새 아이템음 클래스 추가
        buttonArray[currentIndex].removeClass('active'); 
        buttonArray[newIndex].addClass('active'); 

        // 배치를 위한 가로축 값, 이동하기 위한 방향 역활도 겸함
        if (newIndex > currentIndex) { // 새거는 오른쪽, 이동은 왼쪽
            slideLeft = '100%'; 
            animateLeft = '-100%'; 
        } else { // 기존거는 왼쪽 이동은 오른쪽
            slideLeft = '-100%'; 
            animateLeft = '100%'; 
        }
        // 새 슬라이드 배치
        $slides.eq(newIndex).css({
            left: slideLeft, // -,+에 따라 방향이 정해짐
            display: 'block'
        });
        
        // 에니매이션 정의 
        // 배치는 하위 자식 슬라이드가 하고, 
        // 실제 이동은 상위 슬라이드 그룹이 한다 
        $group.animate({
            left: animateLeft
        }, function() { // 이동 에니매이션이 끝나면
            $slides.eq(currentIndex).css({ display: 'none' }); //기존 슬라이드 숨김
            $slides.eq(newIndex).css({ left: 0 }); // 새 슬라이드 위치 재지정
            $group.css({ left: 0 }); // 슬라이드 그룹 위치 지정
            // 새 슬라이드가 기존 슬라이드가 된다
            currentIndex = newIndex; 
        });
    }
    
    // 타이머 설정
    function advance() { 
        // 이전 타이머 제거
        clearTimeout(timeout); 
        // 새 타이머 설정
        timeout = setTimeout(function() { 
            // 전체 슬라이드 수를 넘지 못함
            if (currentIndex < ($slides.length - 1)) { 
                // 다음 슬라이드로 이동
                move(currentIndex + 1); 
            } else { 
                // 초기화
                move(0); 
            }
        }, 4000); // 시간 간격
    }
    
    // 익명 함수
    // 슬라이드 수 만큼 
    $.each($slides, function(index) {
        // 버튼 요소 생성
        var $button = $('<button type="button" class="slide-btn">&bull;</button>');
        if (index === currentIndex) { 
            // 같으면 활성화
            $button.addClass('active'); 
        }
        $button.on('click', function() {
            // 즉시 이동
            move(index);
        }).appendTo('.slide-buttons'); // 부모 요소에 추가
        // 버튼 배열에 추가
        buttonArray.push($button); 
    });

    // 초기화 완료 후 타이머 시작
    advance(); 
});