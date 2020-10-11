$(document).ready(function(){
    $("div.que").click(function(){
        // $('.content').hide()
        // $('span.que').removeClass("bold")
        // $("img.arrow").removeClass("rotate")
        $(this).toggleClass("bold")
        $('img.arrow',$(this)).toggleClass("rotate")
        $('.content',$(this).parent()).slideToggle("fast")
    });
  });