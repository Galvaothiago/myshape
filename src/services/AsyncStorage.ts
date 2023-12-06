import AsyncStorage from "@react-native-async-storage/async-storage";

import { ILocalStorage } from "../interfaces/localStorage";

export const AsyncStorageImpl: ILocalStorage = {
    get: async <T>(key: string): Promise<T> => {
        const value = await AsyncStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    set: <T>(key: string, value: T): void => {
        AsyncStorage.setItem(key, JSON.stringify(value));
    },
    remove: (key: string): void => {
        AsyncStorage.removeItem(key);
    },
    clear: (): void => {
        AsyncStorage.clear();
    }
}