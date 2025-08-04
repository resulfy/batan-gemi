import React from "react";
import ProductCard from "./components/ProductCard";
import TopAppBar from "./components/TopAppBar";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./page.module.css";
import { Box, Toolbar } from "@mui/material";

export default function Homepage() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TopAppBar />
        <Toolbar />
        <ProductCard />
      </Box>
    </div>
  );
}
