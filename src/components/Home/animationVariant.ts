const ANIMATION_DURATION = 0.75;
const ANIMATION_DELAY = 0;

export const animateSlideRight = {
  hidden: {
    x: '-115%',
  },
  visible: {
    x: 0,
    transition: {
      delay: ANIMATION_DELAY,
      duration: ANIMATION_DURATION,
    },
  },
};
export const animateSlideDown = {
  hidden: {
    y: '-115%',
  },
  visible: {
    y: 0,
    transition: {
      delay: ANIMATION_DELAY,
      duration: ANIMATION_DURATION,
    },
  },
};

export const animateSlideLeft = {
  hidden: {
    x: '115%',
  },
  visible: {
    x: 0,
    transition: {
      delay: ANIMATION_DELAY,
      duration: ANIMATION_DURATION,
    },
  },
};

export const animateSlideUp = {
  hidden: {
    y: '115%',
  },
  visible: {
    y: 0,
    transition: {
      delay: ANIMATION_DELAY,
      duration: ANIMATION_DURATION,
    },
  },
};
