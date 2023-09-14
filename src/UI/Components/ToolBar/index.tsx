import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Styles } from "./styles";
import { Images } from "../../../Resources/Images/Images";
import { NavigateBack } from "../../../Navigation/Navigation";

interface IToolbar {
    canGoBack: boolean,
    title?: string,
    searchIsActive: boolean
}

export const ToolBar: React.FC<IToolbar> = ({ canGoBack, title, searchIsActive }) => {

    const handleItemPress = () => {
        //добавить поиск на текущем скрине
    }

    const handleBackPress = () => {
        NavigateBack()
    }


    return (
        <View style={Styles.barContainer}>
            <TouchableOpacity onPress={handleBackPress} activeOpacity={0.8} style={Styles.leftContentContainer}>
                {canGoBack &&
                    <Image style={Styles.backIcon} source={Images.Icons.arrow}></Image>}
            </TouchableOpacity>
            <View style={Styles.middleContentContainer}>
                <Text style={Styles.titleStyle}>{title}</Text>
            </View>
            <TouchableOpacity onPress={handleItemPress} activeOpacity={0.8} style={Styles.rightContentContainer}>
                {searchIsActive &&
                    <Image style={Styles.searchIcon} source={Images.Icons.search}></Image>}
            </TouchableOpacity>
        </View>
    )
}