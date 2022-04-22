import React from "react";

import { BottomNavigation } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function Footer() {
  return (
    <div>
      <hr />
      <Box
        m={2}
        p={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="subtitle1">
            &copy; All Right Reserved 2022 Yobny Tech
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </div>
  );
}
