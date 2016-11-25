$(function () {
    
    /*스크롤 상단으로 올리기 버튼(부드러운 스크롤)*/
    $('.back-to-top').each(function () {
        
        var $el = $(scrollableElement('html', 'body'));
        
        $(this).on('click', function (event) {
            event.preventDefault();
            
            $el.animate({ 
                scrollTop: 0 
            }, 250);
        });
    }); 
        
    // scrollTop을 사용할 수있는 요소를 감지하는 함수
    // http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links#update4
    function scrollableElement (elements) {
        var i, len, el, $el, scrollable;
        for (i = 0, len = arguments.length; i < len; i++) {
            el = arguments[i],
            $el = $(el);
            if ($el.scrollTop() > 0) {
                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if (scrollable) {
                    return el;
                }
            }
        }
        return [];
    } 
});





















