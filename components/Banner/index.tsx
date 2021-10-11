import { useTheme, Box, useMediaQuery } from "@mui/material";
import React from "react";

// import { Container } from './styles';

const Banner: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box id="home" sx={{ height: { xs: "500px", lg: "unset" } }}>
      <img
        src="./banner.png"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxWidth: matches ? "100%" : "unset",
          height: "100%",
          marginLeft: matches ? "unset" : "-100px",
        }}
      />
    </Box>
  );
};

export default Banner;
