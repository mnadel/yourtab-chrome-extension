window.onload = () => {
    const div = document.getElementById("your-bookmarks");

    loadBookmarks((bookmarks) => {
        bookmarks.forEach((m) => {
            if (div.innerHTML !== "") {
                div.innerHTML += " | ";
            }

            div.innerHTML += `<a href="${m.url}">${m.title}</a>`;
        });
    });

    loadOptions((items) => {
        const frame = document.getElementById("your-content");
        frame.src = items.url;
    });
};
