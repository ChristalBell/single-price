import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { COLORS } from "@/styles/colors";

const CardHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        borderRadius: "0.5rem 0.5rem 0 0 ",
        padding: "2.5rem",
        color: COLORS.grey,
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: COLORS.teal, fontWeight: "bold", marginBottom: "2rem" }}
      >
        Join our community{" "}
      </Typography>
      <Typography
        sx={{
          color: COLORS.neonGreen,
          marginBottom: ".75rem",
          fontWeight: "bold",
        }}
      >
        30-day, hassle-free money back guarantee
      </Typography>
      <Typography
        sx={{ fontWeight: "bold", fontSize: ".9rem", lineHeight: "1.5rem" }}
      >
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.{" "}
      </Typography>
    </Box>
  );
};

export default CardHeader;
