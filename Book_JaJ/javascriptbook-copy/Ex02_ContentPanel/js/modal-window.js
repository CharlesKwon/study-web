// modal 객체를 생성하는 스크립트
var modal = (function() { 

    var $window = $(window), 
        // 모달창 마크업 
        $modalBG = $('<div class="modalBG"/>'), 
        $modal = $('<div class="modal"/>'), 
        $modalContent= $('<div class="modal-content"/>'),
        $closeModal = $('<button role="button" class="close-modal">닫기</button>');

    $modal.append($modalContent, $closeModal); // 모달 창에 콘텐츠와 닫기 버튼을 추가

    // 닫기 버튼 이벤트 핸들러
    $closeModal.on('click', function(e) {
        e.preventDefault();
        modal.close(); 
    });

    return { 
        center: function() { 
            // 거리 계산
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2,
                top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            
            // 모달 위치
            $modal.css({ 
                left: left + $window.scrollLeft(),
                top: top + $window.scrollTop()
            });
        },
        open: function(settings) { 
            // 생성 단계에서 
            $modalContent.empty()
                .append(settings.content); 
            
            // 모달 BG를 body에 추가
            $modalBG.appendTo('body');
            // 모달을 body에 추가
            $modal.appendTo('body'); 
            // 모달 콘텐트 크기 지정
            $modalContent.css({ 
                // 값을 지정하지 않으면 auto
                width: settings.width || 'auto', 
                height: settings.height || 'auto' 
            });

            modal.center(); 
            // 이벤트 핸들러 추가
            $(window).on('resize', modal.center); 
        },
        close: function() { 
            // 모달BG 제거
            $modalBG.detach();
            // 콘텐츠, 모달 제거
            $modalContent.empty(); 
            $modal.detach(); 
            // 이벤트 핸들러 제거
            $(window).off('resize', modal.center); 
        }
    };
}());