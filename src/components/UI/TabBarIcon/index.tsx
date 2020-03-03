import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

type MyTabBarIconProps = {
  name: string;
  focused?: boolean;
  size?: number;
  color?: string;
};

const TabBarIcon: React.SFC<MyTabBarIconProps> = ({ name, focused }) => {
  return (
    <Icon size={40} name={name} color={!focused ? "#24292E" : "#2B7489"} />
  );
};

export default TabBarIcon;
