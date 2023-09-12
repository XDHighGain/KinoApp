import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";
export const ToolBarHeight = 50;

export const Styles = StyleSheet.create({
    barContainer: {
        width :'100%',
        backgroundColor: Colors.Secondary,
        height: ToolBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        elevation: 10,
        opacity: 0.95,
        position: 'absolute',
        top: 0,
        zIndex: 2
    },
    leftContentContainer: {
        height: '100%',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    middleContentContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    rightContentContainer: {
        width: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        fontSize: 24,
        color: Colors.Content,
        
    },
    searchIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        tintColor: Colors.Content,
    },
    backIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: Colors.Content, 
    }
})
