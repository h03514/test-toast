(function() {
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
            img.prop('src', url);

            $('.modal').html(img);
            $('.box-modal').fadeIn();
        });

        $('.box-modal').click(function(e) {
            $(this).fadeOut();
        });

        // slidedown contactcontent
        $(document).scroll(function(e) {
            if ($(this).scrollTop() > 1940) {
                $('.contactcontent').slideDown(1500);
            };
        });
    });

    /* chooseFood */

    $(document).ready(function() {
            let max = 10;
            let min = 1;

            function getRandom(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            $('#click').on('click', function() {
                let num = getRandom(1, 4);
                let $val1 = $('#food1').val();
                let $val2 = $('#food2').val();
                let $val4 = $('#food4').val();
                let foodName = $('.foodname');
                if (num == 1) {
                    foodName.html('這餐要吃的是 : ' + $val1);
                } else if (num == 2) {
                    foodName.html('這餐要吃的是 : ' + $val2);
                } else if (num == 3) {
                    foodName.html('這餐要吃的是 : ' + $val3);
                    alert($val3);
                } else {
                    foodName.html('這餐要吃的是 : ' + $val4);
                }
            });
        })
        /* /chooseFood */
})()