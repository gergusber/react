import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';
import classes from './Error.module.css';
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error ocurred';
  let message = 'something went wrong'

  if (error.status === 500)
    message = error.data.message

  if (error.status === 404) {
    title = 'Not found'
    message = 'Could not find resource or page'
  }


  return <>
    <MainNavigation />
    <main >
      <PageContent title={title}>
        <p> {message}</p>
      </PageContent>
    </main>
  </>
};

export default ErrorPage