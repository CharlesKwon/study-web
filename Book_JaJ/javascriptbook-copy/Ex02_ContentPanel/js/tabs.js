$('.tab-list').each(function() {

    /*var $this = $(this),
        $tabActive = $this.find('li.active'),
        $link = $tabActive.find('a'),
        $panelActive = $($link.attr('href'));

    $this.on('click', '.tab-control', function(event) {
        event.preventDefault();

        $link = $(this);
        var id = this.hash;

        if (id && !$link.is('.active')) {

            $panelActive.removeClass('active');
            $tabActive.removeClass('active');

            $panelActive = $(id).addClass('active');
            $tabActive = $link.closest().addClass('active');
        }
    });*/

    $('.tab-panel').hide();
    $('.tab-list a').on('click', function(e) {
            e.preventDefault();
        
            $('.tab-list li.active').removeClass('active');
            $('.tab-panel:visible').hide();
        
            $(this).closest('li').addClass('active')
            $(this.hash).fadeIn(300);
        })
        .filter(':eq(0)').click();
});