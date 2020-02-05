window.onload = () => {
    storage.load((items) => {
        let frame = document.getElementById("your-content")
        frame.src = items.url

        let div = document.getElementById("your-bookmarks")

        if (items.showBookmarks) {
            if (!frame.classList.contains("marks")) {
                frame.classList.add("marks")
            }

            bookmarks.load((marks) => {
                marks.forEach((m) => {
                    if (div.innerHTML !== "") {
                        div.innerHTML += " | "
                    }

                    div.innerHTML += `<a href="${m.url}">${m.title}</a>`
                })

                if (items.darkSkyKey && items.weatherLat && items.weatherLon) {
                    weather.sendMessage(items, (url, description) => {
                        if (div.innerHTML !== "") {
                            div.innerHTML += " | "
                        }

                        div.innerHTML += `<a href="${url}">${description}<a/>`
                    })
                }
            })
        } else {
            div.parentNode.removeChild(div)
            if (frame.classList.contains("marks")) {
                frame.classList.remove("marks")
            }
        }
    })
}
