
  $(document).ready(function(){
   var moretext = `Read More<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>`;
   var lesstext = `Read Less<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg>`;
   $('.readmore').each(function () {


      let h = $(this).height();
      if (h == 230 || h==430) {
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