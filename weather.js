// see https://developer.chrome.com/extensions/messaging

const weatherDescription = (resp) => {
    return !resp ? "Check Weather" : `${resp.summary} ${Math.round(resp.temp)} (${Math.round(resp.feelsLike)})`;
};

const weatherHumanURL = (opts) => {
    return `https://darksky.net/forecast/${opts.weatherLat},${opts.weatherLon}`;
};

chrome.runtime.onMessage.addListener((msg, _, respond) => {
    if (msg.request == "weather") {
        const url = `https://api.darksky.net/forecast/${msg.key}/${msg.lat},${msg.lon}`;

        fetch(url).then((resp) => {
            return resp.json();
        }).then((json) => {
            respond({
                summary: json.currently.summary,
                temp: json.currently.temperature,
                feelsLike: json.currently.apparentTemperature
            });
        }).catch((error) => {
            console.log("Error getting weather", error);
            respond(null);
        });
    }

    return true;
});
