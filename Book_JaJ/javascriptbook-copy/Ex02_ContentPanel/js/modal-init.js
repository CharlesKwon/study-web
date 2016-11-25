// modal 객체를 이용하여 모달 창을 생성하고 공유 옵션을 표시하는 스크립트
(function() {
    
    // 로드 완료 후 대입 후 바로 제거, 메모리에는 남아 있다.
    var $content = $('#share-options').detach(); 

    // 모달 보기 버튼 click 이벤트 핸들러
    $('#showModal').on('click', function() { 
        modal.open({
            // 미리 대입해둔 콘텐츠를 추가
            content: $content,
            width: 340,
            height: 300
        });
    });
}());