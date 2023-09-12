import React from 'react';
import { View, Image } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from "react-native-reanimated";
import { Images } from '../../../Resources/Images/Images';
import { Styles } from './styles';
import { ScreenWidth } from '../../../Helpers/ScreenSizeHelper';

interface ISize {
    width: number,
    height: number
}

export const ProgressIndicator: React.FC = () => {

    const [size, setSize] = React.useState<ISize | null>(null)
    const rotation1 = useSharedValue<number>(0);

    React.useEffect(() => {
        console.log('ScreenWidth', ScreenWidth)
        setSize({ width: ScreenWidth, height: ScreenWidth * 1.5 * 0.4 })
    }, [])

    React.useEffect(() => {
        rotation1.value = withRepeat(withTiming(1, { duration: 2000, easing: Easing.linear }), -1);
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotation1.value * 360}deg` }],
    }));

    return (
        <View style={[{ width: size?.width, height: size?.height }, Styles.container]}>
            <Animated.View style={[Styles.animatedContainer, animatedStyle]}>
                <Image style={Styles.image} source={Images.Icons.spinner}></Image>
            </Animated.View>
        </View>
    )
}

