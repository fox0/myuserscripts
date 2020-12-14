// ==UserScript==
// @name ficbook fix link
// @version 0.1
// @match https://ficbook.net/*
// ==/UserScript==
(function() {
  console.log('[userscript]');
  setTimeout(function() {
    var ls = document.querySelectorAll('a[target="_blank"]');
    console.log(ls);
    Array.from(ls).forEach(function(e) {
      e.href = e.href.replace('https://ficbook.net/away?url=', '');
      console.log(e.href);
    });
  }, 5000);
}());
