$(document).ready(function() {
	$('.nav>ul>li').hover(
       function(){ $(this).addClass('hover') },
       function(){ $(this).removeClass('hover') }
	);	

    $(".owl-carousel").owlCarousel({
        items: 1,
        nav : true,
        loop: true,
        navText: ['',''],
        pagination : true
    });
    $('select').styler();

    $(".fancybox_popup").fancybox({ 
        margin:0,
        padding:[0, 0, 0, 0],
        margin    : [0, 0, 0, 0],
        locked:false,
        tpl: {
                closeBtn : '<a title="{{CLOSE}}" class="close_button close_button_top" href="javascript:;"><i class="fa fa-close"></i></a>'
            }
    });
});