import React from "react";
import { Box, IconButton, Typography, Container } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/system";

const Appointment: React.FC = () => {
  return (
    <Box
      id="appointment-container"
      sx={{
        backgroundImage: "url(./appointment_.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: { xs: 7, md: 10 },
          paddingBottom: { xs: 7, md: 10 },
        }}
      >
        <Typography
          sx={{
            fontSize: 32,
            textAlign: { xs: "center", md: "start" },
            marginTop: { xs: 1, md: 0 },
            marginBottom: 1,
            color: "white",
          }}
        >
          Atendimento
        </Typography>
        <Typography
          sx={{ textAlign: "justify", marginBottom: 2, color: "white" }}
        >
          Consultas com horários previamente agendados, de 2ª. a 6ª.
        </Typography>
        <Typography sx={{ textAlign: "justify", color: "white" }}>
          Especificidades de cada atendimento serão esclarecidas na primeira
          consulta e acordadas caso a caso.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            marginBottom: 5,
            marginTop: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "unset", md: "center" },
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#bc8080",
                ":hover": { backgroundColor: "#bc8080" },
                marginRight: 2,
                width: 70,
                height: 70,
              }}
            >
              <PersonIcon sx={{ color: "white", fontSize: 30 }} />
            </IconButton>
            <Box>
              <Typography sx={{ fontSize: 22, color: "white" }}>
                Atendimento Clínico
              </Typography>
              <Typography sx={{ color: "white" }}>
                Atendimento psicológico individual de:
              </Typography>
              <ul>
                <li style={{ marginBottom: "8px", color: "white" }}>
                  <Typography sx={{ color: "white" }}>Crianças</Typography>
                </li>
                <li style={{ marginBottom: "8px", color: "white" }}>
                  <Typography sx={{ color: "white" }}>Adolescentes</Typography>
                </li>
                <li style={{ marginBottom: "8px", color: "white" }}>
                  <Typography sx={{ color: "white" }}>Adultos</Typography>
                </li>
              </ul>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "unset", md: "center" },
              width: { xs: "unset", md: "50%" },
              marginTop: { xs: 2, md: 0 },
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#bc8080",
                ":hover": { backgroundColor: "#bc8080" },
                marginRight: 2,
                width: 70,
                height: 70,
              }}
            >
              <PersonIcon sx={{ color: "white", fontSize: 30 }} />
            </IconButton>
            <Box>
              <Typography sx={{ fontSize: 22, color: "white" }}>
                Avaliação Neuropsicológica
              </Typography>
              <Typography sx={{ textAlign: "justify", color: "white" }}>
                Avaliação complexa que investiga o desempenho cognitivo quando
                há queixas de aprendizagem, de desempenho ocupacional e
                comportamentais que impactam a vida diária a fim de avaliar a
                presença de distúrbios e para fornecer um perfil de dificuldades
                e potencialidades da pessoa.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Appointment;
