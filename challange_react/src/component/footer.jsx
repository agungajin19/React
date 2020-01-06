import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer-background">
                <div className="container">
                    <div className="row align-items-center text-align-center">
                        <div className="col-md-4 col-12 footer-center">
                            <a href="" className="footer-logo">
                                <img src={require("../assets/img/logo-ALTA-v2.png")} style={{width:"120"}} />
                            </a>
                        </div>
                        <div className="col-md-4 col-6 footer-socialmedia">
                            <h2>Social Media</h2>
                            <a href="">
                                <img src={require("../assets/img/ic_fb.png")}/>
                            </a>
                            <a href="">
                                <img src={require("../assets/img/ic-twitter.png")}/>
                            </a>
                            <a href="">
                                <img src={require("../assets/img/ic-instagram.png")} />
                            </a>
                            <a href="">
                                <img src={require("../assets/img/ic-linkedin.png")}/>
                            </a>
                        </div>
                        <div className="col-md-4 col-6  copyright">
                            <h2>Copyright &copy; 2019 alterra </h2>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer