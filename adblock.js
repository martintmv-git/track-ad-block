const adList = [
    "*://*.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.googletagservices.com/*",
    "*://*.googleadservices.com/*",
    "*://*.google-analytics.com/*",
    "*://*.googleadservices.com/*",
    "*://*.zedo.com/*",
    "*://*.adbrite.com/*",
    "*://*.adbureau.net/*",
    "*://*.carbonads.net/*",
    "*://*.cdn.carbonads.com/*",
    "*://*.cdn.carbonads.net/*",
    "*://*.cdn.doubleclick.net/*",
    "*://*.cdn.googletagservices.com/*",
    "*://*.cdn.googleadservices.com/*",
    "*://*.cdn.zedo.com/*",
    "*://*.adsrvr.org/*",
    "*://*.adform.net/*",
    "*://*.appnexus.com/*",
    "*://*.bluekai.com/*",
    "*://*.mediaforge.com/*",
    "*://*.criteo.com/*",
    "*://*.rubiconproject.com/*",
    "*://*.pubmatic.com/*",
    "*://*.optimizely.com/*",
    "*://*.scorecardresearch.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true}
    },
    {urls: adList},
    ["blocking listed links"]
)