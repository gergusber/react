import { useRouter } from 'next/router'
import MeetupDetail from "../../components/meetups/MeetUpDetail";
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://<user>:<password>@<cluster>.4ryh4fh.mongodb.net/meetups?retryWrites=true&w=majority";

const DetailMeetupPage = (props) => {
  return <MeetupDetail id={props.meetup.id}
    title={props.meetup.title}
    image={props.meetup.image}
    address={props.meetup.address} />
}


export const getStaticPaths = async () => {
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const db = client.db();

  const meetupsCollections = db.collection('meetups');
  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  console.log(meetups);

  client.close();



  return {
    fallback: false,  // false means that are all paths generated, but true, means that you have some of the paths 
    paths: meetups.map(m => ({ params: { meetupId: m._id.toString() } }))
  }
}


export const getStaticProps = async (context) => {
  const { meetupId } = context.params;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const db = client.db();

  const meetupsCollections = db.collection('meetups');
  const idToLOok = new ObjectId(meetupId);
  const meetup = await meetupsCollections.findOne({ _id: idToLOok });

  console.log(meetup);

  client.close();


  return {
    props: {   //returns the props object that will be consumed from the component
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      }
    },
    revalidate: 10 //this unlocks the incremental static generation. gives a number of seconds where nextjs will re generate the page.
  }
}


export default DetailMeetupPage;
