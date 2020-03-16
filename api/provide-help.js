import { connectToDatabase } from '../helpers/db'

export default async (req, res) => {
	const db = await connectToDatabase(process.env.MONGODB_URI),
		collection = await db.collection('provide-help')

	if (req.method == 'POST') {
		await collection.insertOne({
			...req.body,
			creationDate: new Date().getTime()
		})
		res.status(200).json({ status: true })
	} else {
		res.status(400).send('Invalid request')
	}
}
