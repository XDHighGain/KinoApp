import React from "react";
import { Text, View, FlatList, ImageSourcePropType, ScrollView } from "react-native";
import { Colors } from "../../../Resources/Colors";
import { ToolBar } from "../../Components/ToolBar";
import { ExecuteFetch } from "../../../Network/WebApi";
import { CinemaCard } from "../../Components/CinemaCard";
import { GetFilms, GetSerials } from "../../../Network/Requests";
import { ToolBarHeight } from "../../Components/ToolBar/styles";
import { ProgressIndicator } from "../../Components/ProgressIndicator";
import { NavigateToDetailsScreen } from "../../../Navigation/Navigation";
import { BottomBarHeight } from "../../Components/BottomNavigationBar/styles";
import { Styles } from "./styles";

export const NavigationNameMainScreen = 'NavigationNameMainScreen';

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


export const MainScreen = () => {

    const [films, setFilms] = React.useState<TFilmModel[] | null>(null)
    const [serials, setSerials] = React.useState<TFilmModel[] | null>(null)

    React.useEffect(() => {
        const fetchFilms = async () => {
            return await GetFilms()
        }
        const fetchSerials = async () => {
            return await GetSerials()
        }
        fetchFilms().then(
            (res: any[]) => {
                console.log('123', res)
                let arr: TFilmModel[] = [];
                res.forEach(item => {
                    arr.push({
                        alternativeName: item.alternativeName,
                        countries: item.countries,
                        description: item.shortDescription,
                        genres: item.genres,
                        id: item.id,
                        movieLength: item.movieLength,
                        name: item.name,
                        poster: item.poster.url,
                        rating: {
                            imdb: item.rating.imdb,
                            kp: item.rating.kp,
                        },
                        type: item.type,
                        year: item.year
                    })
                })
                setFilms(arr)
            }
        )
        fetchSerials().then(
            (res: any[]) => {
                console.log('123', res)
                let arr: TFilmModel[] = [];
                res.forEach(item => {
                    arr.push({
                        alternativeName: item.alternativeName,
                        countries: item.countries,
                        description: item.description,
                        genres: item.genres,
                        id: item.id,
                        movieLength: item.movieLength,
                        name: item.name,
                        poster: item.poster.url,
                        rating: {
                            imdb: item.rating.imdb,
                            kp: item.rating.kp,
                        },
                        type: item.type,
                        year: item.year
                    })
                })
                setSerials(arr)
            }
        )
    }, [])

    const renderItem = React.useCallback((itemModel: any) => {
        return (
            <CinemaCard
            onPress={() => NavigateToDetailsScreen({
                params: itemModel.item
            })}
            filmModel={itemModel.item}/>
        )
    }, [films])

    const renderItem2 = React.useCallback((itemModel: any) => {
        return (
            <CinemaCard
            onPress={() => NavigateToDetailsScreen({
                params: itemModel.item
            })}
            filmModel={itemModel.item}/>
        )
    }, [serials])

    return (
        <View style={{ backgroundColor: Colors.Content, flex: 1 }}>
            <ToolBar canGoBack={true} title='Кино и сериалы' searchIsActive={true}></ToolBar>
            <View style={{ flex: 1, flexDirection: 'column', alignContent: 'flex-start' }}>
                <ScrollView>
                    <View style={[Styles.buffer, {height: ToolBarHeight}]}/>
                    <Text style={Styles.listTitle}>Подборка фильмов</Text>
                    <FlatList
                        ListEmptyComponent={ProgressIndicator}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ height: null, marginBottom: 24 }}
                        data={films}
                        renderItem={renderItem}
                    />
                    <Text style={Styles.listTitle}>Подборка сериалов</Text>
                    <FlatList
                        ListEmptyComponent={ProgressIndicator}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ height: null }}
                        data={serials}
                        renderItem={renderItem2}
                    />
                    <View style={[Styles.buffer, {height: BottomBarHeight}]}/>
                </ScrollView>
            </View>
        </View>
    )
}