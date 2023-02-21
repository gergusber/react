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

const DetailMeetupPage = () => {
  const router = useRouter();
  // const { query } = router;

  const onAlgoHandler = (enteredMeetUp) => {
    console.log(enteredMeetUp)
  }

  return <MeetupDetail
    title={DUMMY_MEETUPS.title}
    image={DUMMY_MEETUPS.image}
    address={DUMMY_MEETUPS.address} />
}
export default DetailMeetupPage;