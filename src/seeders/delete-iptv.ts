import * as _ from 'lodash'

import { getMongooseConnection } from '../store/db/connector'
import { Channel } from '../store/models/channels'

export const deleteIptv = async () => {

    const client = await getMongooseConnection()
    const results = await Channel.collection.deleteMany({})
    console.log(results.deletedCount)
    client.close()
}

deleteIptv().then(d => {
    process.exit()
}).catch(e => {
    process.exit(1)
})