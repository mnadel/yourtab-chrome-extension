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
                marks.filter(m => m.url.startsWith("http")).forEach((m) => {
                    if (div.innerHTML !== "") {
                        div.innerHTML += " | "
                    }

                    div.innerHTML += `<a href="${m.url}">${m.title}</a>`
                })

                if (weather.canRender(items)) {
                    weather.sendMessage(items, (items, resp) => {
                        if (div.innerHTML !== "") {
                            div.innerHTML += " | "
                        }

                        div.innerHTML += weather.asBookmark(items, resp)
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
