import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import {Link} from 'react-router-dom';
import hamburger from '../assets/icons/hamburger.png';
import location from '../assets/icons/location.png';
import './../stylesheets/WorkExperience.css';

type WelcomeProps =  {
}

type WelcomeState = {
    showSearch: boolean;
    currentInternship: string;
    center: any;
}

class WorkExperience extends React.Component<WelcomeProps,WelcomeState> {
    constructor(props: WelcomeProps) {
        super(props)
        this.state = {
            showSearch: false,
            currentInternship: "Palantir",
            center: {
                lat: 40.7458,
                lng: -74.0060
            }
        }  
    }

    render() {

        const source = this.state.currentInternship === "Microsoft" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Building92microsoft.jpg/1599px-Building92microsoft.jpg" : 
            this.state.currentInternship === "SummitSync" ? "https://fitsmallbusiness.com/wp-content/uploads/2018/10/SummitSync-logo.png" :
            this.state.currentInternship === "Commvault" ? "https://www.fortmonmouthnj.com/wp-content/uploads/2014/11/2014AV59411-cropped3.jpg":
            "https://mms.businesswire.com/media/20210223005333/en/1012288/22/Palantir_logo.jpg"
        return(
            <div style={{height:"100vh",width:"100vw"}}>
                <GoogleMap
                    bootstrapURLKeys={{ key:'AIzaSyD8VllIZxURpNW0tT-MD9EVqQR39ND4cWM' }}
                    center={this.state.center}
                    defaultZoom={11}
                >
                    <Marker
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        name="My Marker"
                        color="blue"
                    />
                </GoogleMap>
                <div className="experience">
                    <img className="image" src={source} alt="microsoft"/>
                    <h1 className="titlemap">{this.state.currentInternship}</h1>
                    <p className="text">
                        {this.state.currentInternship === "Microsoft" ? "I interned for the Microsft Teams Large Screens and Digital Experiences team. I build front end appliactions in React and typescript for large displays and worked on using machine learning vision models to interact with these screens." :
                        this.state.currentInternship === "SummitSync" ? "Worked as a summer data engineering intern. Worked primarily in python on on their in house software. Worked on social media scrapers, machine learning algorithims, and data processing. Summitsync is a startup based in Manhattan that is a meetings intelligence platform to power offline experiences for Sales & Marketing teams." :
                        this.state.currentInternship === "Commvault" ? "I worked at Commvault for two Summers converting the legacy legal documents over to a cloud based solution by doing data analysis and reading contracts. In addition, I performed adhoc projects on: sales force, Microsoft Visio in conjunction with a SQL server, and implementing in house apis.":
                        "I am a Software Engineer at Palantir on the Network Infrastructure team. I primarily work with Envoy, Kubernetes, and other proxy/containerization related software."
                        }
                    </p>
                    <div className="listOfLinks">
                        <Link to='/Home'>
                        <button className="hotLink">Home</button>
                        </Link>
                        <Link to='/AboutMe'>
                        <button className="hotLink">About Me</button>
                        </Link>
                        <Link to='/Portfolio'>
                        <button className="hotLink">Projects</button>
                        </Link>
                        <Link to='/Photography'>
                        <button className="hotLink">Photos</button>
                        </Link>
                    </div>
                </div>
                <div className="experiencePicker">
                    <button className="searchBar selected" onClick={() => {this.setState({showSearch: !this.state.showSearch})}}>
                    <img className="hamburgerIcon" src={hamburger}/>
                        {this.state.currentInternship === "Microsoft" ? "Microsoft, Redmond WA, Summer Internship 2019 " :
                        this.state.currentInternship === "SummitSync" ? "SummitSync, Manhattan NYC, Summer Internship 2018" :
                        this.state.currentInternship === "Commvault" ? "Commvault, Tinton Falls NJ, Summer Internship 2016/ 2017":
                        "Palantir, New York City NYC, August 2020 - Present"
                        }
                    </button>
                    { this.state.showSearch ? 
                    <button className="searchBar search" onClick={() => {this.setState({showSearch: false, currentInternship: "Palantir", center: {lat: 47.6740,lng: -122.1215}})}}>
                        <img className="locationIcon" src={location}/>
                        Palantir, New York City NY, August 2020 - Present 
                    </button>
                    : null}
                    { this.state.showSearch ? 
                    <button className="searchBar search" onClick={() => {this.setState({showSearch: false, currentInternship: "Microsoft", center: {lat: 47.6740,lng: -122.1215}})}}>
                        <img className="locationIcon" src={location}/>
                        Microsoft, Redmond WA, Summer Internship 2019 
                    </button>
                    : null}
                    { this.state.showSearch ? 
                    <button className="searchBar search" onClick={() => {this.setState({showSearch: false, currentInternship: "SummitSync", center: {lat: 40.7622909,lng:-73.9772319}})}}>
                        <img className="locationIcon" src={location}/>
                        SummitSync, Manhattan NYC, Summer Intenrship 2018 
                    </button>
                    : null}
                    { this.state.showSearch ? 
                    <button className="searchBar search" onClick={() => {this.setState({showSearch: false, currentInternship: "Commvault", center: {lat: 40.2999406,lng: -74.08433}})}}>
                        <img className="locationIcon" src={location}/>
                        Commvault, Tinton Falls NJ, Summer Internship 2016/ 2017 
                    </button>
                    : null}
                </div>
            </div>
        )
    }
}

export default WorkExperience;