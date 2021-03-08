import React, { useState } from "react";
import Gallery, { PhotoClickHandler, PhotoProps } from "react-photo-gallery";
import {Link} from 'react-router-dom';
import photo1 from '../assets/pictures/photos/photos1.jpg';
import photo2 from '../assets/pictures/photos/photos2.jpg';
import photo3 from '../assets/pictures/photos/photos3.jpg';
import photo4 from '../assets/pictures/photos/photos4.jpg';
import photo5 from '../assets/pictures/photos/photos5.jpg';
import photo6 from '../assets/pictures/photos/photos6.jpg';
import photo7 from '../assets/pictures/photos/photos7.jpg';
import photo8 from '../assets/pictures/photos/photos8.jpg';
import photo9 from '../assets/pictures/photos/photos9.jpg';
import photo10 from '../assets/pictures/photos/photos10.jpg';
import photo11 from '../assets/pictures/photos/photos11.jpg';
import photo12 from '../assets/pictures/photos/photos12.jpg';
import photo13 from '../assets/pictures/photos/photos13.jpg';
import photo14 from '../assets/pictures/photos/photos14.jpg';
import photo15 from '../assets/pictures/photos/photos15.jpg';
import photo16 from '../assets/pictures/photos/photos16.jpg';
import photo17 from '../assets/pictures/photos/photos17.jpg';
import "../stylesheets/Photos.css";

interface picture {
    src: string;
    height: number;
    width: number;
    caption?: string;
    alt?: string;
}

const pictures: picture[] = [
    {
        src: photo1,
        width: 3,
        height: 2,
    },
    {
        src: photo2,
        width: 2,
        height: 1,
    },
    {
        src: photo3,
        width: 3,
        height: 2,
    },
    {
        src: photo4,
        height: 2,
        width: 3,
    },
    {
        src: photo5,
        height:2,
        width:3,
    },
    {
        src: photo6,
        height: 2,
        width: 3,
    },
    {
        src: photo7,
        height:2,
        width:3,
    },
    {
        src: photo8,
        height: 2,
        width: 3,
    },
    {
        src:photo9,
        height:3,
        width:2,
    },
    {
        src:photo10,
        height:2,
        width:3,
    },
    {
        src:photo11,
        height:2,
        width:3,
    },
    {
        src:photo12,
        height:2,
        width:3,
    },
    {
        src:photo13,
        height:2,
        width:3,
    },
    {
        src:photo14,
        height:2,
        width:3,
    },
    {
        src:photo15,
        height:2,
        width:3,
    },
    {
        src:photo16,
        height:2,
        width:3,
    },
    {
        src:photo17,
        height:6,
        width:10,
    }
]

export default function Photos() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const handler: PhotoClickHandler = (e: React.MouseEvent, photos: {
        index: number;
        next: PhotoProps | null;
        photo: PhotoProps;
        previous: PhotoProps | null;
    }) => {
        setCurrentImage(photos.index);
        setViewerIsOpen(true);
        console.log(currentImage)
    }

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return(
        <div className="photography">
            <div className="photographyNavBar">
                <Link to='/Home'>
                    <button className="photographyNavButton">Home</button>
                </Link>
                <Link to='/AboutMe'>
                    <button className="photographyNavButton">About Me</button>
                </Link>
                <Link to='/Portfolio'>
                    <button className="photographyNavButton">Portfolio</button>
                </Link>
                <Link to='/WorkExperience'>
                    <button className="photographyNavButton">Work Experience</button>
                </Link>
                
            </div>
            <h1>Photorgraphy</h1>
            <Gallery photos={pictures} onClick={handler}/>
            {
                viewerIsOpen?
                <div className="pictureOverlay">
                    <button className="pictureOverlayX" onClick={() => setViewerIsOpen(false)}>x</button>
                    <img className="pictureOverlayImg" src={pictures[currentImage].src}/>
                </div>:
                null
            }
        </div>
    )
}


