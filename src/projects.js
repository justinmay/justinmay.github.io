import React from 'react';
import './projects.css';

export class Projects extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	title:"Flow",
			projectType:"Bitcamp (UMD) 2018",
			awards:"First Place Hack",
			list: "<li>iOS</li><li>swift</li><li>Node.js</li><li>Arduino</li>",
			target: "https://devpost.com/software/flow-k572np",
			description:"Our app controls the entire user experience as soon as they drive onto the stadium campus. Right off the bat, the app is used for parking validation and entering the premises: The user is then prompted through signs on the road to an optimal parking spot, avoiding all avoidable traffic. Once the user parks, the app memorizes where the user Parks and prompts the user to a Gate. From there, the user can find their seat, find food, find restrooms, or get live stat updates about the venue from the app."
		}
	}

	pageChange(page) {
		switch(page) {
			case "RIT90s":
				this.props.onClickRIT90s();
				this.setState({
					title: "Running In The 90's",
			    	projectType: "Penn Apps 2017",
			    	awards:"Top 10 Finalist Hack",
			    	list: "<li>Unity</li><li>C#</li><li>Game Design</li><li>Hardware (Midi)</li>",
			    	target: "https://devpost.com/software/running-into-the-90s",
			    	description: "This is an interactive game to learn simple piano mechanics by giving children a fun rewarding way to practice. Using a Midicontroller we map piano keys onto a keyboard, and use them as inputs. Chords and arpeggios correspond to actions on the screen."
				});
				break;
			case "MM":
				this.props.onClickMM();
				this.setState({
					title:"MatchMaker",
					projectType:"Hack MIT 2017",
					awards:"First Ever Hackathon",
					list: "<li>android</li><li>java/XML</li><li>Node.js</li>",
					target: "https://devpost.com/software/matchmaker-eygfw7",
					description:"MatchMaker pairs you up with other tennis players located near you and around a similar skill level. The app gives you a selection of players to choose from, and if you would like to challenge them to a match, simply click on their icon, view their statistics, and begin chatting with them to schedule a match."
				})
				break;
			case "F":
				this.props.onClickF();
				this.setState({
					title:"Flow",
					projectType:"Bitcamp (UMD) 2018",
					awards:"First Place Hack",
					list: "<li>iOS</li><li>swift</li><li>Node.js</li><li>Arduino</li>",
					target: "https://devpost.com/software/flow-k572np",
					description:"Our app controls the entire user experience as soon as they drive onto the stadium campus. Right off the bat, the app is used for parking validation and entering the premises: The user is then prompted through signs on the road to an optimal parking spot, avoiding all avoidable traffic. Once the user parks, the app memorizes where the user Parks and prompts the user to a Gate. From there, the user can find their seat, find food, find restrooms, or get live stat updates about the venue from the app."
				})
				break;
			case "D":
				this.props.onClickD();
				this.setState({
					title:"Directive",
					projectType:"Personal Project",
					awards:"Ongoing",
					list: "<li>iOS/swift</li><li>Android/Java</li><li>Node.js</li><li>Arduino</li><li>React</li>",
					target: "#nothing",
					description:"Directive is a full anroid, iOS, and web service that sends 'directives' from student delegates ('the compeitiors') delegates to dais directors (the 'judges'). Directive solves a few issues that exist in Model UN today: 1. Some students cannot afford/ cannot bring laptops 2. Students worrying about the status of their directives 3. Flashdrives/ physical papers getting stolen"
				})
				break;
			case "A":
				this.props.onClickA();
				this.setState({
					title:"The Last AR Bender",
					projectType:"PennApps Fall 2018",
					awards:"Snapchat Award",
					list: "<li>iOS/swift</li><li>ARKit1</li><li>Node.js</li><li>Socket.io</li>",
					target: "https://devpost.com/software/agni-kai",
					description:"Enter the Avatar state and play as Aang, the Avatar. Experience the power of the Avatar, manipulating water, earth, fire, and air in AR. Fight against enemies that will track your location. You can also take snapchats of your Avatar adventures with the click of a button and share it with all your friends! Compatible with all stereoscopic headsets. Clicking the z button will screencap the current VR overlay and prompt you to publish it to your snapchat story!"
				})
				break;
			case "R":
				this.props.onClickR();
				this.setState({
					title:"ResQ",
					projectType:"Hack MIT 2018",
					awards:"First Hack Where I Did the Backend",
					list: "<li>iOS/swift</li><li>Node.js</li><li>Machine Learning</li><li>React</li>",
					target: "https://devpost.com/software/resq-to3vz4",
					description:"ResQ is a holistic natural disaster recovery tool. Officials (FEMA, Red Cross, etc.) can manage their resource centers on a WebApp: by managing the distribution of resources, the location of distressed individuals, and publicly sourced alerts. Private Citizens can use a mobile app as a one-stop-shop solution for their emergency needs including: finding the nearest medical service, food/water source, or shelter source, alerting officials of power outages, fallen trees, or obstructed roads, and finally trigger and emergency response. Users can use augmented reality to point them towards the closest resource. Emergency Response Teams: can be dispatched through the app to find private citizens. A convolutional neural network processes Arial imagery to tag and find distressed citizens without cell service."
				})
				break;
			default:
				this.props.onClickRIT90s();
				this.setState({
					title: "Running In The 90's",
			    	projectType: "Penn Apps 2017",
			    	awards:"Top 10 Finalist Hack",
			    	list: "<li>Unity</li><li>C#</li><li>Game Design</li><li>Hardware (Midi)</li>",
			    	target: "https://devpost.com/software/running-into-the-90s",
			    	description: "This is an interactive game to learn simple piano mechanics by giving children a fun rewarding way to practice. Using a Midicontroller we map piano keys onto a keyboard, and use them as inputs. Chords and arpeggios correspond to actions on the screen."
				});
				break;
		}
	}

	render(){
		return(
			<div class="split right" align="center">
				<ProjectsList
				onClickRIT90sLocal={() => this.pageChange("RIT90s")}
				onClickMMLocal={() => this.pageChange("MM")} 
				onClickFLocal={() => this.pageChange("F")}
				onClickDLocal={() => this.pageChange("D")} 
				onClickALocal={() => this.pageChange("A")}
				onClickRLocal={() => this.pageChange("R")} 
				/>
				<h1>
					{this.state.title}
				</h1>
				<h3>
					{this.state.projectType}
				</h3>
				<ul class="lst" dangerouslySetInnerHTML={{__html: this.state.list}}>
			    
		        </ul>
				<h3>
					{this.state.awards}
				</h3>
				<p id="content">
					{this.state.description}
				</p>
				<a href={this.state.target} target="blank">
		        	<p>Project Link</p>
		        </a>
			</div>
		)
	}
}

