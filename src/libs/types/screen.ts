import { Member } from "./member";
import { Product } from "./product";

/* React APP STATE */


export interface AppRootState {
    homePage: HomePageState
}

/* HOMEPAGE */

export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[]
}