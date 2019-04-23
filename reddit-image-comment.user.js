// ==UserScript==
// @name reddit image comment
// @version 1
// @match https://www.reddit.com/r/Pikabu/comments/*
// ==/UserScript==
(function() {
  function _update() {
  	var qs = document.querySelectorAll('div[data-test-id="comment"]');
  	Array.from(qs).forEach(function(e) {
      //e.style = 'border: solid #0f0 1px;'
      var text = e.lastElementChild.innerHTML;
      
      text = text.replace(/(href="(.*\.jpg)".*<\/a>)/, '$1<p><img src="$2" style="max-width:100%;"><\p>');
      text = text.replace(/(href="(https:\/\/i.imgur.com\/.*\.gif)v".*<\/a>)/, '$1<p><img src="$2" style="max-width:100%;"><\p>');
      
      e.lastElementChild.innerHTML = text;
  	});
  }
  _update();
  
})();
