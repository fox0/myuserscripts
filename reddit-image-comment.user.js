// ==UserScript==
// @name reddit image comment
// @version 0.6
// @match https://www.reddit.com/r/*/comments/*
// ==/UserScript==
(function() {
  var count_qs = 0;
  
  function http_get(url) {
    var x = new XMLHttpRequest();
    x.open('GET', url, false);
    x.send(null);
    return x.responseText;
  }
  
  function http_get_async(url, callback) {
    var x = new XMLHttpRequest();
    x.onreadystatechange = function() { 
      if (x.readyState == 4 && x.status == 200) {
        callback(x.responseText);
      }
    };
    x.open('GET', url, true);
    x.send(null);
  }
  
  function _update() {
    var qs = document.querySelectorAll('div[data-test-id="comment"] a');//todo a[data]^
    if (count_qs == qs.length) {
      return;  
    }
    count_qs = qs.length;
    for (const a of qs) {
      var url = a.href;
      var text = null;
      if (url.startsWith('https://imgur.com/')) {
        url = http_get(url).match(/<link rel="image_src" href="(.*)"/)[1];//todo async
      }      
      if (url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.gif')) {
        text = '<img src="' + url + '" style="max-width:100%;">';
      } else if (url.includes('format=mp4')) {
        text = '<video controls autoplay><source src="' + url + '"></video>';
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
    }
  }
  window.onscroll = _update;
  _update();
})();
