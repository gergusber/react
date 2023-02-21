import MeetupItem from "../../components/meetups/MeetupItem";
import { useRouter } from 'next/router'

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'Belgium meetup',
//     image: 'https://thumbs.dreamstime.com/b/brujas-b%C3%A9lgica-cuadrado-de-grote-markt-en-la-salida-del-sol-141601000.jpg',
//     address: 'some addres 5, 12, something',
//     description: 'first meetup'
//   },
//   {
//     id: 'm2',
//     title: 'Barcelona meetup',
//     image: 'https://media.traveler.es/photos/63838947050e0f92cd80c982/master/pass/GettyImages-1392907424.jpg',
//     address: 'napols 323, 1ro 2da, 8034',
//     description: 'Second meetup'
//   }
// ]
const DetailMeetupPage = () => {
  const router = useRouter();
  // const onAlgoHandler = (enteredMeetUp) => {
  //   console.log(enteredMeetUp)
  // }
  // const { query } = router;
  // const meetupData = DUMMY_MEETUPS.find(m => { m.id === query.meetupId })
  // return <MeetupItem title={meetupData.title}
  //   image={meetupData.image}
  //   address={meetupData.address}
  //   actions={onAlgoHandler} />
  return <MeetupItem />
  
}
export default DetailMeetupPage;