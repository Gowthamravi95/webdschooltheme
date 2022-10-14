


$(document).ready(function(){
    $(".tp-btn-green").click(function(){
       alert("dzsfkj");

    })
    
    var moretext = `Read More<i class="fa-solid fa-angle-down"></i>`;
    var lesstext = `Read Less<i class="fa-solid fa-angle-up"></i>`;
    $('.more').each(function () {


       let h = $(this).height();

       if (h == 120) {
          $(this).after('<div><a href="" class="morelink">' + moretext + '</a></div>');

       } else {
          $(this).addClass('nobefore');
       }

    });

    $(".morelink").click(function () {
       if ($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);

       } else {
          $(this).addClass("less");
          $(this).html(lesstext);

       }
       $(this).parent().prev().toggleClass('moreStyle nobefore');
       return false;
    });

    
 })