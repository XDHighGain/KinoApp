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
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
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
    },
    listTitle: {
        fontSize: 24,
        fontWeight: '400',
        color: Colors.Primary,
        margin: 12
    },
    titleText: {
        fontSize: 28,
        fontWeight: '500',
        color: Colors.Primary,
        //marginHorizontal: 12,
        alignSelf: 'center'
    },
    subtitleText: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.Neutral,
        //marginHorizontal: 12,
        alignSelf: 'center'
    },
    description: {
        marginHorizontal: 12,  
        textAlign: 'justify' 
    },
    ratingsContainer: {
        width: '100%',
        marginHorizontal: 12,
        marginVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    ratingItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    ratingTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.Primary
    },
    ratingValue: {
        fontSize: 14,
        fontWeight: '300'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 24
    },
    actorsContainer: {
        width: '100%',
        height: 200,
        //backgroundColor: 'grey',
        marginVertical: 12
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.Primary,
        marginHorizontal: 12
    }
})
