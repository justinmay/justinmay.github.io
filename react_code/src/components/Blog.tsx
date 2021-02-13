import React from 'react';

type BlogProps =  {
}

type BlogState = {
}

class Blog extends React.Component<BlogProps,BlogState> {
    constructor(props: BlogProps) {
        super(props)
        this.state = {
        }  
    }

    render() {
        return(
            <div>
                <h1>
                    Someone in the Crowd
                </h1>
            </div>
        )
    }
}

export default Blog;