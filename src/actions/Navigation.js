import { NavigationActions } from 'react-navigation';

export const navigateResetScreen = (routeName) => {
  return (dispatch) => {
    const resetNavigator = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: routeName,
        })
      ],
    });
    dispatch(resetNavigator);
  }
};