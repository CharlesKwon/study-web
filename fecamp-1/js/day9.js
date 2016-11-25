// 이벤트 함수 사용
jQuery(function($){
    $('#box').on('mousedown', function(event) {
//        $(this).text(event.which).css('background-color', 'red');
    }); 
    // 마우스 관련 이벤트 : click, mousedown, mouseup, mousemove
    // 키보드 관련 이벤트 : click, keypress, keydown, keyup (click의 주의)
    // 입력 폼 관련 이벤트 : focus, blur, change, scroll
    $('a').on('click', function(event){
        event.preventDefault(); // 기본동작은 취소한다.
        console.log('클릭!'); // 이 줄은 동작함
    });
    
    // 문제 : 키보드를 누를 때 화살표 방향에 따라 5px씩 이동하도록 코드를 작성하라.
    $(document).on('keydown', function(event) {
        console.log(event.which);
    });
    $(document).on('keydown.move click mousemove', function(event) {
        var $box = $('#box');
                
        console.log(event.which);
        switch(event.which)
        {
            case 27: // ESC
//                $(document).off('keydown', arguments.callee);
                $(document).off('keydown.move');
                break;
                
            case 37: // 좌
                $box.css('left', '-=5px');
                break;
            case 38: // 위
                $box.css('top', '-=5px'); 
                break;
            case 39: // 우
                $box.css('left', '+=5px');
                break;
            case 40: // 아래
                $box.css('top', '+=5px');
                break;
            default:
                break;
        }
    });
    
    // 드래그앤드롭 구현
    // 1. #box에서 마우스 버튼을 누를 때
    // - 초기 위치값을 가지고 온다.
    // - 현재 css left, top의 값을 저장해둔다.
    // - document에 mousemove 이벤트를 건다.
    // 2. 버튼을 누른 채 마우스가 움직이면
    // - 현재 위치값에서 초기 위치값을 뺴면 차이를 알 수 있다.
    // - 1에서 구한 css left, top 값에 차이 만큼을 더한다.
    // 3. 마우스 버튼을 떼면 
    // - document에 걸었던 mousemove, mouseup 이벤트를 지운다.
    
    $('.dragable').on('mousedown', function(event){
        event.preventDefault(); 
        // 현재 커서 시작
        var startX = event.pageX, 
            startY = event.pageY;
        
        // 현재 #box의 css left, top의 값은?
        var $this = $(this);
        var startLeft = parseInt($this.css('left')); 
        var startTop = parseInt($this.css('top'));
        
//        if (isNaN(startLeft)) startLeft = 0;
//        if (isNaN(startTop)) startTop = 0;
        
        // position이 absolute, relative, fixed가 아니면 relative 설정
//        var position = $this.css('position');
//        if(position != 'absolute' && position != 'relative' && position != 'fixed' ) {
//            $this.css('position', 'relative');
//        }
        
        $(document).on('mousemove.dragndrop', function(event){ 
            // 현재 커서 끝
            var endX = event.pageX, 
                endY = event.pageY;
            
            // 끝과 시작의 차이
            var moveX = endX - startX,
                moveY = endY - startY; 
            // 원래 박스 위치에 차이값만큼 더하기
            $this.css('left', startLeft + moveX);
            $this.css('top', startTop + moveY);

        });
        $(document).on('mouseup.dragndrop', function(event){
            // 마우스 버튼을 땔 때 시프트키가 눌려있으면 처음 위치로 되롤린다. 
            if( event.shiftKey ) {
                $this.css('left', startLeft);
                $this.css('top', startTop);
            }
            $(document).off('.dragndrop');
        });
    });  
//    $('.size-handle').on('mousedown', function(event){  
//        event.preventDefault(); 
//        // 현재 커서 시작
//        var startX = event.pageX, 
//            startY = event.pageY;
//        
//        // 현재 #box의 css width, height 값은?
//        var $this = $('#box');
//        var startWidth = parseInt($this.css('width')); 
//        var startHeight = parseInt($this.css('height'));
//        
//        $(document).on('mousemove.scale', function(event){ 
//            // 현재 커서 끝
//            var endX = event.pageX, 
//                endY = event.pageY;
//            
//            // 끝과 시작의 차이
//            var moveWidth = endX - startX,
//                moveHeight = endY - startY; 
//            // 원래 박스 위치에 차이값만큼 더하기
//            $this.css('width', startWidth + moveWidth);
//            $this.css('height', startHeight + moveHeight);
//
//        });
//        $(document).on('mouseup.scale', function(event){
//            $(document).off('.scale');
//        });
//    });
});



















