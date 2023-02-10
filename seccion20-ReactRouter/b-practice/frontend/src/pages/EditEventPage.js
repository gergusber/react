import { useRouteLoaderData } from "react-router-dom";
import EventForm from '../components/EventForm'


const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail')

  return <>
      <EventForm method={'edit'} event={data.event} />
  </>
};

export default EditEventPage