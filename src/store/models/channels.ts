import mongoose from 'mongoose'

const schema = mongoose.Schema

const channelSchema = new schema({
    tvgId: String,
    tvgName: String,
    tvgLogo: String,
    groupTitle: String,
    url: String

})

export const Channel = mongoose.model('channels', channelSchema)
