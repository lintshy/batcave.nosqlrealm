const mongoose = require('mongoose')

const schema = mongoose.Schema

const channelSchema = new schema({
    tvgId: String,
    tvgName: String,
    tvgLogo: String,
    groupTitle: String,
    url: String

})