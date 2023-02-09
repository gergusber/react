import EventsList from '../components/EventsList'
import { useLoaderData } from 'react-router-dom'

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
    throw new Response(
      JSON.stringify({ message: 'Could not fetch events' }),
      { status: 500 })
  } else {
    // const resData = await response.json();
    // setFetchedEvents(resData.events);
    // const res = new Response('data', {
    //   status: 201
    // })
    return response;
  }
} 