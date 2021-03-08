import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Photos from './components/Photos';

interface RouterProps {
}

const SiteRouter: React.SFC<RouterProps> = (props) => {
    return(
    <Router>
        <Switch>  
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/WorkExperience" component={WorkExperience} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Blog" component={Blog}/>
          <Route exact path="/Photography" component={Photos}/>
        </Switch>
    </Router>);
}

export default SiteRouter