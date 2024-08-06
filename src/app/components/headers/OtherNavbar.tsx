import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../libs/types/search";
import { CartItemProp, ProductsPageProps } from "../../../libs/types/props";
/* import Basket from "./Basket"; */

export const OtherNavbar = (props: ProductsPageProps) => {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;
  const authMember = 0;

  return (
    <div className="other-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box className="">
            <NavLink to={"/"}>
              <img className="brand-logo" alt="" src="/icons/burak.svg" />
            </NavLink>
          </Box>

          <Stack className="links">
            <Box className="hover-line">
              <NavLink to={"/"}>Home</NavLink>
            </Box>

            <Box className="hover-line">
              <NavLink activeClassName="underline" to={"/products"}>
                Products
              </NavLink>
            </Box>

            {authMember ? (
              <>
                <Box className="hover-line">
                  <NavLink activeClassName="underline" to={"/orders"}>
                    Orders
                  </NavLink>
                </Box>
                <Box className="hover-line">
                  <NavLink activeClassName="underline" to={"/members/member"}>
                    My Page
                  </NavLink>
                </Box>
              </>
            ) : null}

            <Box className="hover-line">
              <NavLink activeClassName="underline" to={"/help"}>
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />

            {authMember ? (
              <img
                className="user-avatar"
                src={"/icons/default-user.svg"}
                alt="user"
              />
            ) : (
              <Box>
                <Button variant="contained" className="login">
                  Login
                </Button>
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};
