import React, { Component } from 'react';
import Lottie from 'react-lottie';
import ReactLogo from '../image/javascript.json';

class ReactAnimatedLogo extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: ReactLogo,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions}/>
      </div>
    );
  }
}

export default ReactAnimatedLogo;