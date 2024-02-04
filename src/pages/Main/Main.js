import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import ActiveTimeTracker from './ActiveTimeTracker'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            {/* <Achievement /> */}
            <Services />
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />
            <ActiveTimeTracker />
        </div>
    )
}

export default Main
