// {baseDomain}/

import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Belgium meetup',
    image: 'https://thumbs.dreamstime.com/b/brujas-b%C3%A9lgica-cuadrado-de-grote-markt-en-la-salida-del-sol-141601000.jpg',
    address: 'some addres 5, 12, something',
    description: 'first meetup'
  },
  {
    id: 'm2',
    title: 'Barcelona meetup',
    image: 'https://media.traveler.es/photos/63838947050e0f92cd80c982/master/pass/GettyImages-1392907424.jpg',
    address: 'napols 323, 1ro 2da, 8034',
    description: 'Second meetup'
  }
]

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, [DUMMY_MEETUPS])

  return <MeetupList meetups={loadedMeetups} />
}
export default HomePage;