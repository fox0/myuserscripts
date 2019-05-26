// ==UserScript==
// @name PH downloader
// @version 5
// @match https://*.pornhub.com/view_video.php*
// ==/UserScript==
(function() {
  console.log('[userscript] PH downloader');
  
  function userscript_add_link() {
    var qs = document.getElementsByTagName('video');
    if (qs.length == 0) {
      setTimeout(userscript_add_link, 500); //try again
      return;
    }
    var url = qs[0].children[0].src;
    var d = document.createElement('div');
    d.className = 'tab-menu-wrapper-cell';
    d.innerHTML = '<a href="' + url + '" target="_blank" style="font-size:16px;">Скачать (direct)</a>';
    document.getElementsByClassName('tab-menu-wrapper-row')[0].appendChild(d); 
  }
  
  window.onload = function() {
    document.querySelector('[data-tab=download-tab]').style = 'display:none;';
	  document.querySelector('[data-tab=add-to-tab]').style = 'display:none;';
    userscript_add_link();
  };
}());
