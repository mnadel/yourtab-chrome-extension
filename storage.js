const onOptionsLoad = (callback) => {
    chrome.storage.local.get({
        url: "https://apnews.com/"
    }, (items) => {
        callback(items);
    });
};

const optionsSave = (data, callback) => {
    chrome.storage.local.set({
        url: data.url || "https://apnews.com/"
    }, callback);
};
