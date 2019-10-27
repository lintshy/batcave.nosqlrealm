export const rootValue = {
    channels: () => {
        return [
            {
                "tvg-id": "\"\"",
                "tvg-name": "\"\"",
                "tvg-logo": "\"http://www.asianetmobiletv.com/channels/ACV.png\"",
                "group-title": "\"\",ACV",
                "url": "https://acv.asianetmobiletvplus.com/channels/8f8e72769cb3e3a6e27c220e1e3887b8.smil/index.m3u8"
            }, {
                "tvg-id": "\"\"",
                "tvg-name": "\"\"",
                "tvg-logo": "\"http://mhdtvworld.com/wp-content/uploads/2018/11/acv.png\"",
                "group-title": "\"\",ACV",
                "url": "https://acv.asianetmobiletvplus.com/webstreams/8f8e72769cb3e3a6e27c220e1e3887b8.smil/playlist.m3u8"
            }, {
                "tvg-id": "\"\"",
                "tvg-name": "\"\"",
                "tvg-logo": "\"http://www.dhamaal.tv/images/logo.png\"",
                "group-title": "\"\",Dhamaal",
                "url": "http://linear06hun-lh.akamaihd.net/i/dhamaal_1@665243/index_2128_av-p.m3u8"
            }, {
                "tvg-id": "\"\"",
                "tvg-name": "\"\"",
                "tvg-logo": "\"\"",
                "group-title": "\"\",Dhamaal",
                "url": "http://linear06hun-lh.akamaihd.net/i/dhamaal_1@665243/master.m3u8"
            }
        ]
    },
    addChannel: (args: any) => {
        const name = args.name
        return name
    }
}