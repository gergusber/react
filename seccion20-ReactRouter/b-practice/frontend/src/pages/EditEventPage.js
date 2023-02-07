import { Link, useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import EventForm from '../components/EventForm'

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
const EditEventPage = () => {
  const param = useParams();
  const event = DUMMY_ITEMS.find(x => x.id === param.eventId);
  return <>
    <h2>Edit Event page!</h2>
    <EventForm method={'edit'} event={event} />
  </>
};

export default EditEventPage