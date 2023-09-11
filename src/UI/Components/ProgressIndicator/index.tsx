import React from 'react';
import { View, Image, Dimensions } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from "react-native-reanimated";
import { Images } from '../../../Resources/Images/Images';
import { Colors } from '../../../Resources/Colors';

interface ISize {
    width: number,
    height: number
}

export const ProgressIndicator: React.FC = () => {

    const [size, setSize] = React.useState<ISize | null>(null)
    const rotation1 = useSharedValue<number>(0);

    React.useEffect(() => {
        let screenWidth = Dimensions.get('screen').width * 0.5;
        setSize({ width: screenWidth * 2, height: screenWidth * 1.5 })
    }, [])

    React.useEffect(() => {
        rotation1.value = withRepeat(withTiming(1, { duration: 2000, easing: Easing.linear }), -1);
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotation1.value * 360}deg` }],
    }));

    return (
        <View style={{ width: size?.width, height: size?.height, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[{ width: '30%', height: '30%', }, animatedStyle]}>
                <Image style={{ width: '100%', height: '100%', tintColor: Colors.Secondary }} source={Images.Icons.spinner}></Image>
            </Animated.View>
        </View>
    )
}

