import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'

export const getMongoConnection = async (url: string): Promise<MongoClient> => {

    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    return client
}

export const getMongooseConnection = async (url: string): Promise<mongoose.Connection> => {

    const mongooseConnection = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    return mongooseConnection.connection
}