export class ProjectsList extends React.Component {

	render(){
		return(
			<div>
		      	<figure class="inlineblock">
			        <a 
			          href="#RunningInThe90s" 
			          onClick={() => this.props.onClickRIT90sLocal()}>
			          <img 
			            src={require("./images/RunningInThe90s.png")}
			            class="smolLogo"
			            alt="profile pic"
			            
			          ></img>
		       		 </a>
		      	</figure>
		     	<figure class="inlineblock">
			        <a 
			          href="#MatchMaker" 
			          onClick={() => this.props.onClickMMLocal()}>
			          <img 
			            src={require("./images/MatchMaker.png")}
			            class="smolLogo"
			            alt="profile pic"
			          ></img>
			        </a>
		      	</figure>
		      	<figure class="inlineblock">
			        <a 
			          href="#Flow" 
			          onClick={() => this.props.onClickFLocal()}>
			          <img 
			            src={require("./images/flow.png")}
			            class="smolLogo"
			            alt="profile pic"
			          ></img>
			        </a>
		     	</figure>
		     	<figure class="inlineblock">
			        <a 
			          href="#Directive" 
			          onClick={() => this.props.onClickDLocal()}>
			          <img 
			            src={require("./images/directive.png")}
			            class="smolLogo"
			            alt="profile pic"
			          ></img>
			        </a>
		     	</figure>
		     	<figure class="inlineblock">
			        <a 
			          href="#ResQ" 
			          onClick={() => this.props.onClickRLocal()}>
			          <img 
			            src={require("./images/ResQ.png")}
			            class="smolLogo"
			            alt="profile pic"
			          ></img>
			        </a>
		      	</figure>
		      	<figure class="inlineblock">
			        <a 
			          href="#theLastARBender" 
			          onClick={() => this.props.onClickALocal()}>
			          <img 
			            src={require("./images/theLastARBender.jpg")}
			            class="smolLogo"
			            alt="profile pic"
			          ></img>
			        </a>
		      	</figure>
	    	</div>
		)
	}
}