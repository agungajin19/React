import React from 'react'
import Header from '../component/Header'
import Footer from '../component/footer'
import SectionAboutUs from '../component/SectionAboutUs'

class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <SectionAboutUs/>
                <Footer/>
            </div>
        )
    }
}
export default AboutUs