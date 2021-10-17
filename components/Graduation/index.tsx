import { Box, Typography, Container } from "@mui/material";
import React from "react";

// import { Container } from './styles';

const Graduation: React.FC = () => {
  return (
    <Box
      id="graduation-container"
      sx={{
        backgroundColor: "#f2e8e6",
        marginTop: "-10px",
        paddingTop: { xs: 9, md: 10 },
        paddingBottom: { xs: 9, md: 10 },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            marginRight: { xs: 0, md: 4 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "250px",
              height: "250px",
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            <img
              src="./profile.jpg"
              alt="imagem de perfil"
              loading="lazy"
              style={{ width: "100%", height: "auto", marginTop: "-30px" }}
            />
          </div>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <div>
            <Typography
              color="primary"
              sx={{
                fontSize: 32,
                textAlign: { xs: "center", md: "start" },
                marginTop: { xs: 1, md: 0 },
              }}
            >
              Lyana Bello
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                marginBottom: 1,
                textAlign: { xs: "center", md: "start" },
              }}
            >
              CRP 05/26611
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Graduada em psicologia há mais de 20 anos pela Universidade
              Federal Fluminense – UFF. Especialista em Neuropsicologia.
              Servidora Pública do Município de Duque de Caxias desde 2003,
              trabalhou em Centro de Atendimento Especializado ao Adolescente e
              realiza atendimento clínico no Programa de Saúde Mental da Unidade
              Pré-Hospitalar - UPH-Xerém. Atua como psicóloga clínica e no
              atendimento a demandas de avaliação neuropsicológica.
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Graduation;
