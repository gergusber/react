import EventItem from '../components/EventItem'
import { useParams, useLoaderData } from "react-router-dom";

const EventDetailPage = () => {
  const events = useLoaderData()

  const param = useParams();
  const event = events.find(x => x.id === param.eventId);
  return <>
    <EventItem event={event} />
  </>
};

export default EventDetailPage