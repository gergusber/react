import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage'
import EventsPage, { loader as eventsLoader } from './pages/EventsPage'
import EventDetailPage,
{
  loader as eventDetailLoader,
  action as actionEventDelete
} from './pages/EventDetailPage'
import EditEventPage from './pages/EditEventPage'
import NewEventPage from './pages/NewEventPage'
import EventsLayout from './pages/EventsRoot';
import ErrorPage from "./pages/Error";
import { action as manipulateActionEvent } from './components/EventForm'
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: actionEventDelete,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateActionEvent,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateActionEvent,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
