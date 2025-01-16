import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const WhyUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.lightBlue,
        borderRadius: "0 0 0.5rem 0",
        padding: "2.5rem",
        color: COLORS.white,
        maxWidth: "19.875rem",
      }}
    >
      <Typography>Why Us</Typography>
      <Typography>Tutorials by industry experts</Typography>
      <Typography>Peer and expert code review</Typography>
      <Typography>Coding exercises</Typography>
      <Typography>Access to our GitHub repos</Typography>
      <Typography>Community forum</Typography>
      <Typography>Flashcard decks</Typography>
      <Typography>New videos every week</Typography>
    </Box>
  );
};

export default WhyUs;
