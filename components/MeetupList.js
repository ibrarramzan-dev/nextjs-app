import classes from "./MeetupList.module.css";
import Link from 'next/link';

function MeetupList() {
  return (
    <div className={classes.container}>
      <h1>Meetup List</h1>
      <ul>
        <li>
          <Link href="/1">Meetup 1</Link>
        </li>
        <li>
          <Link href="/2">Meetup 2</Link>
        </li>
        <li>
          <Link href="3">Meetup 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default MeetupList;