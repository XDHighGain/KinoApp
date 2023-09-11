import { NavigationNameBookmarksScreen } from "../UI/Screens/BookmarksScreen";
import { NavigationNameDetailsScreen } from "../UI/Screens/DetailsScreen";
import { NavigationNameFavoritesScreen } from "../UI/Screens/FavotitesScreen";
import { NavigationNameMainScreen } from "../UI/Screens/MainScreen";
import { NavigationNameUserScreen } from "../UI/Screens/UserScreen";
import { GoBack, Navigate } from "./RootOptions";

export const NavigateToMainScreen = () => {
    Navigate({
        name: NavigationNameMainScreen
    })
}

export const NavigateToFavotitesScreen = () => {
    Navigate({
        name: NavigationNameFavoritesScreen
    })
}

export const NavigateToBookmarksScreen = () => {
    Navigate({
        name: NavigationNameBookmarksScreen
    })
}

export const NavigateToUserScreen = () => {
    Navigate({
        name: NavigationNameUserScreen
    })
}

export const NavigateToDetailsScreen = ({params}: {params : any}) => {
    Navigate({
        name: NavigationNameDetailsScreen,
        params: params
    })
}
   
export const NavigateBack = () => {
    GoBack()
}