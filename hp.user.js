// ==UserScript==
// @name PH downloader
// @version 3
// @match https://*.pornhub.com/view_video.php*
// ==/UserScript==
(function() {
  window.onload = function() {
    console.log('[userscript] PH downloader');
    setTimeout(function() {
      var url = document.getElementsByTagName('video')[0].children[0].src;
      var d = document.createElement('div');
      d.className = 'tab-menu-wrapper-cell';
      d.innerHTML = '<a href="' + url + '" target="_blank" style="font-size:16px;">Скачать (direct)</a>';
      document.getElementsByClassName('tab-menu-wrapper-row')[0].appendChild(d);

      document.querySelector('[data-tab=download-tab]').style = 'display:none;';
      document.querySelector('[data-tab=add-to-tab]').style = 'display:none;';
    }, 3000);
  };
}());
