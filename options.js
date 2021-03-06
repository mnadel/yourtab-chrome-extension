document.getElementById("options-save").addEventListener("click", () => {
    const opts = {
        url: document.getElementById("options-url").value,
        showBookmarks: document.getElementById("options-show-bookmarks").checked,
        weatherLat: document.getElementById("options-lat").value,
        weatherLon: document.getElementById("options-lon").value,
        darkSkyKey: document.getElementById("options-darksky-key").value
    }

    storage.save(opts, () => {
        const status = document.getElementById("options-status")
        const currStatus = status.textContent

        status.textContent = "Saved!"

        setTimeout(() => {
            status.textContent = currStatus
        }, 1000)
    })
})

storage.load((items) => {
    document.getElementById("options-url").value = items.url
    document.getElementById("options-show-bookmarks").checked = items.showBookmarks
    document.getElementById("options-lat").value = items.weatherLat
    document.getElementById("options-lon").value = items.weatherLon
    document.getElementById("options-darksky-key").value = items.darkSkyKey
})
