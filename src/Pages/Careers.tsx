import React, {useEffect} from 'react'
import Benefits from '../Components/Careers/Benefits'
import CareersHero from '../Components/Careers/CareersHero'
import Map from "../Components/Careers/Map"
import Team from '../Components/Careers/Team'
import Vision from '../Components/Careers/Vision'
import "../styles/Careers/OurMission.css"

function Careers() {

    useEffect(() => {
        const nav: any = document.querySelector(".header");

        nav.style.background = "#f8faff";
    }, [])
    return (
        <div className="careers">
                
                <CareersHero/>
                
                <Map/>
                
                <div className="ourMission">
                    <h2>
                        <span>Our</span>
                        <span>Mission</span>
                    </h2>
                    <p>Building genuine connections by enabling personalized conversational commerce. Curating powerful UX/UI human interface digital software for a 2020 Modern World. We believe the future is built by enabling humans to exchange energy with humans.</p>
                </div>
                
                <Benefits/>
                
                <Vision/>
                
                <Team/>
        </div>
    )
}

export default Careers
