import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 24, 
        marginVertical: 12,
    },
    animatedContainer: {
        width: '40%', 
        height: '40%',
    },
    image: {
        width: '100%', 
        height: '100%', 
        tintColor: Colors.Secondary,
        resizeMode: 'contain'
    },
})
