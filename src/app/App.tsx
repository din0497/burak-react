import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import { ProducsPage } from "./screens/productsPage";
import OrdersPage  from "./screens/ordersPage";
import UserPage  from "./screens/userPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { Footer } from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/other-navbar.css";
import "../css/footer.css";
import  HelpPage  from "./screens/helpPage";

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
        <Route path="/help">
          <HelpPage />
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
