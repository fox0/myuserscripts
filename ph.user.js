// ==UserScript==
// @name PH downloader
// @version 6
// @match https://*.pornhub.com/view_video.php*
// ==/UserScript==
(function() {
  function main() {
    try {
			_main();
    } catch (e) {
    	console.log('[userscript ph] ERROR: ' + e);
		}
  }
  
  function _main() {
    var qs = document.getElementsByTagName('video');
    if (qs.length == 0){
      setTimeout(main, 500); //try again
      return;
    }
    var url = qs[0].children[0].src;
    if (url.includes('view_video.php')) {
      setTimeout(main, 500); //try again
      return;
    }
    var d = document.createElement('div');
    d.className = 'tab-menu-wrapper-cell';
    d.innerHTML = '<a href="' + url + '" target="_blank" style="font-size:16px;">Скачать (direct)</a>';
    document.getElementsByClassName('tab-menu-wrapper-row')[0].appendChild(d); 
  }

  window.onload = function() {
    document.querySelector('[data-tab=download-tab]').style = 'display:none;';
    document.querySelector('[data-tab=add-to-tab]').style = 'display:none;';
    main();
  };
}());
