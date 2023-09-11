import React from "react";
import { Text, View, FlatList, ImageSourcePropType, ScrollView, Image, Dimensions } from "react-native";
import { Colors } from "../../../Resources/Colors";
import { ToolBar } from "../../Components/ToolBar";
import { ExecuteFetch } from "../../../Network/WebApi";
import { CinemaCard } from "../../Components/CinemaCard";
import { GetFilms, GetSerials } from "../../../Network/Requests";
import { Styles } from "../../Components/ToolBar/styles";
import { ProgressIndicator } from "../../Components/ProgressIndicator";

export const NavigationNameDetailsScreen = 'NavigationNameDetailsScreen';

export interface IFilmTypes {
    title: string,
    description: string,
    image: string
}

export type IFilmT = {
    title: string,
    description: string,
    image: string
}

export type TFilmModel = {
    alternativeName: string,
    countries: any[],
    description: string,
    genres: any[],
    id: number,
    movieLength: number,
    name: string,
    poster: string,
    rating: {
        imdb: number,
        kp: number,
    },
    type: string,
    year: number
}


export const DetailsScreen = (props: any) => {

    const [details, setDetails] = React.useState<TFilmModel>(props.route.params)
    console.log('details', details)

    return (
        <View style={{ backgroundColor: Colors.Content, flex: 1 }}>
            <ToolBar canGoBack={true} title='Кино и сериалы' searchIsActive={true}></ToolBar>
            <View style={{ flex: 1, flexDirection: 'column', alignContent: 'flex-start' }}>
                <ScrollView style={{flex: 1}}>
                    <Image style={{width: '100%', height: Dimensions.get('screen').width*1.5, borderBottomLeftRadius: 12, borderBottomRightRadius: 12}} source={{uri: details.poster.toString()}}></Image>
                    <Text style={Styles.titleText}>{details.name}</Text>
                    <Text style={Styles.subtitleText}>{details.alternativeName}</Text>
                    <Text>{details.description}</Text>
                </ScrollView>
            </View>
        </View>
    )
}