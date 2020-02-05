const defaultOptionURL = "https://apnews.com/";

const loadOptions = (callback) => {
    // names of options and their default values
    chrome.storage.local.get({
        url: defaultOptionURL,
        showBookmarks: false,
        weatherLat: null,
        weatherLon: null,
        darkSkyKey: null
    }, (items) => {
        callback(items);
    });
};

const saveOptions = (data, callback) => {
    chrome.storage.local.set({
        url: data.url || defaultOptionURL,
        showBookmarks: !!data.showBookmarks,
        weatherLat: data.weatherLat || null,
        weatherLon: data.weatherLon || null,
        darkSkyKey: data.darkSkyKey || null
    }, callback);
};
