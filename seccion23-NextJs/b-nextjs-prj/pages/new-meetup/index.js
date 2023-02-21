import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (enteredMeetUp) => {
    console.log(enteredMeetUp)
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
export default NewMeetupPage;