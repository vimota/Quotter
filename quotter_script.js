$(function () {
  function handleClick(e){
    e.preventDefault();
    var quoteText, quoteAuthor, prefillText;

    quoteText = $(this).parents('.stream-item-footer').siblings('.js-tweet-text').text().match(/[\S](.*)[\S]/)[0];
    quoteAuthor = $(this).parents('.content').find('.username b').text();

    prefillText = '"@' + quoteAuthor + ': ' + quoteText + '"';
    $('#tweet-box-mini-home-profile').focus().val(prefillText);
  }

  var quoteHtml = '<li class="quotter-container"><a href="#"><b>Quote</b></a></li>',
      tweetActions = $('.tweet-actions');

  tweetActions.append(quoteHtml);
  tweetActions.click(handleClick);
});