loadOptions((items) => {
    document.getElementById("options-url").value = items.url;
    document.getElementById("options-show-bookmarks").checked = items.showBookmarks;
});

document.getElementById("options-save").addEventListener("click", () => {
    const options = {
        url: document.getElementById("options-url").value,
        showBookmarks: document.getElementById("options-show-bookmarks").checked
    };

    saveOptions(options, () => {
        const status = document.getElementById("options-status");
        const currStatus = status.textContent;

        status.textContent = "Saved!";

        setTimeout(() => {
            status.textContent = currStatus;
        }, 1000);
    });
});
