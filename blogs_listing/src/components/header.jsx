import React from 'react'
import logo from '../logo.svg'
import '../styles/header.css'

class Header extends React.Component{
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
                                    <a className="nav-link" href="#">Sepakbola</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Ekonomi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Politik</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hiburan</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Lainnya
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Berita Receh</a>
                                    <a class="dropdown-item" href="#">Berita Lokal</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Berita Gajelas</a>
                                    </div>
                                </li>
                            </ul>
                        
                    </div>
                    <div className="col-3">
                    <div className="search-container">
                        <form action="/action_page.php" style={{paddingLeft:'50px'}}>
                        <input type="text" placeholder="Search" name="search"/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                    </div>
                    <div className='col-2 pl-5'>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Masuk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Daftar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Header
