import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    ERROR_ROUTE,
    FAVORITES_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ProductPage from "./pages/ProductPage";
import Favourites from "./pages/Favourites";
import Error from "./pages/Error";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: ERROR_ROUTE,
        Component: Error
    },
]