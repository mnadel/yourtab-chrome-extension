window.onload = () => {
    loadOptions((items) => {
        let frame = document.getElementById("your-content");
        frame.src = items.url;

        let div = document.getElementById("your-bookmarks");

        if (items.showBookmarks) {
            if (!frame.classList.contains("marks")) {
                frame.classList.add("marks");
            }

            loadBookmarks((bookmarks) => {
                bookmarks.forEach((m) => {
                    if (div.innerHTML !== "") {
                        div.innerHTML += " | ";
                    }

                    div.innerHTML += `<a href="${m.url}">${m.title}</a>`;
                });

                if (items.darkSkyKey && items.weatherLat && items.weatherLon) {
                    const message = {
                        request: "weather",
                        key: items.darkSkyKey,
                        lat: items.weatherLat,
                        lon: items.weatherLon
                    };

                    chrome.runtime.sendMessage(message, (resp) => {
                        const url = weatherHumanURL(items);
                        const description = weatherDescription(resp);

                        if (div.innerHTML !== "") {
                            div.innerHTML += " | ";
                        }

                        div.innerHTML += `<a href="${url}">${description}<a/>`;
                    });
                }
            });
        } else {
            div.parentNode.removeChild(div);
            if (frame.classList.contains("marks")) {
                frame.classList.remove("marks");
            }
        }
    });
};
