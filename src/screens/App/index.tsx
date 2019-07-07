import { createBottomTabNavigator } from "react-navigation";

/* Screens */
import ScreenAppHome from "./Home";
import ScreenAppDetails from "./Details";

const ScreenAppNavigator = createBottomTabNavigator(
  {
    AppHome: ScreenAppHome,
    AppDetails: ScreenAppDetails
  },
  {
    navigationOptions: { header: null },
    tabBarOptions: {
      style: { paddingHorizontal: 7, paddingVertical: 7, height: 60 }
    }
  }
);

export default ScreenAppNavigator;
