$(function() {

    // 초기화 
    var $list = $('#list'),
        $itemsListAll = $list.find('li'),
        $counter = $('#counter');

    $itemsListAll.each(function(index) {
        $(this).delay(250 * index).hide().fadeIn(900);
    });

    // 완료되지 않은 아이템 갯수
    function updateCount() {

        var $itemsNotComplete = $list.find('li[class!=complete]'),
            itemsCount = $itemsNotComplete.length;

        $counter.text(itemsCount);
    }
    updateCount();

    // 새 아이템 입력 폼 보이기
    var $btnShowForm = $('#btnShowForm'),
        $newItemButton = $('#newItemButton'),
        $newItemForm = $('#newItemForm');

    $newItemButton.show();
    $newItemForm.hide();

    $btnShowForm.on('click', function() {
        $newItemButton.hide();
        $newItemForm.show();
    });

    // 새 아이템 추가하기
    var $btnNewItem = $('#btnNewItem');

    $btnNewItem.on('click', function(event) {
        event.preventDefault();

        var txtInput = $('#newItemName').val();
        if (txtInput === '') return;
        $list.append('<li>' + txtInput + '</li>');

        $itemsListAll = $list.find('li');
        var $itemsListAllCount = $itemsListAll.length,
            $addedLastItem = $itemsListAll.eq($itemsListAllCount - 1)
            .hide().fadeIn(350);

        $('#newItemName').val('');
        updateCount();
    });

    // 이벤트 처리 - 이벤트 위임
    $list.on('click', 'li', function() {

        var $this = $(this),
            isComplete = $this.hasClass('complete');

        if (isComplete === true) {

            $this.animate({
                opacity: 0.0,
                paddingLeft: '+=320'
            }, 450, 'swing', function() {
                $this.remove();
            });
        } 
        else {

            var txtItem = $this.text();
            $this.remove();

            $list.append('<li class=\"complete\">' + txtItem + '</li>');
            
            var $addedLastItem = $list.find('li:last-child');
            $addedLastItem.hide().fadeIn(350);
            updateCount();
        }
    });




});