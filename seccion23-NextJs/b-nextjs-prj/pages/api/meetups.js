// /api/get-meetups
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://<user>:<password>@<cluster>.4ryh4fh.mongodb.net/meetups?retryWrites=true&w=majority";


const handler = async (req, res) => {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    const db = client.db();

    const meetupsCollections = db.collection('meetups');
    const meetups = await meetupsCollections.find().toArray();

    console.log(meetups);

    client.close();

    res.status(201).json({ message: 'meetup Inserted' })
  }

 
}

export default handler