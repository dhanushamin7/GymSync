import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../component/Nav/Navigation";
import Box from "@mui/material/Box";
import Home from "../component/Pages/Home";
import { styled } from "@mui/material/styles";
import "../css/Style.css";
import CssBaseline from "@mui/material/CssBaseline";
import Notifications from "../component/Pages/Notifications";

// Define a styled component for the DrawerHeader
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function UserRoute() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navigation />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, backgroundColor: "#ffffff" }}
        >
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}
