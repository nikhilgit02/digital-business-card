import React from "react";
import insta from "../Instagram Icon.svg"
import twitter from "../Twitter Icon.svg"
import fb from "../Facebook Icon.svg"
import git from "../GitHub Icon.svg"

export default function Footer(){
    return(
        <div className="info">
            <div className="footer">
                <img src={twitter}/>
                <img src={fb}/>
                <img src={insta}/>
                <img src={git}/>
            </div>
        </div>
    )
}