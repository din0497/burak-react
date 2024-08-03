import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export function HomeNavbar() {
  
  const authMember = null;

  // Handlers

  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box className={"hover-line"}>
            <NavLink to="/">
              <img alt="burak" src="/icons/burak.svg" className="brand-logo" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName="underline">
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName="underline">
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <>
                <Box className={"hover-line"}>
                  <NavLink to="/orders" activeClassName="underline">
                    Orders
                  </NavLink>
                </Box>
                <Box className={"hover-line"}>
                  <NavLink to="/orders" activeClassName="underline">
                    Orders
                  </NavLink>
                </Box>
              </>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName="underline">
                Help
              </NavLink>
            </Box>
            <Basket />

            {!authMember ? (
              <Box>
                <Button className="login" variant="contained">
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src="/icons/default-user.svg"
                aria-haspopup={"true"}
                alt="user.img"
              />
            )}
          </Stack>
        </Stack>
        <Stack className="header-frame">
          <Stack className="detail">
            <Box className="head-txt">World`s Most Delicious Cousine</Box>
            <Box className="wel-txt">The Choice, not just a choice</Box>
            <Box className="service-txt">24 hours service</Box>
            <Box className="signup">
              {!authMember ? (
                <Button
                  variant={"contained"}
                  className="signup-btn"
                >
                  Signup
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Stack className="logo-frame">
            <div className="logo-img"></div>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
