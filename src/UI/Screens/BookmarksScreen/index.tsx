import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../../../Resources/Colors";
import { ToolBar } from "../../Components/ToolBar";

export const NavigationNameBookmarksScreen = 'NavigationNameBookmarksScreen';

export const BookmarksScreen = () => {
    return (
        <View style={{backgroundColor: Colors.Content, flex: 1}}>
            <ToolBar canGoBack={true} title='Закладки' searchIsActive={true}></ToolBar>
        </View>
    )
}