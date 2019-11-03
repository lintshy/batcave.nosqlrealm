import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'
const config = require('../../../config')


const options = { useNewUrlParser: true, useUnifiedTopology: true }
const url = config.mongoUrl


export const getMongoConnection = async (): Promise<MongoClient> => {

    const client = await MongoClient.connect(url, options)
    return client
}

export const getMongooseConnection = async (): Promise<mongoose.Connection> => {

    const mongooseConnection = await mongoose.connect(url, options)
    return mongooseConnection.connection
}