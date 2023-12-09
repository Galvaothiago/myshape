import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";

const {Screen, Navigator} = createStackNavigator();

export const StackRoutes = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {/* <Screen 
                name="login"
                component={Login}
            /> */}
            <Screen 
                name="home"
                component={Home}
            />
        </Navigator>
    )
}