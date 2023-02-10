import EventsList from '../components/EventsList'
import { json, useLoaderData } from 'react-router-dom'

const EventsPage = () => {
  const data = useLoaderData()
  const { events } = data;

  if (data.isError) {
    return <p>{data.message}</p>
  }
  return <>
    <EventsList events={events} />
  </>
};

export default EventsPage;


export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Could not fetch events' },
      { status: 500 })
  } else {
    return response;
  }
} 
