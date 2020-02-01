window.onload = () => {
    onOptionsLoad((items) => {
        const frame = document.getElementById("your-content");
        frame.src = items.url;
    });
};
