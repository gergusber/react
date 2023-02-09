import EventsList from '../components/EventsList'
import { useLoaderData } from 'react-router-dom'

const EventsPage = () => {
  const data = useLoaderData()
  const { events } = data;

  return <>
    <EventsList events={events} />
  </>
};

export default EventsPage;


export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) { 
    return { isError: true, message: 'Could not fetch events' }
  } else {
    // const resData = await response.json();
    // setFetchedEvents(resData.events);
    // const res = new Response('data', {
    //   status: 201
    // })
    return response;
  }
} 