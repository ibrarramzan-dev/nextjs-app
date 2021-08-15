import styled from 'styled-components'

function MeetupItem(props) {
  const { id, image, title, address } = props;

  const Button = styled.button`
    font-size: 24px;
    font-weight: bold;
    color: green;
    padding: 10px;
    border-radius: 5px;
  `
  return (
    <li>
      <h1>Meetup Item {id}</h1>

      <Button onClick={() => alert("I'm just clicked :)")}>I am a Button</Button>

      <ul>
        <li>
          <b>Id: </b>
          {id}
        </li>
        <li>
          <b>Image: </b>
          <img src="./goku.jpg" alt="Goku" width="150" height="150" />
        </li>
        <li>
          <b>Title: </b>
          {title}
        </li>
        <li>
          <b>Address: </b>
          {address}
        </li>
      </ul>
    </li>
  );
}

export default MeetupItem;
