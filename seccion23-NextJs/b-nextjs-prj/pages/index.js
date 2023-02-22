// {baseDomain}/
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

const HomePage = (props) => {

  return <MeetupList meetups={props.meetups} />
};

// export async function getStaticProps() {}
export const getStaticProps = async () => {
//usages:
// fetch data from api when you want from data  on deployment . 
  return {
    props:{   //returns the props object that will be consumed from the component
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10 //this unlocks the incremental static generation. gives a number of seconds where nextjs will re generate the page.
  }
}


// export const getServerSideProps = async (context) => {

//   const { req, res } = context;
//   // console.log('reqquest : ', req)
//   // console.log('response : ', res)
//   //usages:
//   // fetch data from api when you want from data will not during the server but will be in the server side.
//   return {
//     props: {   //returns the props object that will be consumed from the component
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export default HomePage;