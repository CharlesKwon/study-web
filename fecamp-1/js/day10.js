jQuery(function($){
    $('#box').on('click', function(event){
        alert('click');
    });
    
    $(document).on('keydown', function(event){
        if(event.which === 13) {
            $('#box').trigger('click');
        }
    });
    
    // 트리거 예제 
//    $('li').on('click', function(event){
//        $(this).clone().insertAfter(this);
//    });
    
    $('#cloneItem').on('click', function(event){
//        $('li:first').trigger('click');
    });
    
    $('ul').on('click', 'li', function(event){
//        $(this).clone().insertAfter(this);
    });
    
//    $('#hide').on('click', function(event){
//        $('#box').hide();
//    });
//    $('#show').on('click', function(event){
//        $('#box').show();
//    });
//    $('#toggle').on('click', function(event){
//        $('#box').toggle(300);
//    });
    
//    $('#hide').on('click', function(event){
//        $('#box').fadeOut();
//    });
//    $('#show').on('click', function(event){
//        $('#box').fadeIn();
//    });
//    $('#toggle').on('click', function(event){
//        $('#box').fadeToggle(300);
//    });
    
//    $('#hide').on('click', function(event){
//        $('#box').slideUp();
//    });
//    $('#show').on('click', function(event){
//        $('#box').slideDown().hide(500);
//    });
//    $('#toggle').on('click', function(event){
//        $('#box').slideToggle(1000);
//    });
    
    
    $('#show').on('click', function(event){ 
        
    });
    $('#hide').on('click', function(event){
        $('#box').animate({'opacity':0, 'width':0});
    });
    
    
//    var $box = $('#box');
//    var mLeft = parseInt($box.css('left')); 
//    var mTop = parseInt($box.css('top'));
//    var mOpacity = parseInt($box.css('opacity'));
    
//    $(document).on('keydown.move', function(event) {
//        //console.log(event.which);
//        if(event.shiftKey) {
//            switch(event.which)
//            { 
//                case 38: // 위
//                    mOpacity -= 0.2;
//                    $box.animate({'opacity': mOpacity}, 400);
//                    break;
//                case 40: // 아래
//                    mOpacity += 0.2;
//                    $box.animate({'opacity': mOpacity}, 400);
//                    break;
//                default:
//                    break;
//            }
//        } 
//        else {
//            switch(event.which)
//            {  
//                case 37: // 좌
//                    mLeft -= 15;
//                    $box.stop().animate({'left': mLeft}, 400);
//                    break;
//                case 38: // 위
//                    mTop -= 15;
//                    $box.stop().animate({'top': mTop}, 400);
//                    break;
//                case 39: // 우
//                    mLeft += 15;
//                    $box.stop().animate({'left': mLeft}, 400);
//                    break;
//                case 40: // 아래
//                    mTop += 15;
//                    $box.stop().animate({'top': mTop}, 400);
//                    break;
//                default:
//                    break;
//            }
//        } 
//    });
    
    $('h2').on('click', function(){
        $('h2').addClass('blue');
        
        console.log($(this).hasClass('blue'));
    }); 
    
//    console.log(winwidth);
//    console.log(winheight);
//    console.log(docwidth);
//    console.log(docheight);
//    console.log($box);
//    console.log($boxoffset);
    
    var winwidth = $(window).width();
    var winheight = $(window).height();
    
    var docwidth = $(document).width();
    var docheight = $(document).height(); 
    var $h2offset = $('h2:first').offset(); 
    
    var $box = $('#box');
    var $width = $box.width();
    var $height = $box.height();
    
    var $boxoffset = $box.offset(); 
    var sLeft = $boxoffset.left; 
    var sTop = $boxoffset.top;
    
    var limitwidth = docwidth - $width;
    var limitheight = $h2offset.top - $height;
    
    function canMoveLeft() {
        if( 10 <= sLeft && sLeft <= limitwidth - 10 ) {
            return true;
        }
        else {
            return false;
        }
    }
    function canMoveTop() {
        if( 10 <= sTop && sTop <= limitheight - 10 ) {
            return true;
        }
        else {
            return false;
        }
    }
    
    $(document).on('keydown.move', function(event) {
        switch(event.which)
        {  
            case 37: // 좌
                if(canMoveLeft()) {
                    sLeft -= 10;
                    $box.stop().animate({'left': sLeft}, 400);
                }
                else {
                    sLeft = 0;
                    $box.stop().animate({'left': sLeft}, 400);
                }
                break;
            case 39: // 우
                if(canMoveLeft()) {
                    sLeft += 10;
                    $box.stop().animate({'left': sLeft}, 400);
                }
                else {
                    sLeft = 0;
                    sLeft = limitwidth;
                    $box.stop().animate({'left': sLeft}, 400);
                }
                break;
            case 38: // 위
                if(canMoveTop()) {
                    sTop -= 10;
                    $box.stop().animate({'top': sTop}, 400);
                }
                else {
                    sTop = 0;
                    $box.stop().animate({'top': sTop}, 400);
                }
                break;
            case 40: // 아래
                if(canMoveTop()) {
                    sTop += 10;
                    $box.stop().animate({'top': sTop}, 400);
                }
                else {
                    sTop - 0;
                    sTop = limitheight;
                    $box.stop().animate({'top': sTop}, 400);
                }
                break;
            default:
                break;
        }
    });  
    
    $('.top').on('click', function(event){
        event.preventDefault();
//        $(window).scrollTop(0);
        $('html, body').animate({scrollTop: 0}, 200);
    });
    
    
    // 모든 a 태그를 선택한 후 <i class="fa fa-external-link"></i> 태그를
    // 선택한 <a> 태그의 마지막 자식 요소로 추가하라.
    
    $('<i class="fa fa-external-link"></i>').appendTo('a[href^="http"]').attr('target', '_blank');
    
    // 문제 : target 속성을 _blank 값으로 변경
//    $('a[href^="http"]').attr('target', '_blank');
    
    
    // 탭 선택
    $('#tab .tabs').on('click', 'li a', function(){
        var $this = $(this);
        $this.parent('li')
            .siblings()
                .removeClass('active')
        .end()
        .addClass('active');
        
        console.log($this.attr('href'));
        
        $($this.attr('href'))
            .siblings()
                .removeClass('active')
        .end()
        .addClass('active');
        
//            .addClass('active')
//            .siblings()
//                .removeClass('active'); 
    });
    
    
    // 탭 패널 선택 
//    $('#tab .tab-container').on('click', 'div', function(){
//        var $this = $(this);
//        $this.parent('div')
//            .siblings()
//                .addClass('active')
//        .end()
//        .removeClass('active');
//    }); 
});





























