import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import LottieAPI from 'lottie-api-updated';

import styles from './Portrait.module.css';
import name from '../../img/name.svg';
import faceAnimation from '../../data/face-animation.json';

const Portrait = React.memo(() => {
  useEffect(() => {
    // -----------
    // Definitions
    // -----------

    const elem = document.getElementById('bodymovin');
    let anim;
    let animationAPI;
    const windowSize = {
      w: window.innerWidth,
      h: window.innerHeight,
    };

    // ---------
    // Animation
    // ---------

    function init() {
      animationAPI = LottieAPI.createAnimationApi(anim);

      // -----
      // Blink
      // -----

      const blinkSlider = animationAPI.getKeyPath(
        'Slider Control,Transform,X Position'
      );
      let blinkDirection = 'down';
      let blinkRange = 0;

      const blink = () => {
        const interval = setInterval(function blinkInterval() {
          if (blinkDirection === 'down') blinkRange += 25;
          if (blinkDirection === 'up') blinkRange -= 25;

          if (blinkRange >= 100 && blinkDirection === 'down')
            blinkDirection = 'up';
          if (blinkRange <= 0 && blinkDirection === 'up')
            blinkDirection = 'down';

          if (blinkRange === 0) clearInterval(interval);
        }, 10);
      };

      setInterval(blink, 4500);

      animationAPI.addValueCallback(blinkSlider, () => blinkRange);

      // -------------
      // Face movement
      // -------------

      const mousePosition = [0, 0];
      const joystickSize = { w: null, h: null };
      const joystickPosition = animationAPI.getKeyPath(
        'JoyStkCtrl01,Transform,Position'
      );
      const joystickBounds = animationAPI.getKeyPath(
        'JoyStkCtrl01 Origin,Contents,Group 1, Rectangle Path 1, Size'
      );

      animationAPI.addValueCallback(joystickBounds, (currentValue) => {
        [joystickSize.w, joystickSize.h] = currentValue;

        return [joystickSize.w, joystickSize.h];
      });

      animationAPI.addValueCallback(joystickPosition, () => mousePosition);

      window.addEventListener('mousemove', (e) => {
        const mousePercent = {
          w: e.pageX / windowSize.w,
          h: e.pageY / windowSize.h,
        };

        mousePosition[0] = mousePercent.w * joystickSize.w - joystickSize.w / 2;
        mousePosition[1] = mousePercent.h * joystickSize.h - joystickSize.h / 2;
      });
    }

    // ---------------
    // Setup animation
    // ---------------

    const animData = {
      container: elem,
      renderer: 'svg',
      prerender: true,
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
      },
      animationData: faceAnimation,
    };
    anim = lottie.loadAnimation(animData);
    anim.addEventListener('DOMLoaded', init);
  }, []);

  return (
    <header>
      <div className={styles.portrait}>
        <div className={styles.portrait__image}>
          <div id="bodymovin" className={styles.bodymovin} />
        </div>
        <img src={name} className={styles.portrait__name} alt="" />
      </div>
    </header>
  );
});

export default Portrait;
