class Bookmarks {
    load = (callback) => {
        chrome.bookmarks.getTree((tree) => {
            let bookmarks = []

            if (!tree || tree.length === 0) {
                return bookmarks
            }

            const root = tree[0]
            if (!root.children || root.children.length === 0) {
                return bookmarks
            }

            root.children[0].children.forEach((bookmark) => {
                if (bookmark.url && bookmark.title) {
                    bookmarks.push(bookmark)
                }
            })

            callback(bookmarks)
        })
    }
}

const bookmarks = new Bookmarks()
