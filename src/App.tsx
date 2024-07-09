import "./css/app.css";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./app/screens/homePage";
import { ProducsPage } from "./app/screens/productsPage";
import { OrdersPage } from "./app/screens/ordersPage";
import { UserPage } from "./app/screens/userPage";
import { HomeNavbar } from "./app/components/headers/HomeNavbar";
import { OtherNavbar } from "./app/components/headers/OtherNavbar";
import { Footer } from "./app/components/footer";

export function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
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
      <Footer />
    </>
  );
}

export default App;
