import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage'
import EventsPage, { loader as eventsLoader } from './pages/EventsPage'
import EventDetailPage, 
{ loader as eventDetailLoader, 
  action as actionEventDelete } from './pages/EventDetailPage'
import EditEventPage from './pages/EditEventPage'
import NewEventPage, { action as actionNewEvent } from './pages/NewEventPage'
import EventsLayout from './pages/EventsRoot';
import ErrorPage from "./pages/Error";
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: actionEventDelete
              },
              {
                path: 'edit',
                element: <EditEventPage />,
              }
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: actionNewEvent
          },
        ]
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
