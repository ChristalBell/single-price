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
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontWeight: "bold", marginBottom: ".75rem" }}>
        Monthly Subscription
      </Typography>
      <Typography
        sx={{
          fontSize: ".75rem",
          color: COLORS.grey,
          fontWeight: "light",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.75rem",
            marginRight: ".5rem",
            color: COLORS.white,
          }}
        >
          $29
        </span>{" "}
        per month
      </Typography>
      <Typography
        sx={{ fontSize: ".75rem", marginBottom: "2rem", marginTop: ".25rem" }}
      >
        Full access for less than $1 a day
      </Typography>
      <Button
        sx={{
          backgroundColor: COLORS.neonGreen,
          color: COLORS.white,
          "&:hover": { backgroundColor: COLORS.white, color: COLORS.teal },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default CTA;
