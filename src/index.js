import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blog from'./blog.js';
import GoogleMap from 'google-map-react';
import Photography from './photography.js';
import {Projects} from './projects.js';

function HalfScreenPicture(props) {
  return (
    <img 
      src={require("./images/"+ props.pictureName)}  
      class="halfScreenPicture split left"
      alt="me"
      >
    </img>
  )
}

function HomePage(props) { 
  return(
    <div class="split right" align="center">
      <img 
        src={require("./images/circlePic.jpg")}
        class="circlePic"
        alt="profile pic"
      ></img>
      <h1>
        Justin May
      </h1>
      <h3>
        Who Am I?
      </h3>
      <p id="content">
      I am a Junior at the Rutgers Engineering Honors Academy, studying Electrical and Computer Engineering (ECE) and Computer Science. I was raised Theravada Buddhist and strongly believe in using compassion and kindness to better identify and solve the suffering of those around us. I believe that we can ultimately use technology for the greater good. All my personal projects have been inspired by problems I or those around me have experienced. In my free time, I love photography, Model UN, longboarding, and reading.
      </p>
      <div>
        <div class="floatLeft">
          <p class="text-center">
            <strong>Resume</strong>
          </p>
          <br></br>
          <a 
            href="https://s3.amazonaws.com/justin-may-personal-website-drive/JustinMayResume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="center smol" src="https://s3.amazonaws.com/justin-may-personal-website-drive/006-resume.png" alt="Random Name"></img>
          </a>
        </div>

        <div class="floatLeft">
          <p class="text-center">
            <strong>GitHub</strong>
          </p>
          <br></br>
          <a href="https://www.github.com/justinmay" target="_blank" rel="noopener noreferrer">
            <img class="center smol" src="https://s3.amazonaws.com/justin-may-personal-website-drive/005-github-logo.png" alt="Random Name"></img>
          </a>
        </div>

        <div class="floatLeft">
          <p class="text-center">
            <strong>LinkedIn</strong>
          </p>
          <br></br>
          <a href="https://www.linkedin.com/in/justinseanmay" target="_blank" rel="noopener noreferrer">
            <img class="center smol" src="https://s3.amazonaws.com/justin-may-personal-website-drive/004-linkedin.png" alt="Random Name"></img>
          </a>
        </div>
          </div>
    </div>
  )
}

function NavBar(props) {
  return(
    <div>
      <a 
        href="#Photography" 
        class="float f1"
        onClick={() => props.onClickPhotography()}
      >
        <p color="white" align="top">Photography</p>
      </a>
      <a 
        href="#Blog" 
        class="float f2"
        onClick={() => props.onClickBlog()}
      >
        <p color="white" align="top">Blog</p>
      </a>
      <a 
        href="#Projects" 
        class="float f3"
        onClick={() => props.onClickProjects()}
      >
        <p color="white" align="top">Projects</p>
      </a>
      <a 
        href="#Work_Experience" 
        class="float f4"
        onClick={() => props.onClickWork()}
      >
        <p color="white" align="top">Work Experience</p>
      </a>
      <a 
        href="#Home" 
        class="float f5"
        onClick={() => props.onClickHome()}
      >
        <p color="white" align="top">Home</p>
      </a>
      
    </div>

  )
}

class WorkPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentWork: "summitsync",
      center: {
        lat: 40.2999406,
        lng: -74.08433
      },
      zoom:11,
      title: "Summitsync",
      year: "Summer 2018",
      details: "Worked as a summer data engineering intern. Worked primarily in python on on their in house software. Worked on social media scrapers, machine learning algorithims, and data processing. Summitsync is a startup based in Manhattan that is a meetings intelligence platform to power offline experiences for Sales & Marketing teams."
    }
  }

  getDetails(work){
    switch(work) {
      case "microsoft":
        return({
          title: "Microsoft",
          year: "Summer 2019",
          center: {
            lat: 47.6403199,
            lng: -122.1398861
          },
          details: "I will be worked at Microsoft's HQ in Redmond this summer witht the Teams team! I am very excited."
        });
      case "summitsync":
        return({
          title:"Summitsync",
          year: "Summer 2018",
          center: {
            lat: 40.7622909,
            lng: -73.9772319
          },
          details: "Worked as a summer data engineering intern. Worked primarily in python on on their in house software. Worked on social media scrapers, machine learning algorithims, and data processing. Summitsync is a startup based in Manhattan that is a meetings intelligence platform to power offline experiences for Sales & Marketing teams."
        })
      case "commvault":
        return({
          title:"Commvault",
          year: "Summer 2017 + 2016",
          center: {
            lat: 40.2999406,
            lng: -74.08433
          },
          details: "I worked at Commvault for two Summers converting the legacy legal documents over to a cloud based solution by doing data analysis and reading contracts. In addition, I performed adhoc projects on: sales force, Microsoft Visio in conjunction with a SQL server, and implementing in house apis."
        })
      default:
        break;
    }
  }

  changeWork(work){ 
    const results = this.getDetails(work)
    this.setState({
      title: results["title"],
      year: results["year"],
      details: results["details"],
      center: results["center"],
    });
  }

  changeToMicrosoft() {
    this.changeWork("microsoft");
    this.props.onClickMicrosoft()
  }

  changeToSummitsync() {
    this.changeWork("summitsync");
    this.props.onClickSummitsync()
  }

  changeToCommvault() {
    this.changeWork("commvault");
    this.props.onClickCommvault()
  }

  render() {
    return(
      <div class="split right" align="center">
        <div>
          <figure class="inlineblock">
            <a 
              href="#Microsoft" 
              onClick={() => this.changeToMicrosoft()}>
              <img 
                src={require("./images/microsoft.jpg")}
                class="smallLogo"
                alt="profile pic"
                
              ></img>
            </a>
            <figcaption> Summer 2019 </figcaption>
          </figure>
          <figure class="inlineblock">
            <a 
              href="#Summitsync" 
              onClick={() => this.changeToSummitsync()}>
              <img 
                src={require("./images/summitsync.png")}
                class="smallLogo"
                alt="profile pic"
              ></img>
            </a>
            <figcaption> Summer 2018 </figcaption>
          </figure>
          <figure class="inlineblock">
            <a 
              href="#Commvault" 
              onClick={() => this.changeToCommvault()}>
              <img 
                src={require("./images/commvault.png")}
                class="smallLogo"
                alt="profile pic"
              ></img>
            </a>
            <figcaption> Summer 2016/7 </figcaption>
          </figure>
        </div>
        <h1>
          {this.state.title}
        </h1>
        <h3>
          {this.state.year}
        </h3>
        <p id="content2">
          {this.state.details}
        </p>
        <div class="medium" style={{ height: '40vh', width: '100%' }}> 
          <GoogleMap
            bootstrapURLKeys={{ key:'AIzaSyD8VllIZxURpNW0tT-MD9EVqQR39ND4cWM' }}
            center={this.state.center}
            defaultZoom={this.state.zoom}
          >
          </GoogleMap>
        </div>
      </div>
    )
  }
}


class SplitScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: <HomePage/>,
      currentPicture: "me.jpg",
    };
  }

  getPictureFileName(destination) { 
    switch(destination) {
        case "home":
          return "me.jpg";
        case "work": 
          return "summitsync.png";
        case "projects":
          return "flow.png"
        default:
          return "me.jpg";
      }
  }

  getRightPage(destination) {
    switch(destination) {
      case "home":
        return <HomePage/>;
      case "work":
        return <WorkPage
          onClickMicrosoft={() => this.changeLeftPicture("microsoft")}
          onClickSummitsync={() => this.changeLeftPicture("summitsync")}
          onClickCommvault={() => this.changeLeftPicture("commvault")}
        />;
      case "projects":
        return <Projects
          onClickRIT90s={() => this.changeLeftPicture("runningInThe90s")}
          onClickMM={() => this.changeLeftPicture("matchMaker")}
          onClickF={() => this.changeLeftPicture("flow")}
          onClickD={() => this.changeLeftPicture("directive")}
          onClickR={() => this.changeLeftPicture("resq")}
          onClickA={() => this.changeLeftPicture("theLastARBender")}
        />;
      default:
        return <HomePage/>;
    }
  }

  changePage(destination) {
    this.setState({
      currentPicture: this.getPictureFileName(destination), 
      currentPage: this.getRightPage(destination),
    });
  }

  changeLeftPicture(company) {
    switch(company) {
      case "microsoft":
        this.setState({
          currentPicture: "microsoft.jpg"
        });
        break;
      case "summitsync":
        this.setState({
          currentPicture: "summitsync.png"
        });
        break;
      case "commvault":
        this.setState({
          currentPicture: "commvault.png"
        })
        break;
      case "runningInThe90s":
        this.setState({
          currentPicture: "RunningInThe90s.png"
        });
        break;
      case "matchMaker":
        this.setState({
          currentPicture: "MatchMaker.png"
        });
        break;
      case "flow":
        this.setState({
          currentPicture: "flow.png"
        })
        break;
      case "directive":
        this.setState({
          currentPicture: "directive.png"
        });
        break;
      case "resq":
        this.setState({
          currentPicture: "ResQ.png"
        });
        break;
      case "theLastARBender":
        this.setState({
          currentPicture: "theLastARBender.jpg"
        })
        break;
      default:
        this.setState({
          currentPicture: "summitsync.png"
        });
    }


  }

  render() {
    return (
      <div>
        <HalfScreenPicture
          pictureName={this.state.currentPicture}
        />
        {this.state.currentPage}
        <NavBar
          onClickHome={() => this.changePage("me")}
          onClickWork={() => this.changePage("work")}
          onClickProjects={() => this.changePage("projects")}
          onClickBlog={() => this.props.onClickBlogMain()}
          onClickPhotography={() => this.props.onClickPhotographyMain()}
        />
      </div>
    
    );
  }
}

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMainPage: <SplitScreen
                    onClickBlogMain={() => this.changeToBlog()}
                    onClickPhotographyMain={() => this.changeToPhotoGallery()}
                  />, 
    };
  }

  changeToPhotoGallery() {
    this.setState({
      currentMainPage: <Photography
                      onClickBack={() => this.changeToSplitScreen()}
                      /> 
    });
  }

  changeToBlog() {
    this.setState({
      currentMainPage: <Blog
                      onClickToSplitScreenMain={() => this.changeToSplitScreen()}
                      />
    });
  }

  changeToSplitScreen() {
    this.setState({
      currentMainPage: <SplitScreen
                    onClickBlogMain={() => this.changeToBlog()}
                    onClickPhotographyMain={() => this.changeToPhotoGallery()}
                   />,
    })
  }


  render(){
    return(
      <div class="main">
        {this.state.currentMainPage}
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
