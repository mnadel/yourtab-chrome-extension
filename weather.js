class Weather {
    constructor() {
        chrome.runtime.onMessage.addListener(this.handleMessage)
    }

    canRender = (opts) => {
        return opts.darkSkyKey && opts.weatherLat && opts.weatherLon
    }

    asBookmark = (opts, resp) => {
        let desc = "Weather"
        const url = `https://darksky.net/forecast/${opts.weatherLat},${opts.weatherLon}`

        if (resp) {
            const summary = resp.current.summary
            const temp = Math.round(resp.current.temp)
            const feels = Math.round(resp.current.feelsLike)
            const low = Math.round(resp.today.low)
            const high = Math.round(resp.today.high)

            desc = `${summary} ${temp}&deg; (${feels}&deg;) ${high}&deg;&rarr;${low}&deg;`
        }

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
                    current: {
                        summary: json.currently.summary,
                        temp: json.currently.temperature,
                        feelsLike: json.currently.apparentTemperature
                    },
                    today: {
                        low: json.daily.data[0].temperatureMin,
                        high: json.daily.data[0].temperatureMax
                    }
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
