import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../../../Resources/Colors";
import { ToolBar } from "../../Components/ToolBar";

export const NavigationNameUserScreen = 'NavigationNameUserScreen';

export const UserScreen = () => {
    return (
        <View style={{backgroundColor: Colors.Content, flex: 1}}>
            <ToolBar canGoBack={true} title='Настройки' searchIsActive={true}></ToolBar>
        </View>
    )
}