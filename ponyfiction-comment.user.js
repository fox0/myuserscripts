// ==UserScript==
// @name ponyfiction comment
// @version 2
// @match https://ponyfiction.org/*
// ==/UserScript==
(function() {
  function init() {
    console.log('userscript');
    Array.from(document.getElementsByClassName('comment-by-topic-author')).forEach(function(e) {
      e.parentElement.style = 'background-color: #cfc;';
    });
    Array.from(document.getElementsByClassName('vote-total')).forEach(function(e) {
      var total = parseInt(/(\d+)/.exec(e.title)[1]);
      var vote = parseInt(e.innerHTML);
      //u - d = v
      //u + d = t
      var upvotes = (total + vote) / 2;
      var downvotes = total - upvotes;

      var r = '';
      r += '<span style="color: #' + (upvotes>0?'0a0':'888') + ';">+' + upvotes + '</span> ';
      r += '<span style="color: #' + (downvotes>0?'a00':'888') + ';">-' + downvotes + '</span>';
      e.innerHTML = r;
    });  
  }
  //todo пагинация комментариев не работает
  document.addEventListener('amajaxify:endrequest', init);
  init();
})();
