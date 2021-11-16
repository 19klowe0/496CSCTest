import * as React from 'react'
import Nav from '../components/nav'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {motion} from "framer-motion"
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div>
      <motion.div inital ="hidden" animate= "visible" variants= {{
        hidden:{
          scale: .8, 
          opacity:0
        }, 
        visible:{
          scale: 1, 
          opacity:1, 
          transition: {
            delay:4
          }
        }
      }}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      </motion.div>
      <StaticImage
               alt="frog picture that I liked"
               src="../images/frog.jpg"
      />
      <dark-button>
        Toggle Dark Mode
      </dark-button>
      </div>
    </Layout>
  )
}


export default IndexPage