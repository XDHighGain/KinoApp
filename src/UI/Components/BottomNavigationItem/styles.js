import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderRadius: 8,
        marginHorizontal: 12,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    item: {
        width: 24,
        height: 24,
        tintColor: Colors.Content
    },
    titleText: {
        color: Colors.Content,
        fontSize: 12
    }
})
