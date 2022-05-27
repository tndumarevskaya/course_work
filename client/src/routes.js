import Authorization from "./pages/Authorization"
import FavouritePage from "./pages/FavouritePage"
import MainPage from "./pages/MainPage"
import { FAVOURITE_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, REGISTRATION_ROUTE} from "./utils/consts"

export const authorizationRoutes = [
    {
        path: FAVOURITE_ROUTE,
        Element: <FavouritePage/>
    }
]

export const publicRoutes = [
    {
        path: MAINPAGE_ROUTE,
        Element: <MainPage/>
    },
    {
        path: LOGIN_ROUTE,
        Element: <Authorization/>
    },
    {
        path: REGISTRATION_ROUTE,
        Element: <Authorization/>
    }
]
