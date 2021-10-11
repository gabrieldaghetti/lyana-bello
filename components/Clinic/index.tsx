import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";

// import { Container } from './styles';

const Clinic: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      id="clinic-container"
      sx={{
        paddingTop: { xs: 9, md: 10 },
        paddingBottom: { xs: 9, md: 10 },
      }}
    >
      <Container>
        <Typography
          sx={{
            textAlign: { xs: "center", md: "start" },
            fontSize: 32,
            marginBottom: 4,
            color: "#bc8080",
          }}
        >
          Consultório
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Box sx={{ marginBottom: { xs: 3, md: 0 }, marginRight: { md: 5 } }}>
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Xerém
            </Typography>
            <Typography sx={{ textAlign: { xs: "center", md: "start" } }}>
              Pça da Mantiquira, 73 Sala 103
            </Typography>
            <Typography sx={{ textAlign: { xs: "center", md: "start" } }}>
              Duque de Caxias – RJ
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <ImageList
              sx={{ width: { xs: 350, md: 650 } }}
              variant="standard"
              cols={matches ? 2 : 1}
              gap={26}
            >
              <ImageListItem>
                <img
                  src={`./clinic_1.jpg?w=280&h=280&fit=crop&auto=format`}
                  srcSet={`./clinic_1.jpg?w=280&h=280&fit=crop&auto=format&dpr=2 2x`}
                  alt="Imagem do Consultório"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={`/clinic_2.jpg?w=280&h=280&fit=crop&auto=format`}
                  srcSet={`./clinic_2.jpg?w=280&h=280&fit=crop&auto=format&dpr=2 2x`}
                  alt="Imagem do Consultório"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Clinic;
