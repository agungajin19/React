import React from 'react'
import Header from '../components/header'
import SigninSection from '../components/signin'
import axios from 'axios'

class Signin extends React.Component{
    state = {
        email : 'agungajin19@gmail.com',
        password : 'password'
    }
    handleMasukan = (e) =>{
        const self = this
        self.setState({[e.target.name] : e.target.value})
    }
    handleCategory = async (e) => {
        return true
    }
    handleLogin = () =>{
        const data = {
            email : 'agungajin19@gmail.com',
            password : 'password'
        }
        const self = this
        axios
            .post('https://login-agung.free.beeceptor.com/login', data)
            .then(function(response){
                console.log(response.data)
                if (response.data.hasOwnProperty('api_key')){
                    localStorage.setItem('fullname', response.data.fullname)
                    localStorage.setItem('email', response.data.email)
                    localStorage.setItem('status_login', true)
                    self.props.history.push("/profile")
                }
            })
            .catch(function(error){
            })
    }
    
    render(){
        return(
            <div>
                <Header category = {e => this.handleCategory(e)}
                {...this.props}/>
                <SigninSection
                masukan={e=>this.handleMasukan(e)}
                login = {this.handleLogin}
                />
            </div>
        )
    }
}
export default Signin