import Layout from '../components/MyLayout.js'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>this is course content.</p>
  </div>
)
export default (props) => (
  <Layout>
    <Content url={props.url}/>
  </Layout>
)