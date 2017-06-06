import React from 'react'
import { I18nManager, Animated, Easing, } from 'react-native';
const DefaultTransitionSpec = ({
  // The following options are meant to mimic the nav animations of iOS 10
  duration: 250,
  timing: Animated.spring,
  bounciness: 0,
  speed: 9,
});

const forInitial = (sceneProps) => {
  const { navigation, scene } = sceneProps;

  const focused = navigation.state.index === scene.index;
  const opacity = focused ? 1 : 0;
  // If not focused, move the scene far away.
  const translate = focused ? 0 : 1000000;
  return {
    opacity,
    transform: [{ translateX: translate }, { translateY: translate }],
  };
};
/**
 * Standard iOS-style slide in from the bottom (used for modals).
 */
const forVertical = (sceneProps) => {
  const { layout, position, scene } = sceneProps;

  if (!layout.isMeasured) {
    return forInitial(sceneProps);
  }

  const index = scene.index;
  const height = layout.initHeight;

  const opacity = position.interpolate({
    inputRange: ([
      index - 1,
      index - 0.99,
      index,
      index + 0.99,
      index + 1,
    ]: Array<number>),
    outputRange: ([0, 1, 1, 0.3, 0]: Array<number>),
  });

  const translateX = 0;
  const translateY = position.interpolate({
    inputRange: ([index - 1, index, index + 1]: Array<number>),
    outputRange: ([height, 0, 0]: Array<number>),
  });

  return {
    opacity,
    transform: [{ translateX }, { translateY }],
  };
};
/**
 * Standard iOS-style slide in from the right.
 */
const forHorizontal = (sceneProps) => {
  const { layout, position, scene } = sceneProps;
  if (!layout.isMeasured) {
    return forInitial(sceneProps);
  }
  const index = scene.index;
  const inputRange = [index - 1, index, index + 1];

  const width = layout.initWidth;
  const outputRange = I18nManager.isRTL
    ? ([-width, 0, 10]: Array<number>)
    : ([width, 0, -10]: Array<number>);

  // Add [index - 1, index - 0.99] to the interpolated opacity for screen transition.
  // This makes the screen's shadow to disappear smoothly.
  const opacity = position.interpolate({
    inputRange: ([
      index - 1,
      index - 0.99,
      index,
      index + 0.99,
      index + 1,
    ]: Array<number>),
    outputRange: ([0, 1, 1, 0.3, 0]: Array<number>),
  });

  const translateY = 0;
  const translateX = position.interpolate({
    inputRange,
    outputRange,
  });

  return {
    opacity,
    transform: [{ translateX }, { translateY }],
  };
};

export default {
  slideFromRight() {
    return {
      transitionSpec: DefaultTransitionSpec,
      screenInterpolator: forHorizontal
    }
  },
  slideFromBottom() {
    return {
      transitionSpec: DefaultTransitionSpec,
      screenInterpolator: forVertical
    }
  }
}
