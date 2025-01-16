"use client";
import Typography from "@mui/material/Typography";
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";
import useMediaQuery from "@mui/material/useMediaQuery";

const CTA = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        backgroundColor: COLORS.teal,
        maxWidth: "19.875rem",
        borderRadius: mobile ? "0" : "0 0 0 0.5rem ",
        padding: "2.5rem",
        color: COLORS.white,
      }}
    >
      <Typography>Monthly Subscription</Typography>
      <Typography>
        <span>$29</span> per month
      </Typography>
      <Typography>Full access for less than $1 a day</Typography>
      <Button sx={{ backgroundColor: COLORS.neonGreen }}>Sign Up</Button>
    </Box>
  );
};

export default CTA;
