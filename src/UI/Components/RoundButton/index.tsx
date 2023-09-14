import React from 'react';
import {View, Image, TouchableOpacity, Text, ViewStyle} from 'react-native'
import { Styles } from './styles';
import { Images } from '../../../Resources/Images/Images';
import { EditFavorites, IsFavorite } from '../../../Storage/FavoriteStorage';

interface IButton {
    title: string,
    style?: ViewStyle,
    onPress?: () => void
}

export const RoundButton: React.FC<IButton> = (props) => {

    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false)



    const handlePress = () => {

    }


    return(
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8} style={Styles.container}>
            <Text style={Styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}