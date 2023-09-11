import * as React from 'react';
import { CommonActions, useNavigationContainerRef } from '@react-navigation/native';

export const isReadyRef = React.createRef<(() => void) | boolean | null>();
export const navigationRef = useNavigationContainerRef();

interface NavigateArgs {
  name: string,
  params?: any
}

export const Navigate = ({ name, params }: NavigateArgs) => {
  if (navigationRef?.current)
  navigationRef?.current.dispatch(
    CommonActions.navigate({
      name: name,
      params: params
    })
)
}

export const NavigateAndClearStack = ({ name, params }: NavigateArgs) => {
  if (navigationRef?.current)
    navigationRef?.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: name, params: params }],
      })
    );
};

export const GoBack = () => {
  if (isReadyRef.current && navigationRef.current
    && navigationRef.current.canGoBack()) {
    navigationRef.current.goBack();
  }
};

