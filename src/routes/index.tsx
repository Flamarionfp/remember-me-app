import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { appRoutes } from "./app.routes";
import { authRoutes } from "./auth.routes";
import { useAuth } from "../hooks";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {(isAuthenticated ? appRoutes : authRoutes).map((route) => (
          <Stack.Screen key={route.id} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
