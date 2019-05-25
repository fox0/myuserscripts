// ==UserScript==
// @name reddit image comment
// @version 2
// @match https://www.reddit.com/r/*/comments/*
// ==/UserScript==
(function() {
  var count_qs = 0;
  
  function _update() {
  	var qs = document.querySelectorAll('div[data-test-id="comment"] a');
    if (count_qs == qs.length) {
      return;  
    }
    count_qs = qs.length;
  	Array.from(qs).forEach(function(a) {
      if (a.href.endsWith('.jpg') || a.href.endsWith('.png')) {
        var img = '<img src="' + a.href + '" style="max-width:100%;">';
        if (a.innerHTML == a.href) {
          a.innerHTML = img;
        } else {
          a.innerHTML += '<br>' + img;
        }
        a.href = 'http://localhost';
      }
      //text = text.replace(/(href="(https:\/\/i.imgur.com\/.*\.gif)v".*<\/a>)/, '$1<p><img src="$2" style="max-width:100%;"><\p>');
  	});
  }
  window.onscroll = _update;
  _update();
})();
