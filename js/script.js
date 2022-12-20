// ******모바일 메뉴
//메뉴 버튼 열기, 닫기
$('.mb-gnb-header button').click(function(){
    $('.mb-menu').addClass('menu-open');
});
$('.mb-menu-header button').click(function(){
    $('.mb-menu').removeClass('menu-open');
});
//모바일 스크롤 했을 때 해당 메뉴 활성화
$('.mb-depth2').scroll(function(){
    let menuTop = $('.mb-depth2').scrollTop();
    let menuPos = menuTop + 5;
    let depth1Height = $('#depth2-1').height(),
        depth2Height = $('#depth2-2').height() + depth1Height,
        depth3Height = $('#depth2-3').height() + depth2Height,
        depth4Height = $('#depth2-4').height() + depth3Height,
        depth5Height = $('#depth2-5').height() + depth4Height,
        depth6Height = $('#depth2-6').height() + depth5Height;

    if (menuPos > depth1Height && menuPos < depth2Height) {
        $('.mb-depth1 ul li a.nav-active').removeClass('nav-active');
        $('.mb-depth1 ul li:nth-child(2) a').addClass('nav-active');
    } else if (menuPos > depth2Height && menuPos < depth3Height) {
        $('.mb-depth1 ul li a.nav-active').removeClass('nav-active');
        $('.mb-depth1 ul li:nth-child(3) a').addClass('nav-active');
    } else if (menuPos > depth3Height && menuPos < depth4Height) {
        $('.mb-depth1 ul li a.nav-active').removeClass('nav-active');
        $('.mb-depth1 ul li:nth-child(4) a').addClass('nav-active');
    } else if (menuPos > depth4Height && menuPos < depth5Height) {
        $('.mb-depth1 ul li a.nav-active').removeClass('nav-active');
        $('.mb-depth1 ul li:nth-child(5) a').addClass('nav-active');
    } else if (menuPos > depth5Height && menuPos < depth6Height) {
        $('.mb-depth1 ul li a.nav-active').removeClass('nav-active');
        $('.mb-depth1 ul li:nth-child(6) a').addClass('nav-active');
    } else {
        $('.mb-depth1 ul li a.nav-active').removeClass('nav-active');
        $('.mb-depth1 ul li:nth-child(1) a').addClass('nav-active');
    }
});

//스크롤 시 백그라운드 색상 바뀜
$(document).ready(function(){
    $('.dt-depth1 > li:not(:first-child)').hover(function(){
        $('header').addClass('bg-white');
        $('.dt-depth1 > li > a').addClass('menu-hover');
    }, function(){
        $('header').removeClass('bg-white');
        $('.dt-depth1 > li > a').removeClass('menu-hover');
    });
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $('header').addClass('scroll');
        }
        else if (scroll == 0) {
            $('header').removeClass('scroll');
        }
    })
});
