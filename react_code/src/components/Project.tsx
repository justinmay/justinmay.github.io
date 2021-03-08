import React from 'react';
import "../stylesheets/Project.css";

type ProjectProp =  {
    title: string,
    body: string,
    pics: any[],
    github?: string,
    devpost? :string,
    video?: string,
    webLink?: string,
}

type ProjectState = {
}

class Project extends React.Component<ProjectProp,ProjectState> {
    constructor(props: ProjectProp) {
        super(props)
        this.state = {
        }  
    }

    render() {
        return (
            <div className="project">
                <h1> {this.props.title} </h1>
                <div className="images">
                    {this.props.pics.map(pic => {
                        return <img src={pic} alt="circuit" className="scrollImage"/>
                    })}
                </div>
                <p className="bodyText">
                    {this.props.body}
                </p>
                <div className="linkContainer">
                    {this.props.github ? <a href={this.props.github}>github</a> : null}
                    {this.props.video ? <a href={this.props.video}>youtube</a> : null}
                    {this.props.devpost ? <a href={this.props.devpost}>devpost</a> : null}
                    {this.props.webLink ? <a href={this.props.webLink}>link</a> : null}
                </div>
            </div>
        )
    }
}
export default Project;