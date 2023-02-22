import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { appRoutes } from "./app.routes";
import { authRoutes } from "./auth.routes";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const isLoggedIn = false; // integrate later

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {(isLoggedIn ? appRoutes : authRoutes).map((route) => (
          <Stack.Screen key={route.id} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
