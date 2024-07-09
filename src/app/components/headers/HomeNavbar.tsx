import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
  const authMember = 1;
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

            {!authMember ? (
              <Box>
                <Button className="login-button" variant="contained">
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
        <Stack>Detail</Stack>
      </Container>
    </div>
  );
}
