$(document).ready(function(){
    $(".btnMenu").on('click',function(){
        $(this).fadeOut();
        $("section").addClass("on");
        $("nav").addClass("on");
    });
    $("nav li").on('click',function(){
        $(".btnMenu").fadeIn();
        $("section").removeClass("on");
        $("nav").removeClass("on");
        
        var $i = $(this).index();
        $("section > div").removeClass("on");
        $("section > div").eq($i).addClass("on");
    });
});















