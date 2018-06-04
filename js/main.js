$(document).ready(function() {
    // nav page
    $('.menu .page1 ').click(function(event) {
        /* Act on the event */
        $('html, body').animate({ scrollTop: $("#page1").offset().top }, 1000);
    });
    $('.menu .page2 ').click(function(event) {
        /* Act on the event */
        $('html, body').animate({ scrollTop: $("#page2").offset().top }, 1000);
    });
    $('.menu .page3 ').click(function(event) {
        /* Act on the event */
        $('html, body').animate({ scrollTop: $("#page3").offset().top }, 1000);
    });
    $('.menu .page4 ').click(function(event) {
        /* Act on the event */
        $('html, body').animate({ scrollTop: $("#page4").offset().top }, 1000);
    });
   

    // fadein skillcontent
    $(document).scroll(function(e) {
        if ($(this).scrollTop() > 852) {
            $('.skillcontent').fadeIn(1500);
        };
    });
    
    // 點小圖讓大圖載入
    $('.box a').click(function(e) {
    	/* Act on the event */
    	e.preventDefault();

    	var url = $(this).prop('href');
    	var img = $('<img>');
    	img.prop('src',url);

    	$('.modal').html(img);
    	$('.box-modal').fadeIn();
    });

    	$('.box-modal').click(function(e){
    		$(this).fadeOut();
    	});

    // slidedown contactcontent
    $(document).scroll(function(e) {
        if ($(this).scrollTop() > 1940) {
            $('.contactcontent').slideDown(1500);
        };
    });



});