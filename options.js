chrome.storage.local.get({
    url: "https://apnews.com/"
}, function(items) {
    document.getElementById("options-url").value = items.url;
});

document.getElementById("options-save").addEventListener("click", function () {
    var options = {
        url: document.getElementById("options-url").value
    };

    chrome.storage.local.set(options, function() {
        var status = document.getElementById("options-status");
        status.textContent = "Options saved.";
        setTimeout(function() {
            status.textContent = "";
        }, 1000);
    });
});
