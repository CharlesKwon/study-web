$(function(){
    
    var duration = 300;
    
    var $aside = $('.page-main > aside');
    var $asideBtn = $aside.find('button')
    
        .on('click', function(){
            $aside.toggleClass('open');
            
            if($aside.hasClass('open')) {
                $aside.stop().animate({
                    left: '-70px'
                }, duration, 'easeOutBack');
                $asideBtn.find('img').attr('src', 'img/btn_close.png');
            }
            else {
                $aside.stop().animate({
                    left: '-350px'
                }, duration, 'easeInBack');
                $asideBtn.find('img').attr('src', 'img/btn_open.png');
            }
            
            
        });
    
    
});





















