import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";


const selectHomePage = (state: AppRootState) => {
    return state.homePage
};

export const retrievePopularDishes = createSelector(selectHomePage,
    (HomePage) => HomePage.popularDishes,
)

export const  retrieveNewDishes = createSelector(selectHomePage,
    (HomePage) => HomePage.newDishes
)

export const retrieveTopUsers = createSelector(selectHomePage,
    (HomePage) => HomePage.topUsers
)