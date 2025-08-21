'use client';

import React from "react";
import { Provider } from "react-redux";
import { store } from "../../src/redux/store";
import TopAppBar from "./components/TopAppBar";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./page.module.css";
import { Box, Toolbar } from "@mui/material";
import PokeList from "./components/Pokelist/PokeList";

export default function Homepage() {
  return (
    <Provider store={store}>
      <div className={styles.page}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <TopAppBar />
          <Toolbar />
          <PokeList />
        </Box>
      </div>
    </Provider>
  );
}
