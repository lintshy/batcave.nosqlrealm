import mongoose from 'mongoose'

import { ChannelMeta } from '../types/channel.types'
const schema = mongoose.Schema

const channelSchema = new schema(ChannelMeta)

export const Channel = mongoose.model('channels', channelSchema)
