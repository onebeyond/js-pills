const scrollDown = () =>
  $("html, body").animate({ scrollTop: $("section.ok").offset().top }, "slow");

$(function () {
  $(".scroll-down").click(function () {
    scrollDown();
    return false;
  });
});
