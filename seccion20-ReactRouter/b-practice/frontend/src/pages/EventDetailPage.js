import EventItem from '../components/EventItem'
import { json, useRouteLoaderData, redirect } from "react-router-dom";

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail')

  return <EventItem event={data.event} />
};

export default EventDetailPage

export async function loader({ request, params }) {
  console.log('params.eventId', params.eventId)

  const response = await fetch('http://localhost:8080/events/' + params.eventId);
  console.log('response', response)

  if (!response.ok) {
    return json({ message: 'Could not fetch details for selected event.' },
      { status: 500 })
  } else {
    return response;
  }
} 

export async function action({ request, params }) {
  const { eventId } = params;

  const response = await fetch('http://localhost:8080/events/' + eventId,{
    method: request.method// we extract the method from the  startDeleteHandler of the event Item
  });

  if (!response.ok) {
    return json({ message: 'Could not delete event' },
      { status: 500 })
  } else {
    return redirect('/events');
  }
} 