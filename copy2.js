/**$(function() {
  $('.copy-to-clipboard input').click(function() {
    $(this).focus();
    $(this).select();
    document.execCommand('copy');
    $(".copied").text("Copied to clipboard").show().fadeOut(2500);
  });
});**/

$(function() {
  $('.copy-cell').click(function() {
    const other = $(this).next('td')
    other.find('input').focus();
    other.find('input').select();
    document.execCommand('copy');
    /*$(".copied").text("Copied to clipboard").show().fadeOut(2500);*/
  });
});
