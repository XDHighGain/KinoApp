import React from "react";
import { View, Dimensions } from "react-native";
import { Styles } from "./styles";
import { BottomNavigationItem } from "../BottomNavigationItem";
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from "react-native-reanimated";
import { NavigateToBookmarksScreen, NavigateToFavotitesScreen, NavigateToMainScreen, NavigateToUserScreen } from "../../../Navigation/Navigation";

export const BottomNavigationBar = () => {
    const [activeItem, setActiveItem] = React.useState<number>(1)
    const translateX = useSharedValue<number>(0);
    const windowSize = React.useMemo(() => Dimensions.get('screen').width, []);

    const customSpringStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(translateX.value, { duration: 800 }) }],
        };
    });

    const handleNavigate = (index: number) => {
        switch (index) {
            case 1:
                NavigateToMainScreen();
                break;
            case 2:
                NavigateToFavotitesScreen();
                break;
            case 3:
                NavigateToBookmarksScreen();
                break;
            case 4:
                NavigateToUserScreen();
                break;
        }
    }

    const handleItemPress = (index: number) => {
        translateX.value = (windowSize / 4) * (index - 1)
        setActiveItem(index);
        handleNavigate(index)
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.barContainer}>
                <BottomNavigationItem isActive={activeItem == 1} onPress={handleItemPress} index={1} title={'home'} />
                <BottomNavigationItem isActive={activeItem == 2} onPress={handleItemPress} index={2} title={'favorite'} />
                <BottomNavigationItem isActive={activeItem == 3} onPress={handleItemPress} index={3} title={'bookmarks'} />
                <BottomNavigationItem isActive={activeItem == 4} onPress={handleItemPress} index={4} title={'user'} />
            </View>
            <View style={Styles.bottomLineContainer}>
                <Animated.View style={[customSpringStyles, Styles.animatedLine]}></Animated.View>
            </View>
        </View>
    )
}