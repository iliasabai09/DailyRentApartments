// @ts-ignore
import * as mongoose from 'mongoose'

export function connectMongoose() {
	const url = 'mongodb+srv://iliasabaimain:y6BuFatkQVLjgcJZ@kovorking.lkiia.mongodb.net/'
	mongoose.connect(url)
		.then(() => console.log('Mongo is successfulli connected'))
		.catch((e: Error) => console.log('Error on connection mongoDb' + e.message))
}
