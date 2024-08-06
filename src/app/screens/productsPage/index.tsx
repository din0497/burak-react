import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import "../../../css/products.css";
import { CartItem } from "../../../libs/types/search";
import { ProductsPageProps } from "../../../libs/types/props";


export function ProducsPage(props: ProductsPageProps) {
  const { onAdd } = props;
  const products = useRouteMatch();

  console.log(products);

  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct onAdd={onAdd} />
        </Route>
        <Route path={`${products.path}`}>
          <Products onAdd={onAdd} />
        </Route>
      </Switch>
    </div>
  );
}
