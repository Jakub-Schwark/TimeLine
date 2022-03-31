$(".circle").hover(function() {
    $(".circle-black").removeClass("circle-black");
    $(this).addClass("circle-black");
    $(this).children(".vertical-up").addClass("vertical-black");
    $(this).children(".text-up").addClass("text-black");
    $(this).children(".vertical-down").addClass("vertical-black");
    $(this).children(".text-down").addClass("text-black");
}, function() {
  $(".circle-black").removeClass("circle-black");
  $(this).children(".vertical-up").removeClass("vertical-black");
  $(this).children(".text-up").removeClass("text-black");
  $(this).children(".vertical-down").removeClass("vertical-black");
  $(this).children(".text-down").removeClass("text-black");
});