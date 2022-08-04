import * as React from "react";
import { useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import HeartIcon from "@mui/icons-material/FavoriteTwoTone";
import style from "./appbarcomponent.module.css";

const pages = ["USERSCORE"];

const AppBarComponent = ({ profile }) => {
  /*   useEffect(() => {

  }, [profile]); */
  console.log(profile);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*    <div className="quizy-logo-container">
        <img src="/favicon.png" width="30px" alt="heart" className="quizy-logo"/>
        </div> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: "-2px",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Quizy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            ></IconButton>
          </Box>
          <div className={style.quizy_logo_container}>
            {/*  <HeartIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <img
              src="/favicon.png"
              className={style.quizy_logo}
              width="40p"
              alt="heart"
            />
          </div>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              ml: "10px",

              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Quizy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton /* onClick={ handleOpenUserMenu } */ sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profile.picture}    style={{
             border: '3px solid white'
          }}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarComponent;
