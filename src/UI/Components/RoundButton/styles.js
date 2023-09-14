import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 24,
        backgroundColor: Colors.Primary,
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    title: {
        color: Colors.White,
        fontSize: 16,
        fontWeight: '400',
    },
})
