window.onload = function () {
    var frame = document.getElementById("your-content");
    if (frame) {
        chrome.storage.local.get({
            url: "https://apnews.com/"
        }, function(items) {
            frame.src = items.url;
        });
    }
};
