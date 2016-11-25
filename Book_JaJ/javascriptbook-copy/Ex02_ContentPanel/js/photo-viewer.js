var cache = {}, // 캐시 객체
    $requestImage, // 가장 최근에 요청된 이미지
    $currentImage; // 현재 보여지고 있는 이미지

var $frame = $('#photo-viewer'), // 이미지 요소
    $thumbs = $('.thumb'); // 썸네일 이미지 요소

// 2개 이미지 크로스페이드 효과
function crossfade($img) { 
    
    // 이미 있으면 애니메이션 정지 후 페이드 아웃
    if ($currentImage) { $currentImage.stop().fadeOut('slow'); }

    $img.css({ 
        // 중앙에 위치 / position: absolute;
        marginLeft: -$img.width() / 2, 
        marginTop: -$img.height() / 2 
    });
    // 애니메이션 정지 후 천천히 페이드 인
    $img.stop().fadeTo('slow', 1); 
    // 새 이미지가 현재 이미지가 된다
    $currentImage = $img; 
}

// 썸네일 클릭 이벤트 핸들러
$(document).on('click', '.thumb', function(e) { 
    e.preventDefault(); // 기본 동작을 중단한다
    
    var $img, // $img 지역 변수를 생성한다
        src = this.href; // 이미지 경로를 저장
    // 가장 최근에 요청한 이미지 경로를 저장
    $requestImage = src; 

    $thumbs.removeClass('active'); // 모든 썸네일에 active 제거
    $(this).addClass('active'); // 클릭된 썸네일에 active 추가

    if (cache.hasOwnProperty(src)) { // 이미지가 캐시에 있으면
        
        // isLoading 값이 false 이면
        if (cache[src].isLoading === false) { 
            // crossfade() 함수를 호출
            crossfade(cache[src].$img); 
        }
    } 
    else { // 이미지가 캐시에 없으면 새로운 <img/> 요소를 생성
        
        $img = $('<img/>'); // 빈 <img/> 요소를 저장
        // 이 이미지를 캐시에 저장
        cache[src] = { 
            $img: $img, // 이미지 경로를 저장한다
            isLoading: true // isLoading 속성을 true로 지정
        };

        // 이미지가 로드되면
        $img.on('load', function() { 
            // 일단 숨김
            $img.hide(); 
            // is-loading 클래스를 제거한 후 
            $frame.removeClass('is-loading')
                .append($img); // 새 이미지를 추가
            // 캐시 내의 isLoading 속성을 false로 지정
            cache[src].isLoading = false; 
            
            // 가장 최근에 요청한 이미지가 로드된 상황이면
            if ($requestImage === src) {
                // crossfade() 함수를 호출
                crossfade($img); 
            } // 비동기 로딩 이슈를 해결
        });

        $frame.addClass('is-loading'); // is-loading 클래스를 프레임에 추가

        $img.attr({ // <img> 요소의 특성 값을 설정
            'src': src, // 미리 준비한 src 값을 설정
            'alt': this.title || '' // 타이틀이 지정되어 있으면 링크에 추가한다
        });
    }
});

// 첫 번째 썸네일을 선택한 것으로 시작
$('.thumb').eq(0).click(); 
































