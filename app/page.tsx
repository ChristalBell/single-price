import CardContainer from "@/components/CardContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "98vh",
        }}
      >
        <CardContainer />
      </Typography>
    </Box>
  );
};

export default Home;
