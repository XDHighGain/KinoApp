import React from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Styles } from './styles';
import { TFilmModel } from '../../Screens/MainScreen';
import { ScreenWidth } from '../../../Helpers/ScreenSizeHelper';

interface ISize {
    width: number,
    height: number
}

export const CinemaCard = ({ filmModel, onPress }: { filmModel: TFilmModel, onPress: () => void }) => {
    const [size, setSize] = React.useState<ISize | null>(null)

    React.useEffect(() => {
        let screenWidth = ScreenWidth * 0.4;
        setSize({ width: screenWidth, height: screenWidth * 1.5 })
    }, [])

    const handlePress = () => {
        if (onPress)
            onPress()
    }

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8} style={[Styles.container, { width: size?.width }]}>
            <Image style={[Styles.image, { width: size?.width, height: size?.height }]} source={{ uri: filmModel.poster }}></Image>
        </TouchableOpacity>
    )
}