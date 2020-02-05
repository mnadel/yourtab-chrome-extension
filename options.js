class Options {
    constructor(doc) {
        doc.getElementById("options-save").addEventListener("click", () => {
            const opts = {
                url: doc.getElementById("options-url").value,
                showBookmarks: doc.getElementById("options-show-bookmarks").checked,
                weatherLat: doc.getElementById("options-lat").value,
                weatherLon: doc.getElementById("options-lon").value,
                darkSkyKey: doc.getElementById("options-darksky-key").value
            }

            options.save(opts, () => {
                const status = doc.getElementById("options-status")
                const currStatus = status.textContent

                status.textContent = "Saved!"

                setTimeout(() => {
                    status.textContent = currStatus
                }, 1000)
            })
        })
    }

    load = (doc, items) => {
        doc.getElementById("options-url").value = items.url
        doc.getElementById("options-show-bookmarks").checked = items.showBookmarks
        doc.getElementById("options-lat").value = items.weatherLat
        doc.getElementById("options-lon").value = items.weatherLon
        doc.getElementById("options-darksky-key").value = items.darkSkyKey
    }
}

const options = new Options(document);
