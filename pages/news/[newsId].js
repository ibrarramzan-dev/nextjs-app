import { useRouter } from 'next/router';

export default () => {

  const router = useRouter();

  const { newsId } = router.query;
  // console.log('Query Param: ', router.query.newsId);

  // Send a request to the backend API to fetch the News item with the News Id

  

  return <h1>News Id: {newsId}</h1>
}