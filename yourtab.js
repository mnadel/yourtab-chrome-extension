window.onload = function () {
    var frame = document.getElementById("your-content");
    if (frame) {
        frame.src = frame.getAttribute("url-data") || "https://apnews.com/";
    }
};
