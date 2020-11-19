$(function () {
  $(".scroll-down").click(function () {
    $("html, body").animate(
      { scrollTop: $("section.ok").offset().top },
      "slow"
    );
    return false;
  });
});