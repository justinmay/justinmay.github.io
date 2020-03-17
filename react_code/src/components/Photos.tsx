import React from 'react';

type PhotosProps =  {
}

type PhotosState = {
}

class Photos extends React.Component<PhotosProps,PhotosState> {
    constructor(props: PhotosProps) {
        super(props)
        this.state = {
        }  
    }

    render() {
        return(
            <div>
                <h1>
                    Photos
                </h1>
            </div>
        )
    }
}

export default Photos;