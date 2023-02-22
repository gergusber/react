import MeetupItem from "../../components/meetups/MeetupItem";
import { useRouter } from 'next/router'
import MeetupDetail from "../../components/meetups/MeetUpDetail";

const DUMMY_MEETUPS = {
  id: 'm1',
  title: 'Belgium meetup',
  image: 'https://thumbs.dreamstime.com/b/brujas-b%C3%A9lgica-cuadrado-de-grote-markt-en-la-salida-del-sol-141601000.jpg',
  address: 'some addres 5, 12, something',
  description: 'first meetup'
}

const DetailMeetupPage = (props) => {
  const router = useRouter();
  // const { query } = router;

  const onAlgoHandler = (enteredMeetUp) => {
    console.log(enteredMeetUp)
  }

  return <MeetupDetail
    title={props.meetup.title}
    image={props.meetup.image}
    address={props.meetup.address} />
}



export const getStaticPaths = async () => {
  return {
    fallback: false,  // false means that are all paths generated, but true, means that you have some of the paths 
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}


export const getStaticProps = async (context) => {
  const { meetupId } = context.params;
  return {
    props: {   //returns the props object that will be consumed from the component
      meetup: {
        id: meetupId,
        title: 'Belgium meetup',
        image: 'https://thumbs.dreamstime.com/b/brujas-b%C3%A9lgica-cuadrado-de-grote-markt-en-la-salida-del-sol-141601000.jpg',
        address: 'some addres 5, 12, something',
        description: 'first meetup'
      }
    },
    revalidate: 10 //this unlocks the incremental static generation. gives a number of seconds where nextjs will re generate the page.
  }
}


export default DetailMeetupPage;
