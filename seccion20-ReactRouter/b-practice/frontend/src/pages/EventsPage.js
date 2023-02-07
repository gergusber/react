import EventsList from '../components/EventsList'
import { useLoaderData } from 'react-router-dom'


const EventsPage = () => {
  const events = useLoaderData()
  console.log( ' holis ')
  return <>
    <h2>Event page!</h2>
    <EventsList events={events} />
  </>
};

export default EventsPage