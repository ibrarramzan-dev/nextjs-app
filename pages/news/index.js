import { Fragment } from 'react';

function NewsPage() {
  
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <a href="/news/1">News Article 1</a>
        </li>
        <li>
          <a href="/news/2">News Article 2</a>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage