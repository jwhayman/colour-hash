/*global window, md5*/
$(window).ready(function () {
  $('#input-string').on('keyup', function () {
    var hashedInput = '#' + md5($(this).val()).substr(0, 6);
    $('body').animate({'background-color': hashedInput}, 100);
    $('#hash-value').text(hashedInput);
  });
});