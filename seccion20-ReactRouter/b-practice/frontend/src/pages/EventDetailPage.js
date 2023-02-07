import { Link, useNavigate } from 'react-router-dom'
import EventItem from '../components/EventItem'
import { useParams } from "react-router-dom";
const DUMMY_ITEMS = [
  {
    id: 'E1',
    title: 'German birthday',
    image: 'https://img.freepik.com/free-vector/happy-birthday-flags-confetti-card_1017-32699.jpg',
    date: '06/01/1992'
  },
  {
    id: 'E2',
    title: 'Camila birthday',
    image: 'https://img.freepik.com/free-vector/happy-birthday-flags-confetti-card_1017-32699.jpg',
    date: '25/01/1992'
  }
]

const EventDetailPage = () => {
  const param = useParams();
  const event = DUMMY_ITEMS.find(x => x.id === param.eventId);
  return <>
    <EventItem event={event} />
  </>
};

export default EventDetailPage