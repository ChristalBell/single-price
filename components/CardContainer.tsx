"use client";
import React from "react";
import CardHeader from "../components/CardHeader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CTA from "./CTA";
import WhyUs from "./WhyUs";
import useMediaQuery from "@mui/material/useMediaQuery";

const CardContainer = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        maxWidth: "39.6875rem",
        maxHeight: "29.6875rem",
      }}
    >
      <CardHeader />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        }}
      >
        <CTA />
        <WhyUs />
      </Box>
    </Box>
  );
};

export default CardContainer;
