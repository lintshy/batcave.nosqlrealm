import { Channel } from '../store/models/channels'
import { ChannelInput } from '../store/types/channel.types'
import { Document } from 'mongoose'

export const rootValue = {
    channels: async () => {
        try {
            const channels = await Channel.find()
            console.log(`Channels queried `)
            return channels
        }
        catch (e) {
            console.log(`query failed - ${e}`)
            return e
        }


    },
    addChannel: async (args: any): Promise<Document> => {
        try {
            console.log(`trying to add channel with ${JSON.stringify(args)} `)
            const channel = new Channel(args.channel)
            const results = await channel.save()
            console.log(`Channel added - ${results}`)
            return results

        }
        catch (e) {
            console.log(`channel couldnt be added - ${e}`)
            return e
        }



    }
}