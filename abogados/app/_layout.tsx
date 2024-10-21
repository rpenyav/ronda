import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  ProgramarVisitas,
  AbonosComponent,
  EspecialidadesComponent,
  NewsComponent,
  GeolocComponent,
  BottomTabs,
} from "./(tabs)";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Navegación">
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />

      <Drawer.Screen name="Programar Visitas" component={ProgramarVisitas} />
      <Drawer.Screen name="Abonos" component={AbonosComponent} />
      <Drawer.Screen
        name="Especialidades"
        component={EspecialidadesComponent}
      />
      <Drawer.Screen name="News" component={NewsComponent} />
      <Drawer.Screen name="Geoloc" component={GeolocComponent} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
