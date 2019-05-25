// ==UserScript==
// @name PH downloader
// @version 1
// @match https://*.pornhub.com/view_video.php*
// @match https://www.tubeoffline.com/downloadFrom.php*
// ==/UserScript==

(function() {
  function encode_get(d) {
     const r = [];
     for (let k in d) {
       r.push(encodeURIComponent(k) + '=' + encodeURIComponent(d[k]));
     }
     return r.join('&');
  }
  
  function onload_ph() {
    var url = 'https://www.tubeoffline.com/downloadFrom.php?' + encode_get({ 'host': 'PornHub', 'video': document.URL });

    var d = document.createElement('div');
    d.className = 'tab-menu-wrapper-cell';
    d.innerHTML = 
      '<div class="tooltipTrig" data-title="Скачать" style="font-size:16px;">' +
      '  <a href="' + url + '" target="_blank">Скачать</a>' +
      '</div>';
    document.getElementsByClassName('tab-menu-wrapper-row')[0].appendChild(d);

    document.querySelector('[data-tab=download-tab]').style = 'display:none;';
    document.querySelector('[data-tab=add-to-tab]').style = 'display:none;';
  }
  
  function run_dw() {
    document.querySelectorAll('#videoDownload a')[0].click();
  }
  
  if (document.URL.includes('.pornhub.com/view_video.php')) {
    window.onload = onload_ph;
  } else if (document.URL.startsWith('https://www.tubeoffline.com/downloadFrom.php')) {
    window.onload = run_dw;
  }
}());
