import React from 'react'

class SectionHome extends React.Component{
    render(){
        return(
        <section className='home'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5 col-sm-12">
                                <div className="home-profile">
                                    <img src={require("../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")}/>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <div className="home-caption">
                                    <h3>Hi, my name is</h3>
                                    <h1>Anne Sullivan</h1>
                                    <h2>I build things for web</h2>
                                </div>
                                <div className="home-submit">
                                    <form action="contact.html">
                                    <input className="btn btn-primary" type="submit" value="Get in Touch"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default SectionHome