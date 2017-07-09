// pages/index.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
export default () => (
    <Layout>
      <h1>Next.js Course</h1>
      <ul>
        <PostLink id="basic-setup-of-nextjs" title="Basic setup of Next.js"/>
        <PostLink id="navagtion-between-pages" title="Navigation between Pages"/>
        <PostLink id="using-shared-component" title="Using shared component"/>
        <PostLink id="create-dynamic-pages" title="Create Dynamic Pages"/>
      </ul>
    </Layout>
)
