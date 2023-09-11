import React from 'react';
import { TouchableOpacity, Text, Image, Dimensions } from 'react-native'
import { Styles } from './styles';
import { TFilmModel } from '../../Screens/MainScreen';

interface ISize {
    width: number,
    height: number
}

export const CinemaCard = ({ filmModel, onPress }: { filmModel: TFilmModel, onPress: () => void }) => {
    const [size, setSize] = React.useState<ISize | null>(null)

    React.useEffect(() => {
        let screenWidth = Dimensions.get('screen').width * 0.5;
        setSize({ width: screenWidth, height: screenWidth * 1.5 })
    }, [])

    const handlePress = () => {
        if (onPress)
            onPress()
    }

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8} style={[Styles.container, { width: Dimensions.get('screen').width * 0.5 }]}>
            <Image style={[Styles.image, { width: size?.width, height: size?.height }]} source={{ uri: filmModel.poster }}></Image>
            <Text numberOfLines={1} style={Styles.title}>{filmModel.name}</Text>
            <Text style={Styles.descr} numberOfLines={2}>{filmModel.description}</Text>
        </TouchableOpacity>
    )
}