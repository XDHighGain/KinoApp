import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native'
import { Styles } from './style';
import { Images } from '../../../Resources/Images/Images';
import { EditFavorites, IsFavorite } from '../../../Storage/FavoriteStorage';

export const FavoriteButton = ({Id}: {Id: number}) => {

    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    React.useEffect(() => {
        const FetchFavorite = async () => {
            let value: boolean = await IsFavorite(Id);
            setIsFavorite(value)
            setIsLoading(false);
        }
        FetchFavorite();
    }, [isLoading])

    const handlePress = () => {
        EditFavorites(Id);
        setIsLoading(true);
    }


    return(
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8} style={Styles.container}>
            <Image style={Styles.image} source={isFavorite? Images.Icons.favorite_true : Images.Icons.favorite}/>
        </TouchableOpacity>
    )
}