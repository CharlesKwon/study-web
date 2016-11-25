$(function(){
    
    $('.page-header').each(function(){
        
        
        var $window = $(window),
            $header = $(this),
            
            headerOfftsetTop = $header.offset().top;
        
        $window.on('scroll', function(){
            
            if($window.scrollTop() > headerOfftsetTop) {
               
                $header.addClass('sticky');
               
            } else {
                
                $header.removeClass('sticky');
                   
            }
        });
        
        $window.trigger('scroll');
        
    });
    
});





















