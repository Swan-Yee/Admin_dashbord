
$(".show-sidebar-btn").click(function () {
    $(".aside").animate({marginLeft:0});
});

$(".hide-sidebar-btn").click(function () {
    $(".aside").animate({marginLeft:"-100%"});
});


function go(url){
    setTimeout(function(){
        location.href=`${url}`;
    }, 500);
}

$(".full-screen-btn").click(function(){

    $(this).closest(".card").toggleClass("full-screen-card");

    if($(this).closest(".card").hasClass("full-screen-card")){
        $(this).html(`<i class="feather-minimize-2"></i>`);
    }
    else{
        $(this).html(`<i class="feather-maximize-2"></i>`);
    }
});

let screenHeight=$(window).height();
let currentMenuHeight=$('nav-menu.active');
