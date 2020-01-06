import React from 'react'

class Header extends React.Component{
    render(){
        return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-12">
                        <div className="header-img">
                            {/* <img src="../assets/img/logo-ALTA.png"/> */}
                            <img src={require('../assets/img/logo-ALTA.png')}/>
                        </div>
                    </div>
                    <div className="col-md-9 col-12">
                        <div className="header-nav">
                            <ul className="header-nav__list list-unstyled">
                                <li>
                                    <a href="index.html" className="active">HOME</a>
                                </li>
                                <li>
                                    <a href="about.html">ABOUT</a>
                                </li>
                                <li>
                                    <a href="experience.html">EXPERIENCE</a>
                                </li>
                                <li>
                                    <a href="contact.html">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default Header