export interface ILocalStorage {
    get: <T>(key: string) => Promise<T>;
    set: <T>(key: string, value: T) => void;
    remove: (key: string) => void;
    clear: () => void;
}