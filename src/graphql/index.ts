const graphqlHTTP = require('express-graphql');

import { schema } from './schema'
import { rootValue } from './root'


export const graphqlSetup = graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
})