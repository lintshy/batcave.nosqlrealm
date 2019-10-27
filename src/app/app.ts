import express from 'express'
import bodyParser from 'body-parser';

import { graphqlSetup } from '../graphql'

require('dotenv').config()
const app = express()
const port = process.env.PORT


app.use('/iptv', bodyParser.json(), graphqlSetup)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))