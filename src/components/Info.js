import React from "react";
import logo from "../IMG_2603.jpg"
import mail from "../Mail.svg"
import linkedin from "../linkedin.svg"

export default function Info(){
    return(
        <div className="info">
            <div className="info-content">
                <img src={logo} className='info-image'/>
                <h3>Nikhil Srivastava</h3>
                <h5>Frontend Developer</h5>
                <p>caterpillarlabs.com</p>
                <div class="btn">
                    <button className="btn-mail"><img src={mail} className="button-logo"/>Email</button>
                    <button className="btn-linkedin"><img src={linkedin} className="button-logo"/>Linkedin</button>
                </div>
            </div>
        </div>
    )
}