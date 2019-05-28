// ==UserScript==
// @name ficbook fucking js
// @version 1
// @match https://ficbook.net/*
// ==/UserScript==
(function() {
  var ls = document.getElementsByClassName('urlize');
  Array.from(ls).forEach(function(e) {
    e.classList.remove('urlize');
  });
}());
