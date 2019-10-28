
import { buildSchema } from 'graphql'

export const schema = buildSchema(`
    type Channel{
        tvgId: String,
        tvgName: String,
        tvgLogo: String,
        groupTitle: String,
        url: String
    }
    input channel{
        tvgId: String,
        tvgName: String,
        tvgLogo: String,
        groupTitle: String,
        url: String
    }
    type RootQuery{
        channels:[Channel]!
    }
    type RootMutation{
        addChannel(channel:channel):Channel
    }
    schema{
            query: RootQuery
            mutation: RootMutation
    }
`)


