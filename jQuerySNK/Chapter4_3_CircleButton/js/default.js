$(function(){
    
    var duration = 300;
    
    $('#buttons button')
        .each(function(index){
            var pos = index * 40 - 40;
            $(this).css('top', pos);
        })
        
        .on('mouseover', function(){
            var $btn = $(this).stop().animate({
                background: '#faee00',
                color: '#000'
            }, duration);
            
            $btn.find('img:first-child').stop().animate({
                opacity: '0'
            }, duration);
            $btn.find('img:nth-child(2)').stop().animate({
                opacity: '1'
            }, duration);
        })
        .on('mouseout', function(){
            var $btn = $(this).stop().animate({
                background: '#fff',
                color: '#01b169'
            }, duration);
            
            $btn.find('img:first-child').stop().animate({
                opacity: '1'
            }, duration);
            $btn.find('img:nth-child(2)').stop().animate({
                opacity: '0'
            }, duration);
        })
    
    
});




















