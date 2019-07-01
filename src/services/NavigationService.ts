import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationNavigateActionPayload
} from "react-navigation";

let _navigator: NavigationContainerComponent | null;

function setTopLevelNavigator(
  navigatorRef: NavigationContainerComponent | null
): void {
  _navigator = navigatorRef;
}

function navigate(
  routeName: string,
  params?: NavigationNavigateActionPayload
): void {
  _navigator &&
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
}

export default {
  navigate,
  setTopLevelNavigator
};
