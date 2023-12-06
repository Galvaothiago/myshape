import { createStackNavigator } from "@react-navigation/stack"
import { FirstAccess } from "../screens/FirstAccess";
import { Home } from "../screens/Home";

const {Screen, Navigator} = createStackNavigator();

export const StackRoutes = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen 
                name="home"
                component={Home}
            />
        </Navigator>
    )
}