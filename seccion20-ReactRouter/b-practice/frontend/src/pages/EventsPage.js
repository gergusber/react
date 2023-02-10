import EventsList from '../components/EventsList'
import { json, useLoaderData, defer, Await } from 'react-router-dom'
import { Suspense } from 'react';

const EventsPage = () => {
  const { events } = useLoaderData() // , isError, message
  return <Suspense fallback={<p style={{ textAlign: 'center' }} >Loading...</p>}>
    <Await resolve={events}>
      {(loadedEvents) => <EventsList events={loadedEvents} />}
    </Await>
  </Suspense>
};

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Could not fetch events' },
      { status: 500 })
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents()
  })
} 
