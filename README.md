# Your Tab

Own your new tabs: a Chrome plugin to load content in your new tabs.

# Premise

Each time I Ctrl-T in Chrome/ium, I want to see what's going on in the world. There's an MSN extension
that sort of solves this problem, but has two limitations:

1. It's hard-coded to MSN News, which is littered with paid content
1. It hides the Bookmarks Bar on new tabs, which I find very useful

This extension solves both of these problems. It defaults to AP News, but is configurable. It also
optionally shows you your bookmarks.

# Installing

In `chrome://extensions`, enable developer mode, select _Load unpacked_ and point Chrome at the directory
containing this repo's `manifest.json` file.

# Weather

To show the weather along with your bookmarks:

1. Create a free [DarkSky](https://darksky.net/dev) API token. You get 1,000 free calls per day.
1. Enter the lat/lon of your location. If you don't know it offhand, you can [look it up](https://www.latlong.net/).

# Changelog

| Version | Changes |
| --      | --      |
| 0.2.4   | More compact bookmarks |
| 0.2.3   | Show "Loading Weather..." placeholder |
| 0.2.2   | Don't show feels like if it's the same as the current temp |
| 0.2.1   | Added low/high to weather feed |
| 0.2     | Added weather feed to bookmark bar |
| 0.1     | Initial release |

# Attribution

The structure and CSS were taken from the [MSN](https://chrome.google.com/webstore/detail/msn-homepage/ibflkkanbidceofpmolhpijgminhbmnm) extension. 
