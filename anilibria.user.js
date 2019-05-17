// ==UserScript==
// @name anilibria waiter
// @version 3
// @match https://www.anilibria.tv/release/*
// ==/UserScript==
(function(){
  var el = document.querySelector('[id^="torrentTableDate"]');
  var r = el.innerText.replace(/.*\s(\d{2}\.\d{2}\.\d{4})\s.*/, '$1');
  document.getElementsByTagName('title')[0].innerHTML = r;
  
  setTimeout(location.reload, 1000 * 60 * 5); //min
}());
