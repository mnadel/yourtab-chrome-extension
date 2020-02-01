const defaultOptionURL = "https://apnews.com/";

const loadOptions = (callback) => {
    chrome.storage.local.get({
        url: defaultOptionURL
    }, (items) => {
        callback(items);
    });
};

const saveOptions = (data, callback) => {
    chrome.storage.local.set({
        url: data.url || defaultOptionURL
    }, callback);
};
