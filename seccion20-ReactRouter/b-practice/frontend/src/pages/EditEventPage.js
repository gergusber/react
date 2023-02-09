import { useRouteLoaderData } from "react-router-dom";
import EventForm from '../components/EventForm'


const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail')

  return <>
    <h2>Edit Event page!</h2>
    <EventForm method={'edit'} event={data.event} />
  </>
};

export default EditEventPage