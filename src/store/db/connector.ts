import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'


const options = { useNewUrlParser: true, useUnifiedTopology: true }
const url = (process.env.MONGO_URL) ? process.env.MONGO_URL : ''
console.log(`url-${url}`)

export const getMongoConnection = async (): Promise<MongoClient> => {

    const client = await MongoClient.connect(url, options)
    return client
}

export const getMongooseConnection = async (): Promise<mongoose.Connection> => {

    const mongooseConnection = await mongoose.connect(url, options)
    return mongooseConnection.connection
}