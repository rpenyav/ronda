// (tabs)/BottomTabs.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProgramarVisitas from "./ProgramarVisitas";
import { CircularComponent, ConsultasEnLinea } from ".";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Programar Visitas" component={ProgramarVisitas} />
      <Tab.Screen name="Consultas en Línea" component={ConsultasEnLinea} />
      <Tab.Screen name="Circular" component={CircularComponent} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
