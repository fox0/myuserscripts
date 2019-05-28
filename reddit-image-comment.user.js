// ==UserScript==
// @name reddit image comment
// @version 4
// @match https://www.reddit.com/r/*/comments/*
// ==/UserScript==
(function() {
  var count_qs = 0;
  
  function _update() {
    var qs = document.querySelectorAll('div[data-test-id="comment"] a');//todo a[data]^
    if (count_qs == qs.length) {
      return;  
    }
    count_qs = qs.length;
    Array.from(qs).forEach(function(a) {
      var text = null;
      if (a.href.endsWith('.jpg') || a.href.endsWith('.png') || a.href.endsWith('.gif')) {
        text = '<img src="' + a.href + '" style="max-width:100%;">';
      }
      if (a.href.includes('format=mp4')) {
        text = '<video controls autoplay><source src="' + a.href + '"></video>';
      }
      if (text) {
        var p = document.createElement('p');
        if (a.innerHTML == a.href) {
          p.innerHTML = text; //replace
        } else {
          p.innerHTML = a.innerHTML + '<br>' + text;
        }
        a.parentNode.replaceChild(p, a);
      }
    });
  }
  window.onscroll = _update;
  _update();
})();
