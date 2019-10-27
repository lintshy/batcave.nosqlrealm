import * as _ from 'lodash'
require('dotenv').config()
import { getConnection } from '../store/connector'
import { iptvData } from '../static/data/parsedData'
const url = process.env.MONGO_URL

export const seedIptv = async () => {
    const client = await getConnection(url)
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