import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    barContainer: {
        width :'100%',
        backgroundColor: Colors.Secondary,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    container: {
        width: '100%',
        height: null,
        flexDirection: 'column'
    },
    bottomLineContainer: {
        width: '100%',
        height: null,
        backgroundColor: Colors.Secondary,
    },
    animatedLine: {
        backgroundColor: Colors.Neutral, 
        width: 100, 
        height: 3, 
        opacity: 0.8
    }
})
