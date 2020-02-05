class Weather {
    constructor() {
        chrome.runtime.onMessage.addListener(this.handleMessage)
    }

    asBookmark = (opts, resp) => {
        const url = `https://darksky.net/forecast/${opts.weatherLat},${opts.weatherLon}`
        const temp = Math.round(resp.temp)
        const feels = Math.round(resp.feelsLike)
        const desc = !resp ? "Check &deg;F" : `${resp.summary} ${temp}&deg; (${feels}&deg;)`

        return `<a href="${url}">${desc}</a>`
    }

    createMessage = (opts) => {
        return {
            request: "weather",
            key: opts.darkSkyKey,
            lat: opts.weatherLat,
            lon: opts.weatherLon
        }
    }

    sendMessage = (items, callback) => {
        chrome.runtime.sendMessage(this.createMessage(items), (resp) => {
            callback(items, resp)
        })
    }

    handleMessage = (msg, _, respond) => {
        if (msg.request == "weather") {
            const url = `https://api.darksky.net/forecast/${msg.key}/${msg.lat},${msg.lon}`

            fetch(url).then((resp) => {
                return resp.json()
            }).then((json) => {
                respond({
                    summary: json.currently.summary,
                    temp: json.currently.temperature,
                    feelsLike: json.currently.apparentTemperature
                })
            }).catch((error) => {
                console.log("Error getting weather", error)
                respond(null)
            })
        }

        return true
    }
}

const weather = new Weather()
