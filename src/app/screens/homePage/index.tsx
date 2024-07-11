import React from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisements from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"


export default function HomePage(){
    return <div className="home-page">
       <Statistics/>
       <PopularDishes/>
       <NewDishes/>
       <Advertisements/>
       <ActiveUsers/>
       <Events/>

    </div>
}