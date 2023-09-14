import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IPrefsTypes {
    key: string,
    value?: any
}

export const GetPrefs: any = async ({ key }: IPrefsTypes) => {
    return await AsyncStorage.getItem(key)
}

export const SetPrefs = async ({ key ,value }: IPrefsTypes) => {
    await AsyncStorage.setItem(key, value)
}

export const ClearPrefs = async ({ props }: { props: IPrefsTypes }) => {
    await AsyncStorage.removeItem(props.key)
}