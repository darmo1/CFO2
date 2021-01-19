import React from 'react'
import facebook from "../Img/facebook.svg"
import twitter from "../Img/twitter.svg"
import linkedin from "../Img/linkedin.svg"

const share = () => {
    return (
        <div className="single-article__socialMedia space-between mb-2 p-1-0">
            <a href="#">
                <img src={facebook} alt="facebook"/>
            </a>
            <a href="#">
                <img src={twitter} alt="twitter"/>
            </a>
            <a href="#">
                <img src={linkedin} alt="linkedin"/>
            </a>
        </div>
    )
}

export default share
