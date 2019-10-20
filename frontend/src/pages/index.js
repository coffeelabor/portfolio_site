import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Howdy</h1>
      <h2>This is just a test</h2>

      <p>
        Go to the <Link to="/home"> Home Page</Link>
      </p>
      <p>
        Check out my <Link to="/portfolio"> Portfolio</Link>
      </p>
      <p>
        More about <Link to="/about"> Me</Link>
      </p>
    </Layout>
  )

  //     return (
  //     <div>
  //       <h1>Howdy</h1>
  //       <h2>This is just a test</h2>

  //       <p>
  //         Go to the <Link to="/home"> Home Page</Link>
  //       </p>
  //       <p>
  //         Check out my <Link to="/portfolio"> Portfolio</Link>
  //       </p>
  //       <p>
  //         More about <Link to="/about"> Me</Link>
  //       </p>
  //     </div>
  //   )
}

export default IndexPage
