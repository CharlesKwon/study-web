$(function(){
    
    // #work 라는 요소를 찾은 후
    $('#work').each(function(){
        
        var $tabList = $(this).find('.tabs-nav'),
            $tabAnchors = $tabList.find('a'),
            $tabPanels = $(this).find('.tabs-panel');
        
        $tabList.on('click', 'a', function(event){
            event.preventDefault();
            
            var $this = $(this);
            
            // active 클래스가 이미 있다면 함수 중단
            if ($this.hasClass('active')) {
                return;    
            }
            
            $tabAnchors.removeClass('active');
            $this.addClass('active');
            
            
            // href 속성에 입력된 #id 주소를 이용,
            $tabPanels.hide();
            $($this.attr('href')).show();
            
        });
        
        // 시작시 클릭 이벤트 강제 실행
        $tabAnchors.eq(0).trigger('click');
        
    });
    
});





















