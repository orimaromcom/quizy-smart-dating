import * as React from "react";
import { useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import style from "./appbarcomponent.module.css";
import { useState } from "react";

const AppBarComponent = ({ profile, userLogoutAction, totalScore }) => {
  const location = useLocation();
  const [showLogOuot, setShowLogOuot] = useState(false);

  return (
    <AppBar
      position="static"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toolbar
        disableGutters
        style={{
          display: "flex",
          justifyContent:
            location.pathname === "/login" ? "center" : "space-around",
          width: "95%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {location.pathname === "/login" ? null : (
            <div>
              <Typography variant="h6" sx={{ fontFamily: "monospace" }}>
                👑
                {totalScore.toString()}
              </Typography>
            </div>
          )}
        </Box>
        <Box sx={{ display: "flex" }}>
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
        </Box>
        {location.pathname === "/login" ? null : (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip
              title={
                <Button
                  variant="contained"
                  onClick={() => {
                    setShowLogOuot(false);
                    userLogoutAction();
                  }}
                >
                  Logout
                </Button>
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
                <Avatar alt="?" src={profile.picture} />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default AppBarComponent;
