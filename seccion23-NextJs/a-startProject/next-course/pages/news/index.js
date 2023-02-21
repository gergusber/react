// {baseDomain}/news

import { Fragment } from "react";
import { Link } from "next/link";


const NewsPage = () => {

  return <Fragment>
    <h1>The News Page</h1>
    <ul>
      <li>
        <Link href="/news/nextjs-is-a-great-framework">next is great</Link>
      </li>
      <li>
        <Link href="/news/something-else">Something Else</Link>
      </li>
    </ul>
  </Fragment>

}
export default NewsPage;