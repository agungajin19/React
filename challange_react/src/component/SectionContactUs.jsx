import React from 'react'

class SectionContactUs extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-5" id="sidebar">
                        <div className="contact-sidebar">
                            <div className="overlay"></div>
                            <img src={require("../assets/img/logo-ALTA-v2.png")} className="sidebar-logo"/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact-form">
                            <form action="index.html">
                                <h1>Contact Us</h1>
                                <div className="form-group">
                                    <label for="fullname">Full Name<span>*</span></label>
                                    <input type="text" id="fullname" name="fullname" required className="form-controls" placeholder="John Doe"/>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email Address<span>*</span></label>
                                    <input type="text" id="email" name="email" required className="form-controls" placeholder="example@alterra.id"/>
                                </div>
                                <div className="form-group">
                                    <label for="phone">Phone Number<span>*</span></label>
                                    <input type="text" id="phone" name="phone" required className="form-controls" placeholder="085554447900"/>
                                </div>
                                <div className="form-group">
                                    <label for="role">Role</label>
                                    <select id="role" name="role" default="select">
                                        <option value="Select" disabled selected>--Select--</option>
                                        <option value="Front-End Engineer">Front-End Engineer</option>
                                        <option value="Back-End Engineer">Back-End Engineer</option>
                                        <option value="Full-Stack Engineer">Full-Stack Engineer</option>
                                        <option value="UI/UX Designer">UI/UX Designer</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message"></textarea>
                                </div>
                                <input className="btn btn-primary" type="submit" value="Submit"/>
                            </form>
                        </div> 
                    </div>
                </div>
        </div>
        )
    }
}
export default SectionContactUs
