// ==UserScript==
// @name Youtube downloader
// @version 2
// @match https://www.youtube.com/watch*
// @match http://convert2mp3.net/en/index.php*
// ==/UserScript==

(function() {
  function onload_you() {
    var a = document.createElement('a');
    a.target = '_blank';
    a.style = 'display: inline-block; background: #222; color: #ddd; text-align: center; padding: 5px; margin:10px; font-size: 1.5rem; text-decoration: none;';
    
    a.innerText = 'Скачать mp4';
    a.href = 'http://convert2mp3.net/en/index.php#mp4' + document.URL;
    //onclick потому что document.URL может смениться без перезагрузки страницы
    a.onclick = function() {
      this.href = 'http://convert2mp3.net/en/index.php#mp4' + document.URL;
      return true;
    }
    document.getElementById('messages').appendChild(a);
    
    var a2 = a.cloneNode();
    a2.innerText = 'Скачать aac';
    a2.href = 'http://convert2mp3.net/en/index.php#aac' + document.URL;
    a2.onclick = function() {
      this.href = 'http://convert2mp3.net/en/index.php#aac' + document.URL;
      return true;
    }
    document.getElementById('messages').appendChild(a2);
  }
  
  function onload_dw_mp4() {
    var url = window.location.hash.substring(4);
    document.getElementById('urlinput').value = url;
    document.getElementById('select_main').value = 'mp4';
    document.getElementById('convertForm').submit(); 
  }
  
  function onload_dw_aac() {
    var url = window.location.hash.substring(4);
    document.getElementById('urlinput').value = url;
    document.getElementById('select_main').value = 'aac';
    document.getElementById('convertForm').submit(); 
  }
  
  function onload_dw2() {
    document.getElementsByClassName('btn-success')[0].click();
  }
  
  if (document.URL.startsWith('https://www.youtube.com/watch')) {
    window.onload = onload_you;
  } else if (document.URL.startsWith('http://convert2mp3.net/en/index.php#mp4')) {
    window.onload = onload_dw_mp4;
  } else if (document.URL.startsWith('http://convert2mp3.net/en/index.php#aac')) {
    window.onload = onload_dw_aac;
  } else if (document.URL.startsWith('http://convert2mp3.net/en/index.php?p=complete')) {
    window.onload = onload_dw2;
  }
}());
