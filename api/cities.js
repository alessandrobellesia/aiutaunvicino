import { connectToDatabase } from '../helpers/db'

export default async (req, res) => {
	const db = await connectToDatabase(process.env.MONGODB_URI),
		collection = await db.collection('cities')

	if (req.method == 'GET' && req.query.cap) {
		res.status(200).json(
			await collection.find({ cap: req.query.cap }).toArray()
		)
	} else {
		res.status(400).send('Invalid request')
	}
}
