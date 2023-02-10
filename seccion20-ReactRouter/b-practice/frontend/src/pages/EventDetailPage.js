import EventItem from '../components/EventItem'
import EventList from '../components/EventsList'
import { Suspense } from 'react';
import { json, useRouteLoaderData, redirect, defer, Await } from "react-router-dom";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData('event-detail')

  return <>
    <Suspense fallback={<p style={{ textAlign: 'center' }} >Loading...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventItem event={loadedEvent} />}
      </Await>
    </Suspense>
    <Suspense fallback={<p style={{ textAlign: 'center' }} >Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventList events={loadedEvents} />}
      </Await>
    </Suspense>
  </>
};

export default EventDetailPage


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

const loadEvent = async (id) => {
  const response = await fetch('http://localhost:8080/events/' + id);
  console.log('response', response)

  if (!response.ok) {
    return json({ message: 'Could not fetch details for selected event.' },
      { status: 500 })
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

export async function loader({ request, params }) {
  const { eventId } = params
  return defer({
    events: loadEvents(),
    event: await loadEvent(eventId) // wait for the event and load the page without loading the events, .
  })
}

export async function action({ request, params }) {
  const { eventId } = params;

  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method// we extract the method from the  startDeleteHandler of the event Item
  });

  if (!response.ok) {
    return json({ message: 'Could not delete event' },
      { status: 500 })
  } else {
    return redirect('/events');
  }
} 