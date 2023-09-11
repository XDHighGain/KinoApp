import React from "react";
import { View, Dimensions, TouchableOpacity, Text, Image } from "react-native";
import { Styles } from "./styles";
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from "react-native-reanimated";
import { Images } from "../../../Resources/Images/Images";
import { NavigateBack } from "../../../Navigation/Navigation";

interface IToolbar {
    canGoBack: boolean,
    title: string,
    searchIsActive: boolean
}

export const ToolBar: React.FC<IToolbar> = ({ canGoBack, title, searchIsActive }) => {

    const [activeItem, setActiveItem] = React.useState<number>(1)
    const translateX = useSharedValue<number>(0);
    const windowSize = React.useMemo(() => Dimensions.get('screen').width, []);

    const customSpringStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(translateX.value, { duration: 800 }) }],
        };
    });

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