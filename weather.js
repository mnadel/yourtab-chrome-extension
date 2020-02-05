class Weather {
    constructor() {
        chrome.runtime.onMessage.addListener(this.handleMessage)
    }

    description = (resp) => {
        return !resp ? "Check Weather" : `${resp.summary} ${Math.round(resp.temp)}&deg; (${Math.round(resp.feelsLike)}&deg;)`
    }

    humanURL = (opts) => {
        return `https://darksky.net/forecast/${opts.weatherLat},${opts.weatherLon}`
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
            const url = weather.humanURL(items)
            const description = weather.description(resp)
            callback(url, description)
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
