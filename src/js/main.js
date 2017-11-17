
//header button
function onShow () {
var holder = document.getElementById('holder');
holder.classList.toggle('show');
}
btn.addEventListener("click",onShow,false);


//header-hover menu
function headerMen() {
    var link = document.getElementById('headeList');
     link.classList.toggle('header-inner__list');
}
headerMenu.addEventListener("click",headerMen,false);

//header fixed
$(document).ready(function($){
    $nav = $(".header" );
    $window = $(window);
    $h = $nav.offset().top;
    $window.scroll(function(){
        if ( $window.scrollTop() > $h) {
            $nav.addClass("header_fixed");
        }else{
            $nav.removeClass("header_fixed");
        }
    });
});



//header sublist
function SublistSshow() {
    var sublist = document.querySelector(".header-inner__sublist");
    sublist.classList.toggle('sublistShow');


}
list.addEventListener("click",SublistSshow,false);



// masonry
var container = document.getElementById('gel');
var masonry = new Masonry(container, {
    columnWidth:".gallery-item",
    gutter:25,
    itemSelector: '.gallery-item'

});
//

//
$(function(fadeBtn){
    var element = fadeBtn('#btn-up');
    fadeBtn(window).scroll(function(){
        element['fade' + (fadeBtn(this).scrollTop() > 500 ? 'In' : 'Out')](500);
         element.animate(0,1500)
    });
});

$('#btn-up').click(function(){
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
});



