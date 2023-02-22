import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';
import Head from 'next/head'

const NewMeetupPage = () => {
  const router = useRouter()

  const addMeetupHandler = async (enteredMeetUp) => {
    console.log(enteredMeetUp)

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetUp),
      headers: { 'Content-Type': 'application/json' }
    })
    router.push('/')
  }

  return <>
    <Head>
      <title> Add new Meetup </title>
      <meta name='description' content='Add your own react meetup for networking opportunities !' />
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </>
}

export default NewMeetupPage;
