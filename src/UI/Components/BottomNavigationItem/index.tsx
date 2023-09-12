import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { Styles } from "./styles";
import { Images } from "../../../Resources/Images/Images";
import { UpCaseFirstSymbol } from "../../../Helpers/StringHelper";
import Animated from "react-native-reanimated";
import { useAnimatedStyle, withSpring, useSharedValue } from "react-native-reanimated";

export const NavigationNameMainScreen = 'NavigationNameMainScreen';

interface INavItemProps {
    title: string,
    index: number,
    onPress: (index: number) => void,
    isActive: boolean
}

export const BottomNavigationItem: React.FC<INavItemProps> = ({ title, index, onPress, isActive }) => {

    const ImageSource = () => {
        switch (title) {
            case 'home':
                return Images.Icons.home;
                break;
            case 'bookmarks':
                return Images.Icons.bookmarks;
                break;
            case 'favorite':
                return Images.Icons.favorite;
                break;
            case 'user':
                return Images.Icons.user;
                break;
        }
    }
    const opacity = useSharedValue(1);
    const height = useSharedValue(22);
    const customSpringStyles = useAnimatedStyle(() => {
        return {
            opacity: withSpring(opacity.value, { duration: 500 }),
            height: withSpring(height.value, { duration: 2000 }),
        };
    });

    return (
        <TouchableOpacity onPress={() => onPress(index)} activeOpacity={0.8} style={[Styles.itemContainer, { opacity: isActive === true ? 1 : 0.5 }]}>
            <Image style={Styles.item} source={ImageSource()} ></Image>
            {isActive &&
                <Animated.View style={customSpringStyles}>
                    <Text style={Styles.titleText}>{UpCaseFirstSymbol(title)}</Text>
                </Animated.View>
            }
        </TouchableOpacity>
    )
}