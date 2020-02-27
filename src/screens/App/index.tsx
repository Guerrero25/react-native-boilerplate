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
      style: { paddingHorizontal: 7, paddingVertical: 14, height: 64 },
      showLabel: false
    }
  }
);

export default ScreenAppNavigator;
