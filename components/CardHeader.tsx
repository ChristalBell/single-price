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
      <Typography sx={{ color: COLORS.teal }}>Join our community </Typography>
      <Typography sx={{ color: COLORS.neonGreen }}>
        30-day, hassle-free money back guarantee
      </Typography>
      <Typography>
        Gain access to our full library of tutorials along with expert code
        reviews, perfect for any developers who are serious about honing their
        skills.{" "}
      </Typography>
    </Box>
  );
};

export default CardHeader;
