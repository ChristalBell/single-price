import React from "react";
import CardHeader from "../components/CardHeader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CTA from "./CTA";
import WhyUs from "./WhyUs";

const CardContainer = () => {
  return (
    <Box
      sx={{
        maxWidth: "39.6875rem",
        maxHeight: "29.6875rem",
      }}
    >
      <CardHeader />
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <CTA />
        <WhyUs />
      </Box>
    </Box>
  );
};

export default CardContainer;
