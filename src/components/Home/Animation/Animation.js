import React from 'react';
import { Animate }  from 'react-simple-animate';
import YourComponent from '../Portfolio/Portfolio';

export default ({ play, onCompleteCallBack }) => (
    <Animate
      play={play} // set play true to start the animation
      duration={1} // how long is the animation duration
      delay={0.3} // how many delay seconds will apply before the animation start
      start={{ transform: 'translate(0, 0)' }}
      end={{ transform: 'translate(10px, 10px)' }}
      complete={{ display: 'none' }}
      easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
      onComplete={onCompleteCallBack} // call back function when animation is completed
    >
      <YourComponent />
    </Animate>
  );