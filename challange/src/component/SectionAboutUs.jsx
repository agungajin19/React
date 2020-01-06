import React from 'react'

class SectionAboutUs extends React.Component{
    render(){
        return(
            <section>
                {/* <!--ABOUT ME--> */}
                <div className="container-fluid aboutme-background">
                    <div className="container ">
                        <h1>ABOUT ME.</h1>
                    </div>
                </div>
                {/* <!-- ISI PARAGFRAF dan TABEL dan GAMBAR--> */}
                <div className="container">
                    <div className="row">
                        {/* <!-- ISI PARAGFRAF, TABEL--> */}
                        <div className="col-md-6 col-sm-12">
                            <div className="about-paragafTabel">
                                <p>Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce sites and internal frameworks. Specializes in AngularJS and responsive design.</p>
                                <h2>Education</h2>
                                <ul>
                                    <li>
                                        <h3>2014</h3>
                                        <h4>DIPLOMA</h4>
                                        <p>Computer Engineering - University of Chicago</p>
                                    </li>
                                    <li>
                                        <h3>2015</h3>
                                        <h4>BACHELOR DEGREE</h4>
                                        <p>BS Computer Engineering - University of Chicago</p>
                                    </li>
                                </ul>
                                <h5>Here's few technologies I've been working with recently:</h5>
                                <table border="1">
                                    <tr>
                                        <td>HTML & CSS</td>
                                        <td>Serverless</td>
                                        <td>Scrum</td>
                                    </tr>
                                    <tr>
                                        <td>Programming</td>
                                        <td>Restful API</td>
                                        <td>Test-Driven Dev</td>
                                    </tr>
                                    <tr>
                                        <td>Database</td>
                                        <td>javascript</td>
                                        <td>Software Testing</td>
                                    </tr>
                                    <tr>
                                        <td>Git & Github</td>
                                        <td>Sigle Page App</td>
                                        <td>UX/UI Designer</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        {/* <!-- GAMBAR--> */}
                        <div className="col-md-6 col-sm-12">
                            <div className="about-figure">
                                <div className="about-figure-atas">
                                    <img src={require("../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SectionAboutUs