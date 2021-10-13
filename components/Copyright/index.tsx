import { Image } from "@mui/icons-material";
import { Link, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

// import { Container } from './styles';

const Copyright: React.FC = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100%",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Box sx={{ width: "150px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>
            {"©"}
            <Link
              sx={{ color: "black", marginLeft: 1 }}
              underline="none"
              href="https://www.solidsoftwares.com.br"
            >
              Lyana Bello
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>
          <Typography>Todos os direitos reservados</Typography>
        </Box>
        <Box sx={{ marginTop: { xs: 2, md: 0 }, marginRight: 1 }}>
          <a href="https://www.solidsoftwares.com.br" target="_blank">
            <img src="./solidsoftware-blue.png" width="150px" />
          </a>
        </Box>
      </Box>
    </footer>
  );
};

export default Copyright;
