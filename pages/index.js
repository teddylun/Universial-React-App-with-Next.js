// pages/index.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
      <h1>Next.js Course</h1>
      <ul>
        {props.shows.map(({show}) => (
          <li key={show.id}>
            <Link as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index