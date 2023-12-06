import { useEffect, useState } from "react"
import { Text, View } from "react-native"

import { styles } from './styles'
import { AsyncStorageImpl } from "../../services/AsyncStorage"

export const Home = () => {
    const [firstAccess, setFirstAccess] = useState(false);

    const verifyFirstAccess = async () => {
        const alreadyAccess = await AsyncStorageImpl.get('@myshape:alreadyAccess');
        if (!alreadyAccess) {
            setFirstAccess(true);
        } 
    }

    useEffect(() => {
        verifyFirstAccess();
    }, [])

    if (firstAccess) {
        return (
            <View style={styles.container}>
                <Text>FirstAccess</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}