window.onload = () => {
    storage.load((items) => {
        // chrome.webRequest.onHeadersReceived.addListener(info => {
        //     const headers = info.responseHeaders
        //     for (let i=headers.length-1; i>=0; --i) {
        //         let header = headers[i].name.toLowerCase()
        //         if (header === "x-frame-options" || header === "frame-options") {
        //             headers.splice(i, 1)
        //         }
        //     }
        //     return {responseHeaders: headers}
        // }, {
        //     urls: [ items.url ],
        //     types: [ "main_frame" ]
        // }, ["blocking", "responseHeaders"])

        const frame = document.getElementById("your-content")
        frame.src = items.url

        const div = document.getElementById("your-bookmarks")

        if (items.showBookmarks) {
            if (!frame.classList.contains("marks")) {
                frame.classList.add("marks")
            }

            bookmarks.load((marks) => {
                marks.filter(m => m.url.startsWith("http")).forEach((m) => {
                    if (div.innerHTML !== "") {
                        div.innerHTML += "&nbsp;&nbsp;&bull;&nbsp;&nbsp;"
                    }

                    div.innerHTML += `<a href="${m.url}">${m.title}</a>`
                })

                if (weather.canRender(items)) {
                    if (div.innerHTML !== "") {
                        div.innerHTML += "&nbsp;&nbsp;&bull;&nbsp;&nbsp;"
                    }

                    div.innerHTML += '<span id="weathermark"><a href="https://darksky.net/">Loading Weather...</a></span>'

                    weather.sendMessage(items, (items, resp) => {
                        const wm = document.getElementById("weathermark")
                        wm.innerHTML = weather.asBookmark(items, resp)
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
