// {baseDomain}/news/something-important
import { useRouter } from 'next/router'

const DetailPage = () => {
  const router = useRouter();

  const { query } = router;

  return <h1>The DetailPage {query.newsId}</h1>
}
export default DetailPage;