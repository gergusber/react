import classes from './EventsList.module.css';
import { Link, useNavigate } from 'react-router-dom'


function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            
            <Link to={`${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <p>  <Link to="..">back </Link></p>

    </div>
  );
}

export default EventsList;
