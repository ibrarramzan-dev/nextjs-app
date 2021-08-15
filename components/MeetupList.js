import classes from "./MeetupList.module.css";
import Link from 'next/link';
import MeetupItem from "./MeetupItem";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

function MeetupList(props) {
  console.log('Props: ', props);
  return (
    <ul>
      {
        props.meetups.map(meetup => {
          return <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        })
      }
    </ul>
  );
}

MeetupList.defaultProps = {
  key: 1,
  id: 5,
  image: 'goku.jpg',
  title: 'Meetup 2',
  address: 'Planet Mars'
}

export default MeetupList;