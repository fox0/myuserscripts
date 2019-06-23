// ==UserScript==
// @name Youtube downloader
// @version 0.4
// @match https://www.youtube.com/watch*
// @match http://convert2mp3.net/en/index.php*
// @match https://www.onlinevideoconverter.com/ru/youtube-converter*
// @match https://www.onlinevideoconverter.com/ru/success
// ==/UserScript==
(function() {
  if (document.URL.startsWith('https://www.youtube.com/watch')) {
    window.onload = function() {
      var a;
      a = get_a('http://convert2mp3.net/en/index.php#mp4', 'mp4 (convert2mp3.net)');
      document.getElementById('messages').appendChild(a);
      a = get_a('http://convert2mp3.net/en/index.php#aac', 'aac (convert2mp3.net)');
      document.getElementById('messages').appendChild(a);
      a = get_a('https://www.onlinevideoconverter.com/ru/youtube-converter#mp4', 'mp4 (onlinevideoconverter.com)');
      document.getElementById('messages').appendChild(a);
      a = get_a('https://www.onlinevideoconverter.com/ru/youtube-converter#aac', 'aac (onlinevideoconverter.com)');
      document.getElementById('messages').appendChild(a);
      
      function get_a(url, text) {
        var r = document.createElement('a');
        r.style = 
          'display: inline-block;' + 
          'background: #222;' + 
          'color: #ddd;' + 
          'text-align: center;' + 
          'padding: 5px;' + 
          'margin:10px;' +
          'font-size: 1.5rem;' +
          'text-decoration: none;';
        r.target = '_blank';
        r.innerText = text;
        r.href = url + document.URL;
        //потому что document.URL может смениться без перезагрузки страницы
        r.onclick = function() {
          this.href = url + document.URL;
          return true;
        }
        return r;
      }
    };
  } else if (document.URL.startsWith('http://convert2mp3.net/en/index.php#mp4')) {
    window.onload = function() {
      var url = window.location.hash.substring(4);
      document.getElementById('urlinput').value = url;
      document.getElementById('select_main').value = 'mp4';
      document.getElementById('convertForm').submit(); 
    };
  } else if (document.URL.startsWith('http://convert2mp3.net/en/index.php#aac')) {
    window.onload = function() {
      var url = window.location.hash.substring(4);
      document.getElementById('urlinput').value = url;
      document.getElementById('select_main').value = 'aac';
      document.getElementById('convertForm').submit(); 
    };
  } else if (document.URL.startsWith('http://convert2mp3.net/en/index.php?p=complete')) {
    window.onload = function() {
      document.getElementsByClassName('btn-success')[0].click();
    };
  } else if (document.URL.startsWith('https://www.onlinevideoconverter.com/ru/youtube-converter#mp4')) {
    window.onload = function() {
      var url = window.location.hash.substring(4);
      document.getElementById('texturl').value = url;
      document.getElementById('convert1').click();
    };
  } else if (document.URL.startsWith('https://www.onlinevideoconverter.com/ru/youtube-converter#aac')) {
    window.onload = function() {
      var url = window.location.hash.substring(4);
      document.getElementById('texturl').value = url;
      document.querySelector('a[data-value=aac]').click();
      document.getElementById('convert1').click();
    };
  } else if (document.URL.startsWith('https://www.onlinevideoconverter.com/ru/success')) {
    window.onload = function() {
      document.getElementById('downloadq').click();
    };
  }
}());
