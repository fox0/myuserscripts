// ==UserScript==
// @name Youtube downloader
// @version 1
// @match https://www.youtube.com/watch*
// @match http://convert2mp3.net/en/index.php*
// ==/UserScript==

(function() {
  if (document.URL.startsWith('https://www.youtube.com/watch')) {
    window.onload = function() {
      var a = document.createElement('a');
      a.href = 'http://convert2mp3.net/en/index.php';
      a.innerText = 'Скачать';
      a.target = '_blank';
      a.style = 'display: block; background: #0a0; color: #000; text-align: center; padding: 10px; font-size: 2rem; text-decoration: none;';
      a.onclick = function() {
        this.href = 'http://convert2mp3.net/en/index.php#' + document.URL;
      }
      document.getElementById('messages').appendChild(a);
    }
    return;
  }
  
  if (document.URL.startsWith('http://convert2mp3.net/en/index.php#')) {
    window.onload = function() {
      var url = window.location.hash.substring(1);
      document.getElementById('urlinput').value = url;
      document.getElementById('select_main').value = 'mp4';
      document.getElementById('convertForm').submit(); 
    }
    return;
  }
  
  if (document.URL.startsWith('http://convert2mp3.net/en/index.php?p=complete')) {
    window.onload = function() {
      document.getElementsByClassName('btn-success')[0].click();
    }
    return;
  }
}());
