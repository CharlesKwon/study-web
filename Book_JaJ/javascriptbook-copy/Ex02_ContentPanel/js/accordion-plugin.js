// $기호를 변수 이름처럼 사용
(function($) { 
    // jQuery 셀렉션을 리턴한다
    $.fn.accordion = function(speed) { 
        
        this.on('click', '.accordion-control', function(event) {
            event.preventDefault();
            
            $(this).next('.accordion-panel')
                .not(':animated')
                .slideToggle(speed);
        });
        // jQuery 셀렉션을 리턴, 함수 내의 값을 함수 바깥으로 보냄
        return this; 
    };
}(jQuery)); // 네임스페이스 보호, 범뮈 생성, jQUery 셀랙션 객체를 함수에 전달 

/*$('.accordion').on('click', '.accordion-control', function(event) { // 클릭 이벤트
    event.preventDefault(); 
    
    $(this).next('.accordion-panel')
        .not(':animated') 
        .slideToggle(); 
});*/