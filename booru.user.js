// ==UserScript==
// @name     booru big img
// @version  0.1
// @match    https://derpibooru.org/search?q=first_seen_at.gt:3%20days%20ago*
// @match		 https://derpibooru.org/search?*q=first_seen_at.gt%3A3+days+ago
// ==/UserScript==
(function(){
  window.onload = function() {
    console.log('[userscript]');
    var css = 'display:block; max-height: 100% !important;height: 100% !important; max-width: 100% !important; width: 100% !important;';
    var ls = document.getElementsByClassName('image-container');
    for (var i=0; i<ls.length; i++) {
      var url = JSON.parse(ls[i].dataset.uris)['large'];
      ls[i].getElementsByTagName('img')[0].src = url;
      ls[i].style.cssText = css;
      ls[i].parentElement.style.cssText = css;
      ls[i].parentElement.parentElement.style.cssText = css; 
    }
  }
})();
