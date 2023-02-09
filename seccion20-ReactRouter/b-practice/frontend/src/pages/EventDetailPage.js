import EventItem from '../components/EventItem'
import { useParams, json, useLoaderData } from "react-router-dom";

const EventDetailPage = () => {
  const param = useParams(); 
  const data = useLoaderData(null,param)
  const { event } = data;


  return <>
    <EventItem event={event} />
  </>
};

export default EventDetailPage

export async function loader({ request, params }) {
  // request.url //for getting query params
  const id = params.eventId
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    return json({ message: 'Could not fetch details for selected event.' },
      { status: 500 })
  } else {
    return response;
  }
} 