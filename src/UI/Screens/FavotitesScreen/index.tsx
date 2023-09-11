import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../../../Resources/Colors";
import { ToolBar } from "../../Components/ToolBar";

export const NavigationNameFavoritesScreen = 'NavigationNameFavoritesScreen';

export const FavotitesScreen = () => {
    return (
        <View style={{backgroundColor: Colors.Content, flex: 1}}>
            <ToolBar canGoBack={true} title='Избранное' searchIsActive={true}></ToolBar>
        </View>
    )
}