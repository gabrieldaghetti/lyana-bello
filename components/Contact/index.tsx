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
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/system";
import { Phone, Email } from "@mui/icons-material";
import React from "react";
import Form from "../Form";

// import { Container } from './styles';

const Contact: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      id="contact-container"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        paddingTop: { xs: 9, md: 10 },
        paddingBottom: { xs: 9, md: 10 },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            marginBottom: { xs: 4, md: 0 },
          }}
        >
          <Typography
            color="primary"
            sx={{
              textAlign: { xs: "center", md: "start" },
              fontSize: 32,
              marginBottom: 4,
            }}
          >
            Vamos conversar
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "start" },
              fontSize: { xs: 18, md: 18 },
            }}
          >
            Envie sua mensagem através do
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "start" },
              fontSize: { xs: 18, md: 18 },
            }}
          >
            formulário ou entre em contato:
          </Typography>
          <Box sx={{ marginTop: { xs: 5, md: 8 }, marginRight: { md: 5 } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "start" },
                marginBottom: 1,
              }}
            >
              <Phone color="primary" sx={{ marginRight: 2 }} />
              <Typography sx={{ textAlign: { xs: "center", md: "start" } }}>
                Tel: (24) 9 8816-6087
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Email color="primary" sx={{ marginRight: 2 }} />
              <Typography sx={{ textAlign: { xs: "center", md: "start" } }}>
                E-mail: lyanabello76@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Form />
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
