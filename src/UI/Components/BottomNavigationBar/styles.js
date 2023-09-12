import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const BottomBarHeight = 80;

export const Styles = StyleSheet.create({
    barContainer: {
        width :'100%',
        backgroundColor: Colors.Secondary,
        height: BottomBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        opacity: 0.95,
        position: 'absolute',
        bottom: 0,
        zIndex: 2
    },
    container: {
        width: '100%',
        height: null,
        flexDirection: 'column',

    },
    bottomLineContainer: {
        width: '100%',
        height: null,
        backgroundColor: Colors.Secondary,
        zIndex: 2
    },
    animatedLine: {
        backgroundColor: Colors.Content, 
        width: 100, 
        height: 3, 
        opacity: 0.8
    }
})
