import { MongoClient } from 'mongodb'

export const getConnection = async (url: string): Promise<MongoClient> => {

    const client = await MongoClient.connect(url)
    return client
}