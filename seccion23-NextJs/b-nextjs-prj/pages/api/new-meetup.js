// /api/new-meetup
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://<user>:<password>@<cluster>.4ryh4fh.mongodb.net/meetups?retryWrites=true&w=majority";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    const db = client.db();

    const meetupsCollections = db.collection('meetups');
    const result = await meetupsCollections.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'meetup Inserted' })
  }
}

export default handler