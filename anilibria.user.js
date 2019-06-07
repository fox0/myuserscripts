// ==UserScript==
// @name anilibria waiter
// @version 0.4
// @match https://www.anilibria.tv/release/*
// ==/UserScript==
(function(){
  var el = document.querySelector('[id^="torrentTableDate"]');
  var r = el.innerText.replace(/.*\s(\d{2}\.\d{2}\.\d{4})\s.*/, '$1');
  var title = document.getElementsByTagName('title')[0].innerHTML;
  document.getElementsByTagName('title')[0].innerHTML = r + ' // ' + title;
  setTimeout(location.reload, 1000 * 60 * 5); //min
}());
