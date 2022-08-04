import SwitchButton from "./SwitchButton/SwitchButton";
import * as React from "react";
import { useLocation } from "react-router-dom";
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
import style from "./appbarcomponent.module.css";

import { useState } from "react";

const pages = ["USERSCORE"];

const AppBarComponent = ({ profile, userLogoutAction }) => {
  const location = useLocation();

  const [showLogOuot, setShowLogOuot] = useState(false);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
          {location.pathname === "/login" ? null : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip
                title={
                  <>
                    <Button
                      variant="contained"
                      onClick={() => {
                        setShowLogOuot(false);
                        userLogoutAction();
                      }}
                    >
                      Logout
                    </Button>
                    {
                      <div className={style.audio_container}>
                        <span className={style.audio_switch}>
                          <SwitchButton />
                          <div className={style.audio_emoji}>🔉</div>
                        </span>
                      </div>
                    }
                  </>
                }
                open={showLogOuot}
                PopperProps={{
                  popperOptions: {
                    placement: "top",
                  },
                }}
                placement="top"
              >
                <IconButton
                  onClick={() => {
                    setShowLogOuot((prev) => !prev);
                  }}
                  sx={{ p: 0 }}
                >
                  <Avatar alt="Remy Sharp" src={profile.picture} />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarComponent;
