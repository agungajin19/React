import React from 'react'
import Header from '../components/header'
import {Redirect, Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import {actions, store} from '../store'

class Profile extends React.Component{
    render(){
        // const statusLogin = JSON.parse(localStorage.getItem('status_login'))
        // const fullname = localStorage.getItem('fullname')
        // const email = localStorage.getItem('email')

        const statusLogin = this.props.status_login
        const fullname = this.props.fullname
        const email = this.props.email
        console.log('ini email', email)

        if (statusLogin === false){
            return(
                <Redirect to={{pathname:"/signin"}}/>
                
            )
        }
        else{           
            return(
                <div className = 'text-center'>
 
                    <div className="card" style={{width: "50%"}}>
                        <div className="card-body">
                            <h5 className="card-title">Nama : {fullname}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Email : {email}</h6>
                        </div>
                        <Link to="/">Back to Home</Link>
                    </div>
                </div>
            )
        }
    }
}
export default connect('fullname, status_login, email',
    actions
)(withRouter(Profile))
