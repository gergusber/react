import EventsList from '../components/EventsList'


const EventsPage = () => {
  const DUMMY_ITEMS = [
    {
      id: 'E1',
      title: 'German birthday',
      image: 'https://img.freepik.com/free-vector/happy-birthday-flags-confetti-card_1017-32699.jpg',
      date:'06/01/1992'
    },
    {
      id: 'E2',
      title: 'Camila birthday',
      image: 'https://img.freepik.com/free-vector/happy-birthday-flags-confetti-card_1017-32699.jpg',
      date: '25/01/1992'
    }
  ]
  return <>
    <h2>Event page!</h2>
    <EventsList events={DUMMY_ITEMS} />
  </>
};

export default EventsPage