import { Channel } from '../store/models/channels'

export const rootValue = {
    channels: async () => {
        const channels = await Channel.find()
        return channels

    },
    addChannel: (args: any) => {
        const name = args.name
        return name
    }
}