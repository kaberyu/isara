$(function () {
  $('.question').on('click', function () {
    $(this).next().slideToggle(250);
  });

  $('#scroll-btn').on('click', function () {
    $('html, body').animate({
      'scrollTop': 0
    }, 500);
  });

  $('a[href^=#]').on('click', function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({
      scrollTop: position
    }, 500);
    return false;
  });
});
