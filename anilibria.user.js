// ==UserScript==
// @name anilibria waiter
// @version 1
// @match https://www.anilibria.tv/release/*
// ==/UserScript==
(function(){
  var el = document.querySelector('[id^="torrentTableInfo"]');
  var r = el.innerText.replace(/.*\s1-(\d+)\s.*/, '$1');
  document.getElementsByTagName('title')[0].innerHTML = r;

  setTimeout(function() {
  	location.reload(); 
  }, 1000 * 60 * 5); //min
}());