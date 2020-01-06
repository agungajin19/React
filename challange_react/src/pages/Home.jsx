import React from 'react'
import Header from '../component/Header'
import SectionHeader from '../component/SectionHome'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <SectionHeader />
            </div>
        )
    }
}

export default Home;