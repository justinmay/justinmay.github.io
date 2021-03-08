import React from 'react';
import "./TypeText.css";
import "../stylesheets/Portfolio.css";
import Project from './Project';
import {Link} from 'react-router-dom';

import circuit from '../assets/pictures/EEG/circuit.png';
import robot from '../assets/pictures/EEG/robot.png';
import poster from '../assets/pictures/EEG/poster.png';
import bitcamp1 from '../assets/pictures/bitcamp/pic.jpg';
import bitcamp2 from '../assets/pictures/bitcamp/pic2.jpg';
import split1 from '../assets/pictures/split/split1.png';
import split2 from '../assets/pictures/split/split2.png';
import split3 from '../assets/pictures/split/split3.png';
import p1 from '../assets/pictures/pennapps/p1.png';
import p2 from '../assets/pictures/pennapps/p2.png';
import p3 from '../assets/pictures/pennapps/p3.png';
import a1 from  '../assets/pictures/arbender/a1.png';
import opus1 from '../assets/pictures/opus/opus1.png';
import opus2 from '../assets/pictures/opus/opus2.png';
import opus3 from '../assets/pictures/opus/opus3.png';
import opus4 from '../assets/pictures/opus/opus4.png';
import opus5 from '../assets/pictures/opus/opus5.png';
import opus6 from '../assets/pictures/opus/opus6.png';
import opus7 from '../assets/pictures/opus/opus7.png';
import opus8 from '../assets/pictures/opus/opus8.png';
import opus9 from '../assets/pictures/opus/opus9.png';
import poker1 from '../assets/pictures/poker/poker1.png';
import poker2 from '../assets/pictures/poker/poker2.png';

type PortfolioProps =  {
}

type PortfolioState = {
}

class Portfolio extends React.Component<PortfolioProps,PortfolioState> {
    constructor(props: PortfolioProps) {
        super(props)
        this.state = {
        }  
    }

    render() {
        return (
            <div className="projects">
                <div className="FloatRight">
                    <div className="NavBar">
                        <Link to='/Home'>
                        <button className="NavBarLink">Home</button>
                        </Link>
                        <Link to='/AboutMe'>
                        <button className="NavBarLink">About Me</button>
                        </Link>
                        <Link to='/Portfolio'>
                        <button className="NavBarLink">Projects</button>
                        </Link>
                        <Link to='/WorkExperience'>
                        <button className="NavBarLink">Work</button>
                        </Link>
                        <Link to='/Photography'>
                        <button className="NavBarLink">Photos</button>
                        </Link>
                    </div>
                </div>
                <div className="projectTemp">
                    <Project 
                    title="Hot Pot Poker: A Social Poker Website"
                    pics={[poker1,poker2]}
                    body="A social poker website where you can play with your friends! If you find any bugs please create a ticket on our github and check our issues for known bugs! Created with React, MongoDB Atlas, and GraphQL."
                    webLink="http://hotpotpoker.space/"
                    />
                </div>
                <div style={{width:"100vw",height:"100vh",backgroundColor:"rgb(39, 39, 39)",position:"relative"}}>
                    <div className="quote">
                    <Project 
                        title="Senior Capstone: Opus- Gamifying Piano Learning"
                        pics={[opus1,opus2,opus3,opus4,opus5,opus6,opus7,opus8,opus9]}
                        video="https://www.youtube.com/watch?v=Gv2rCLRoPAU"
                        body="This project is a video game created on iOS that uses audio detection algorithims to listen to ambient music as in puts. Players can use real instruments as the controller to learn music fundamentals including chords, scales, and arpeggios. "/>
                    </div>
                </div>
                <div style={{width:"100vw",height:"100vh",backgroundColor:"rgb(39, 39, 39)",position:"relative"}}>
                    <Project 
                    title="Smart Robot Navigation with Computer Vision and EEG Control"
                    pics={[poster,circuit,robot]}
                    body="Developed and Designed an Arduino/Pi controlled smart robot with a team of electrical and mechanical engineering students. Built a brain waveform reader (EEG), that interprets a user’s occipital lobe waveform. Blinks are interpreted by a Python script from the EEG to actions taken by the robot to retrieve a ball over a local network."
                    />
                </div>
                <div style={{width:"100vw",height:"100vh",backgroundColor:"#999",position:"relative"}}>
                    <div className="quote">
                    <Project 
                        title="Running in the 90s: PennApps XVIII Top 10 Hack"
                        pics={[p1,p2,p3]}
                        devpost="https://devpost.com/software/running-into-the-90s"
                        video="https://youtu.be/cTh3Q6a2OIM"
                        github="https://github.com/justinmay/symphonia"
                        body="This is an interactive game to learn simple piano mechanics by giving children a fun rewarding way to practice. Using a Midicontroller we map piano keys onto a keyboard, and use them as inputs. Chords and arpeggios correspond to actions on the screen. Users will press the keys on the piano to trigger in game actions. In game actions correspond to the music, so by the end of the level a player would've mastered the skills. For example, our finished level teaches chord progressions. Our demo level (found in the source code) teaches arpeggios."/>
    
                    </div>
                </div>
                <div style={{width:"100vw",height:"100vh",backgroundColor:"rgb(39, 39, 39)",position:"relative"}}>
                    <div className="quote2">
                        <Project 
                        title="Flow: HackUMD (BitCamp 2019) Best Moonshot Prize"
                        pics={[bitcamp1,bitcamp2]}
                        devpost="https://devpost.com/software/flow-k572np"
                        github="https://github.com/justinmay/bitcamp2018"
                        body="Our app controls the entire user experience as soon as they drive onto the stadium campus. Right off the bat, the app is used for parking validation and entering the premises: The user is then prompted through signs on the road to an optimal parking spot, avoiding all avoidable traffic. Once the user parks, the app memorizes where the user Parks and prompts the user to a Gate. From there, the user can find their seat, find food, find restrooms, or get live stat updates about the venue from the app."
                        />
                        </div>
                </div>
                <div style={{width:"100vw",height:"100vh",backgroundColor:"#999",position:"relative"}}>
                    <div className="quote">
                    <Project 
                        title="Spl-it: Hack Rutgers Fall 2019 Capital One Presents: Best Financial Hack and Best use of MongoDB Atlas"
                        pics={[split1,split2,split3]}
                        devpost="https://devpost.com/software/spl-it-lz1xuw"
                        github="https://github.com/justinmay/HackRuFall2019"
                        body="Once you sit down at a table, Spl-it pairs with the bluetooth beacon on the table, automatically recognizing where you're sitting. The waiter/waitress enters your order on their tablet. Once you're done, the table receives an automated, itemized, bill where you choose what you want to pay for. Spl-it automatically handles shared items, distributes multi-order items, and organizes payments."/>
                    
                    </div>
                </div>
                <div style={{width:"100vw",height:"100vh",backgroundColor:"rgb(39, 39, 39)",position:"relative"}}>
                    <div className="quote2">
                    <Project 
                    title="Avatar the Last AR Bender: PennApps XVIII Snapchat Award"
                    pics={[a1]}
                    devpost="https://devpost.com/software/agni-kai"
                    github="https://github.com/justinmay/PennAppsFall18"
                    body="Enter the Avatar state and play as Aang, the Avatar. Experience the power of the Avatar, manipulating water, earth, fire, and air in AR. Fight against enemies that will track your location. You can also take snapchats of your Avatar adventures with the click of a button and share it with all your friends! Compatible with all stereoscopic headsets. Clicking the z button will screencap the current VR overlay and prompt you to publish it to your snapchat story!"/>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio