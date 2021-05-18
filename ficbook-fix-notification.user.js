// ==UserScript==
// @name ficbook fix notification
// @version 0.1
// @match https://ficbook.net/notifications*
// ==/UserScript==

(function() {
  console.log('[userscript] ficbook fix notification');
  var my_awesome_script = document.createElement('script');
  my_awesome_script.innerText = 
"  function mark_old(notification_id) {" +
"    const formData = new FormData();" +
"    formData.append('notification_ids[]', notification_id);" +
"    fetch('https://ficbook.net/user_notifications/mark_old', {" +
"      method: 'POST'," +
"      body: formData" +
"    });" +
"  }";
  document.head.appendChild(my_awesome_script);

  var ls = document.getElementsByClassName('js-read-notification');
  console.log(ls);
  var parent = document.getElementsByClassName('notifications-content')[0];
  Array.from(ls).forEach(function(e) {
    var a = document.createElement("a");
    a.innerText = 'Отметить прочитанным';
    a.href = 'javascript:mark_old("' + e.dataset.notificationId + '")';
    
    parent.insertBefore(a, e);
  });
}());
