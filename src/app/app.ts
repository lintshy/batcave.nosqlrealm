import express from 'express'
import bodyParser from 'body-parser';

import { graphqlSetup } from '../graphql'
import { getMongooseConnection } from '../store/db/connector'


const app = express()
const port = process.env.PORT


app.use('/iptv', bodyParser.json(), graphqlSetup)
getMongooseConnection().then(d => {
    app.listen(port, () => console.log(`iptv container up and running on ${port}!`))

}).catch(e => {
    console.log(`Unable to connect to batcave-db. App aborted...${e}`)
})
