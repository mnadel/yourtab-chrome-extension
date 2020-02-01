const defaultOptionURL = "https://apnews.com/";
const defaultOptionShowBookmarks = true;

const loadOptions = (callback) => {
    chrome.storage.local.get({
        url: defaultOptionURL,
        showBookmarks: defaultOptionShowBookmarks
    }, (items) => {
        callback(items);
    });
};

const saveOptions = (data, callback) => {
    chrome.storage.local.set({
        url: data.url || defaultOptionURL,
        showBookmarks: data.showBookmarks
    }, callback);
};
