// pages/index.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
export default () => (
    <Layout>
      <h1>Next.js Course</h1>
      <ul>
        <PostLink title="Basic setup of Next.js"/>
        <PostLink title="Navigation between Pages"/>
        <PostLink title="Using shared component"/>
        <PostLink title="Create Dynamic Pages"/>
      </ul>
    </Layout>
)
