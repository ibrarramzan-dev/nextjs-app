import MeetupList from "../components/MeetupList";

function HomePage() {
  const meetupData = [
    {
      id: 1,
      image: "goku.jpg",
      title: "Meetup 1",
      address: "Planet Mars",
    },
    {
      id: 2,
      image: "goku.jpg",
      title: "Meetup 2",
      address: "Planet Jupiter",
    },
    {
      id: 3,
      image: "goku.jpg",
      title: "Meetup 3",
      address: "Planet Pluto",
    },
  ];

  return (
    <div>
      <MeetupList meetups={meetupData} />
    </div>
  );
}

export default HomePage;
