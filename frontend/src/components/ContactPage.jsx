import React from 'react'
import Layout from './common/Layout'
import ChatBox from './common/ChatBox'
import Contact from './common/Contact'
import Hero from './common/Hero'
import AboutUs from './common/AboutUs'

function ContactPage() {
  return (
    <>
    <Layout>
        
        <Hero/>
        <Contact/>
        <AboutUs/>
    </Layout>
    </>
  )
}

export default ContactPage
