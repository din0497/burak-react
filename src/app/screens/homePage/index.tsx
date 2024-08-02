import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../libs/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../libs/enums/product.enum";

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes(data: Product[]) {
    return dispatch(setPopularDishes(data));
  },
  setNewDishes(data: Product[]){
    return dispatch(setNewDishes(data))
  }
});



export default function HomePage() {
  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        console.log("data:", data);
        setPopularDishes(data);
      })
      .catch((err) => console.log(err));

       product
         .getProducts({
           page: 1,
           limit: 4,
           order: "createdAt",
           productCollection: ProductCollection.DISH,
         })
         .then((data) => {
           console.log("data:", data);
           setNewDishes(data);
         })
         .catch((err) => console.log(err));
  }, []);

 
  

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
