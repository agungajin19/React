import React from 'react'
import logo from '../logo.svg'
import '../styles/header.css'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import {actions, store} from '../store'

class Header extends React.Component{
    handleSignOut = () =>{
        store.setState({status_login : false})
        // const self = this

        // localStorage.removeItem('status_login', false)
        this.props.history.push("/")
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row" id="navbarTogglerDemo01">
                    <div className="col-2 p-0">
                        <img src={logo} style={{width:'70px'}}/>
                        <a className="navbar-brand" href="#">KabarKabar</a>
                    </div>
                    <div className="col-5  p-0">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{paddingLeft:'70px'}}>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>this.props.onCategory('Indonesia')} to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>this.props.onCategory('Health')} to='/news-category/health'>Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>this.props.onCategory('Technology')} to='/news-category/technology'>Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>this.props.onCategory('Sport')} to='/news-category/sport'>Sport</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/profile'>Profile</Link>
                                </li>
                                

                            </ul>
                        
                    </div>
                    <div className="col-3">
                    <div className="search-container">
                        <form action="/action_page.php" style={{paddingLeft:'50px'}}>
                        <input type="text" placeholder="Search" onChange={e=>this.props.prosesSearch(e)}/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                    </div>
                    <div className='col-2 pl-5'>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/signin'>Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.handleSignOut}>Sign Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default connect('listNews, listNewsEverything, isLoading, isLoadingEverything, category',
    actions
)(withRouter(Header))