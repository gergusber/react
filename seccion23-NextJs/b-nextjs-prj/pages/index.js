// {baseDomain}/
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://<user>:<password>@<cluster>.4ryh4fh.mongodb.net/meetups?retryWrites=true&w=majority";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const db = client.db();

  const meetupsCollections = db.collection('meetups');
  const meetups = await meetupsCollections.find().toArray();

  console.log(meetups);

  client.close();


  //usages:
  // fetch data from api when you want from data  on deployment . 
  return {
    props: {   //returns the props object that will be consumed from the component
      meetups: meetups.map(m => ({
        title: m.title,
        address: m.address,
        image: m.image,
        id: m._id.toString() // formated from the db data (due db object)
      }))
    },
    revalidate: 10 //this unlocks the incremental static generation. gives a number of seconds where nextjs will re generate the page.
  }
}


// export const getServerSideProps = async (context) => {

//   const { req, res } = context;
//   // console.log('reqquest : ', req)
//   // console.log('response : ', res)
//   //usages:
//   // fetch data from api when you want from data will not during the server but will be in the server side.
//   return {
//     props: {   //returns the props object that will be consumed from the component
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export default HomePage;