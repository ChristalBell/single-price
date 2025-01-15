import React from "react";
import CardHeader from "../components/CardHeader";
import Box from "@mui/material/Box";

const CardContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
      }}
    >
      <CardHeader />
    </Box>
  );
};

export default CardContainer;
