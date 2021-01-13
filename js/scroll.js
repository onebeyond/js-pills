const scrollDown = () =>
  $("html, body").animate({ scrollTop: $("section.ok").offset().top }, "slow");

$(() => {
  $(".scroll-down").click(() => {
    scrollDown();
    return false;
  });
});
