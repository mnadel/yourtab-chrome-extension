class Storage {
    get defaultOptionURL() {
        return "https://apnews.com/"
    }

    load = (callback) => {
        // names of options and their default values
        chrome.storage.local.get({
            url: this.defaultOptionURL,
            showBookmarks: false,
            weatherLat: null,
            weatherLon: null,
            darkSkyKey: null
        }, (items) => {
            callback(items)
        })
    }

    save = (data, callback) => {
        chrome.storage.local.set({
            url: data.url || this.defaultOptionURL,
            showBookmarks: !!data.showBookmarks,
            weatherLat: data.weatherLat || null,
            weatherLon: data.weatherLon || null,
            darkSkyKey: data.darkSkyKey || null
        }, callback)
    }
}

const storage = new Storage()
