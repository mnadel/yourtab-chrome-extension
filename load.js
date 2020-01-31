window.onload = function () {
    var frame = document.getElementById("your-frame");
    if (frame) {
        frame.src = "https://www.nbcnews.com/";
    }
};

// function load_home (e) {
//     (e || window.event).preventDefault();
//     var con = document.getElementById("your-frame");
//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function (e) {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         con.innerHTML = xhr.responseText;
//       }
//     }

//     xhr.open("GET", "https://news.google.com", true);
//     xhr.setRequestHeader("Accept", "text/html");
//     xhr.send();
// }

// $(document).ready(function() {
//     var frame = document.getElementById("your-frame");

//     $.get("https://news.yahoo.com/", function (data) {
//         frame.innerHTML = data;
//     });
// });
