$('.accordion').on('click', '.accordion-control', function(event) { // 클릭 이벤트
    event.preventDefault(); 
    
    $(this).next('.accordion-panel')
        .not(':animated') 
        .slideToggle(); 
});