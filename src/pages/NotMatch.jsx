import React from 'react'
import Header from '../components/header'

class notMatch extends React.Component{
    render(){
        return(
            <div>
                <Header {...this.props}/>
                <h4>URL ERROR</h4>
            </div>
        )
    }
}
export default notMatch