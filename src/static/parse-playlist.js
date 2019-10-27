const fs = require('fs')
const _ = require('lodash')

const raw = fs.readFileSync('./iptvindia.txt').toString()
const items = raw.split('\r\n#EXTINF:-1')
const dataSets = _.map(items, item => {
    const stripped = item.split(' ')
    let parsed = {}
    let temp = {}
    _.forEach(stripped, strip => {

        const keyPair = strip.split('=')
        if (keyPair[0] === 'group-title') {
            const furtherStrip = keyPair[1].split('\r\n')
            temp = {
                ...temp,
                [_.camelCase(keyPair[0])]: furtherStrip[0],
                url: furtherStrip[1]

            }
        } else {
            temp = {
                ...temp,
                [_.camelCase(keyPair[0])]: keyPair[1]
            }
        }

    })
    if (temp['url']) {
        return temp
    }


    return null
})
const parsed = {
    'iptvIndia': _.uniq(dataSets)
}
fs.writeFileSync('./data/parsedData.json', JSON.stringify(parsed))