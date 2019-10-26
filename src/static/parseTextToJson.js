const fs = require('fs')
const _ = require('lodash')

const raw = fs.readFileSync('./iptvindia.txt').toString()
const items = raw.split('\r\n#EXTINF:-1')
const dataSets = _.map(items, item => {
    const stripped = item.split(' ')
    let parsed = {}
    _.forEach(stripped, strip => {
        const keyPair = strip.split('=')
        if (keyPair[0] === 'group-title') {
            const furtherStrip = keyPair[1].split('\r\n')
            parsed = {
                ...parsed,
                [keyPair[0]]: furtherStrip[0],
                url: furtherStrip[1]

            }
        } else {
            parsed = {
                ...parsed,
                [keyPair[0]]: keyPair[1]
            }
        }

    })

    return parsed
})
const parsed = {
    'iptvIndia': dataSets
}
fs.writeFileSync('./data/parsedData.json', JSON.stringify(parsed))