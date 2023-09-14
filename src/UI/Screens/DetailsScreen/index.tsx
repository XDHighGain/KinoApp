import React from "react";
import { Text, View, ScrollView, Image, Dimensions, FlatList, TouchableOpacity, ListRenderItem } from "react-native";
import { Colors } from "../../../Resources/Colors";
import { ToolBar } from "../../Components/ToolBar";
import { Styles } from "./styles";
import { BottomBarHeight } from "../../Components/BottomNavigationBar/styles";
import { Images } from "../../../Resources/Images/Images";
import { FavoriteButton } from "../../Components/FavoriteButton";
import { UpCaseFirstSymbol } from "../../../Helpers/StringHelper";
import { RoundButton } from "../../Components/RoundButton";
import { Strings } from "../../../Resources/Strings";
import { GetFilmById } from "../../../Network/Requests";

export const NavigationNameDetailsScreen = 'NavigationNameDetailsScreen';

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

export interface IActorData {
    description: string,
    name: string,
    profession: string,
    photo: string,
    id: number
}

export type TFilmModel2 = {
    alternativeName: string,
    countries: any[],
    description: string,
    genres: any[],
    id: number,
    movieLength: number,
    name: string,
    poster: string,
    persons: IActorData[],
    rating: {
        imdb: number,
        kp: number,
    },
    type: string,
    year: number
}

export const DetailsScreen = (props: any) => {

    const [details, setDetails] = React.useState<TFilmModel>(props.route.params)
    const [details2, setDetails2] = React.useState<TFilmModel2 | null>(null)

    React.useEffect(() => {
        const FetchData = async () => {
            let data = await GetFilmById(details.id) as TFilmModel2;
            setDetails2(data)
            //console.log('1111111111', data)
        }
        FetchData();
    }, [])

    const getGenres = () => {
        let genres: string[] = [];
        details.genres.forEach(item => genres.push(item.name))
        return UpCaseFirstSymbol(genres.join(', '))
    }

    const renderPersons: ListRenderItem<IActorData> = (item) => {
        return(
            <TouchableOpacity style={{elevation: 4, width: 100, height: 100, borderRadius: 12, margin: 12, backgroundColor: Colors.Primary}}>
                <Image style={{width: 100, height: 100, resizeMode: 'contain', borderRadius: 12}} source={{uri: item.item.photo}}></Image>
                <Text style={{textAlign: 'center'}}>{item.item.name}</Text>
                <Text style={{textAlign: 'center'}}>{item.item.description}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ backgroundColor: Colors.Content, flex: 1 }}>
            <ToolBar canGoBack={true} title='Кино и сериалы' searchIsActive={true}></ToolBar>
            <View style={{ flex: 1, flexDirection: 'column', alignContent: 'flex-start' }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ width: '100%', height: Dimensions.get('screen').width * 1.5 }}>
                        <Image style={{ width: '100%', height: Dimensions.get('screen').width * 1.5, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }} source={{ uri: details.poster.toString() }}></Image>
                        <Image style={{ width: '100%', height: 80, resizeMode: 'stretch', position: 'absolute', bottom: 0 }} source={Images.Drawable.gradient}></Image>
                    </View>
                    <View style={Styles.titleContainer}>
                        <View>
                            <Text style={Styles.titleText}>{details.alternativeName}</Text>
                            <Text style={Styles.subtitleText}>{`${details.year}, ${getGenres()}`}</Text>
                        </View>
                    </View>
                    <View style={Styles.ratingsContainer}>
                        <View style={Styles.ratingItem}>
                            <Text style={Styles.ratingTitle}>IMBD</Text>
                            <Text style={Styles.ratingValue}>{details.rating.imdb}</Text>
                        </View>
                        <View style={Styles.ratingItem}>
                            <Text style={Styles.ratingTitle}>KP</Text>
                            <Text style={Styles.ratingValue} >{details.rating.kp}</Text>
                        </View>
                    </View>
                    <View style={Styles.buttonsContainer}>
                        <RoundButton title={Strings.watchTrailer}></RoundButton>
                        <View style={{ width: 40 }}></View>
                        <FavoriteButton Id={details.id}></FavoriteButton>
                    </View>
                    <Text style={Styles.description}>{details.description}</Text>
                    <View style={Styles.actorsContainer}>
                        <Text style={Styles.sectionTitle}>{Strings.actors}</Text>
                     <FlatList
                     keyExtractor={(item, index) => `${item}${index}`}
                     showsHorizontalScrollIndicator={false}
                     horizontal={true}
                     data={details2?.persons}
                     renderItem={renderPersons}
                     />   
                        
                        
                    </View>
                    <View style={{ height: BottomBarHeight }}></View>
                </ScrollView>
            </View>
        </View>
    )
}