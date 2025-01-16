"use client";
import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const WhyUs = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  const reasons = [
    "Tutorials by industry experts",
    "Peer and expert code review",
    "Coding exercises",
    "Access to our GitHub repos",
    "Community forum",
    "Flashcard decks",
    "New videos every week",
  ];

  return (
    <Box
      sx={{
        backgroundColor: COLORS.lightBlue,
        borderRadius: mobile ? "0" : "0 0 0.5rem 0",
        padding: "2.5rem",
        color: COLORS.white,
        maxWidth: "19.875rem",
      }}
    >
      <Typography sx={{ fontWeight: "bold", marginBottom: ".75rem" }}>
        Why Us
      </Typography>
      {reasons.map((pros) => {
        return (
          <Typography
            sx={{
              fontSize: ".75rem",
              lineHeight: "1.2rem",
            }}
            key={pros}
          >
            {" "}
            {pros}
          </Typography>
        );
      })}
    </Box>
  );
};

export default WhyUs;
