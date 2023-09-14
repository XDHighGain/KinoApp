import { GetPrefs, SetPrefs, ClearPrefs } from "../PrefsManager";

const FAVORITE_KEY: string = 'favoriteKey4'

type Id = number;

export const GetAllFavorites = async () => {
    let favorites: Id[]  = JSON.parse(await GetPrefs({
        key: FAVORITE_KEY
    }))
    if(favorites == null)
        return [];
    return favorites;
}

export const EditFavorites = async (Id: Id) => {
    let favorites: Id[] = await GetAllFavorites();
    let index = favorites.indexOf(Id);
    index == -1? favorites.push(Id) : favorites.splice(index, 1);
    await SetPrefs({
        key: FAVORITE_KEY,
        value: JSON.stringify(favorites)
    })
}

export const IsFavorite = async (Id: Id) => {
    let favorites: Id[] = await GetAllFavorites();
    let index = favorites.indexOf(Id);
    return index !== -1;
}