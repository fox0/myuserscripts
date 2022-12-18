// ==UserScript==
// @name         count notification
// @version      0.3.1
// @match        https://ficbook.net/notifications
// @grant        none
// ==/UserScript==
(function() {
    function reflesh_count() {
        fetch('/user_notifications/get_new', { method: 'POST'})
            .then((response) => response.json())
            .then((json) => {
                var count = json.data.count;
                var title = count === 0 ? '-///-' : '[' + count + ']';
                document.getElementsByTagName('title')[0].innerHTML = title + ' Оповещения';
        });
        setTimeout(reflesh_count, 1000 * 63 * 3); //min
    }
    reflesh_count();
})();
