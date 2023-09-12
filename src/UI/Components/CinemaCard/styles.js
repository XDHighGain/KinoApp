import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    container: {
        width: '50%',
        height: null,
        backgroundColor: Colors.c1,
        borderRadius: 12,
        elevation: 4,
        alignSelf: 'center',
        flexDirection: 'column',
        marginHorizontal: 24,
        marginVertical: 12,
        //paddingBottom: 12
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 12
        //borderTopLeftRadius: 12, 
        //borderTopRightRadius: 12
    },
    title: {
        fontSize: 18,
        color: Colors.White,
        marginHorizontal: 12,
        fontWeight: '400'
    },
    descr: {
        fontSize: 12,
        color: Colors.White,
        marginHorizontal: 12,
        fontWeight: '400'
    }
})
