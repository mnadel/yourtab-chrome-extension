const loadBookmarks = (callback) => {
    chrome.bookmarks.getTree((tree) => {
        let bookmarks = [];

        if (!tree || tree.length === 0) {
            return bookmarks;
        }

        const root = tree[0];
        if (!root.children || root.children.length === 0) {
            return bookmarks;
        }

        const primaryBookmarks = root.children[0];
        if (primaryBookmarks.title !== "Bookmarks") {
            return bookmarks;
        }

        primaryBookmarks.children.forEach((bookmark) => {
            if (bookmark.url) {
                bookmarks.push(bookmark);
            }
        });

        callback(bookmarks);
    });
};
