import React from 'react';
import Gallery from 'react-photo-gallery';
import './photography.css'

function TopNavBar(props) {
  return(
    <div>
      <a
        href="#Back"
        class="floatTopRight f4"
        onClick={() => props.onClickBack()}
      >
        <p color="white" align="top">Back</p>
      </a>
      <a 
        href="#Portraits" 
        class="floatTopRight f3"
        onClick={() => props.onClickPortrait()}
      >
        <p color="white" align="top">Portraits</p>
      </a>
      <a 
        href="#Colombia" 
        class="floatTopRight f2"
        onClick={() => props.onClickColombia()}
      >
        <p color="white" align="top">Colombia</p>
      </a>
      <a 
        href="#Grad" 
        class="floatTopRight f1"
        onClick={() => props.onClickGrad()}
      >
        <p color="white" align="top">Grad</p>
      </a>  
    </div>

  )
}

const Portraits = [
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/Lisa21.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/Shashwut1.jpg',
    id: 'a'
  },
  {
    src: "https://s3.amazonaws.com/justin-may-personal-website-drive/Eugene1.jpg",
    id: 'a'
  },
  {
    src: "https://s3.amazonaws.com/justin-may-personal-website-drive/Alex1.jpg",
    id: 'a'
  },
  {
    src: "https://s3.amazonaws.com/justin-may-personal-website-drive/Aidan1.jpg",
    id: 'a'
  },
  {
    src: "https://s3.amazonaws.com/justin-may-personal-website-drive/Kait1.jpg",
    id: 'a'
  },
  {
    src: "https://s3.amazonaws.com/justin-may-personal-website-drive/sarah.jpg",
    id: 'a'
  }
];

const Colombia = [
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-1.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-2.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-3.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-4.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-5.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-6.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-7.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-8.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-9.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-10.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/colombia-11.jpg',
    id: 'a'
  }
];

const Grad = [
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/grad-1.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/grad-2.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/grad-3.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/grad-4.jpg',
    id: 'a'
  },
  {
    src: 'https://s3.amazonaws.com/justin-may-personal-website-drive/grad-5.jpg',
    id: 'a'
  }
];

class Photography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: Portraits     
    }
  }

	render() {
		return(
      <div>
        <TopNavBar
          onClickPortrait={() => this.setState({photos: Portraits})}
          onClickColombia={() => this.setState({photos: Colombia})}
          onClickGrad={() => this.setState({photos: Grad})}
          onClickBack={() => this.props.onClickBack()}
        />
        <Gallery photos={this.state.photos} />
      </div>
		)
	}
}

export default Photography