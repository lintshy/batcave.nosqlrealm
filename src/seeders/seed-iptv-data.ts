import * as _ from 'lodash'

import { getMongooseConnection } from '../store/db/connector'
import { iptvData } from '../static/data/parsed-data'
import { Channel } from '../store/models/channels'


export const seedIptv = async () => {
    const client = await getMongooseConnection()
    const data = iptvData.iptvIndia
    const channels = _.filter(data, channel => channel !== null)
    const bulkOps = _.map(channels, item => {
        return {
            insertOne: { document: item, upsert: true }
        }
    })


    const results = await Channel.collection.bulkWrite(bulkOps)
    console.log(results)
    client.close()

}

seedIptv().then(d => {

}).catch(e => {
    console.log(e)
})