import React from "react";
import "./css/app.css";
import { Link, Route, Router, Switch } from "react-router-dom";
import HomePage from "./app/screens/homePage";
import { ProducsPage } from "./app/screens/productsPage";
import { OrdersPage } from "./app/screens/ordersPage";
import { UserPage } from "./app/screens/userPage";

export function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page">UserPage</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/products">
          <ProducsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
