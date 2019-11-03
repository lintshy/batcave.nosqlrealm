const fs = require('fs')
const _ = require('lodash')

const raw = fs.readFileSync('./iptvindia.txt').toString()
const items = raw.split('\r\n#EXTINF:-1')
const dataSets = _.map(items, item => {
    const divider = item.split('group-title')

    const irrelavant = divider[0]
    const relevant = divider[1]
    const strippedIrrelevant = irrelavant.split(' ')

    let parsed = {}
    let temp = {}
    _.forEach(strippedIrrelevant, item => {
        const keyPair = item.split('=')
        temp = {
            ...temp,
            region: 'India',
            [_.camelCase(keyPair[0])]: _.replace(_.trim(keyPair[1], /([\"])/, ''))
        }
    })
    if (divider.length > 1) {
        const strippedRelevant = relevant.split('\n')
        const split = _.split(_.trim(strippedRelevant[0]), ',')
        const genre = _.replace(split[0], /([\",=])/g, '')
        const finalGenre = genre.length === 0 ? 'General' : genre
        temp = {
            ...temp,
            genre: finalGenre,
            groupTitle: split[1],
            url: strippedRelevant[1]
        }
    }

    delete temp['']
    return temp


})
const parsed = {
    'iptvIndia': _.uniq(dataSets)
}

fs.writeFileSync('./data/parsedData2.json', JSON.stringify(parsed))