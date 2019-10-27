import * as _ from 'lodash'

import { getMongoConnection } from '../store/connector'
import { iptvData } from '../static/data/parsed-data'


export const seedIptv = async () => {
    const client = await getMongoConnection()
    const db = client.db('batcave-db')
    const data = iptvData.iptvIndia
    const bulkOps = _.map(data, item => {
        return {
            insertOne: { document: item }
        }
    })
    const result = await db.collection('iptv').bulkWrite(bulkOps)
    client.close()
    console.log(result)

}

seedIptv().then(d => {

}).catch(e => {
    console.log(e)
})