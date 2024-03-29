import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import Me from '../assets/pictures/aboutMe.jpg';
import highFive from '../assets/lotties/highfive.json';
import "./TypeText.css";
import "../stylesheets/AboutMe.css";

type AboutMeProps =  {
    text: string,
}

type AboutMeState = {
}

class AboutMe extends React.Component<AboutMeProps,AboutMeState> {
    constructor(props: AboutMeProps) {
        super(props)
        this.state = {
        }  
    }

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: highFive,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

        return(
            <div>
                <div style={{position:"absolute",height:"100vh",width:"100vw",display:"flex"}}>
                    <div className="picContainer">
                        <img src={Me} className="pic" alt="me"/>
                        <div className="links">
                            <Link to='/Home'>
                                <button className="button">
                                    Home
                                </button>
                            </Link>
                            <Link to='/Portfolio'>
                            <button className="button">
                                Portfolio
                            </button>
                            </Link>
                            <Link to='/WorkExperience'>
                            <button className="button">
                                Work Experience
                            </button>
                            </Link>
                            <Link to='/Photography'>
                            <button className="button">
                                Photography
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="infoContainer">
                        <h1 className="title"> Justin May</h1>
                        <div className="description">
                        Hello and welcome to my website! I like messing around with technology, so be prepared to witness a whole bunch of 
                        bugginess. Think of this website as a fun art project. 
                        <br></br>
                        A little something something about me: I graduated in May 2020 from Rutgers-New Brunswick with a double major in Electrical and Computer Engineering 
                        and Computer Science. I am interested in technology, start ups, photography, finance, and creating art with technology. So really a lot of varied things. 
                        </div>
                    </div>
                </div>
                <div className="lottieContainer">
                    <Lottie options={defaultOptions}
                        height={300}
                        width={300}
                    />
                </div>
            </div>
        )
    }
}

export default AboutMe;