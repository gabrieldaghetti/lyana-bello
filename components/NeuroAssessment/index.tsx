import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@mui/material";
import React from "react";

// import { Container } from './styles';

const Graduation: React.FC = () => {
  return (
    <Box
      id="neuroassessment-container"
      sx={{
        backgroundColor: "#f2e8e6",
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
          Avaliação Neuropsicológica
        </Typography>
        <Hidden mdUp>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src="./cerebro.png" style={{ width: 200 }} />
          </Box>
        </Hidden>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 22,
                marginBottom: 1,
              }}
            >
              O que é?
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "justify", md: "start" },
              }}
            >
              É uma avaliação sistemática das relações entre o cérebro e o
              comportamento feita por um psicólogo especialista em
              Neuropsicologia com o objetivo de mapear as funções mentais,
              descrevendo o desempenho cognitivo e avaliando suspeitas de
              alterações cognitivas que podem ser decorrentes de desordens
              neurológicas e outros transtornos.
            </Typography>
          </Box>
          <Hidden mdDown>
            <img src="./cerebro.png" style={{ width: 350 }} />
          </Hidden>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 22, marginTop: 4, marginBottom: 1 }}>
            Como é feita?
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "justify", md: "start" },
            }}
          >
            Nessa avaliação são utilizados instrumentos neuropsicológicos
            (testes) padronizados e validados, aprovados pelo SATEPSI (Sistema
            de Avaliação de Testes Psicológicos) do Conselho Federal de
            Psicologia e também tarefas complementares como escalas e
            inventários normatizados.
          </Typography>
          <Typography
            sx={{ marginTop: 1, textAlign: { xs: "justify", md: "start" } }}
          >
            Além da aplicação dos instrumentos neuropsicológicos são necessárias
            entrevistas clínicas e observações da criança / adolescente,
            entrevista com familiares / responsáveis e, se possível, contato com
            a equipe escolar e outros profissionais envolvidos. Dessa forma, a
            avaliação neuropsicológica tem a duração média de 8 a 10 sessões,
            podendo ser necessário mais, incluindo a sessão de devolução do
            laudo.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 22, marginTop: 4, marginBottom: 1 }}>
            O que é avaliado?
          </Typography>
          <Typography sx={{ marginBottom: 1 }}>
            O profissional avalia os principais domínios cognitivos
          </Typography>
          <ul>
            <li style={{ marginBottom: "8px" }}>
              <Typography>Habilidade Intelectual (QI)</Typography>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <Typography>Atenção</Typography>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <Typography>Aprendizagem e Memória</Typography>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <Typography>
                Funções Executivas (Planejamento, Organização, Flexibilidade e
                Inibição)
              </Typography>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <Typography>Percepção Visual</Typography>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <Typography>Coordenação Motora</Typography>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <Typography>Afetividade</Typography>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <Typography>Comportamento</Typography>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <Typography>Habilidades Sociais</Typography>
            </li>
          </ul>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 22, marginTop: 4, marginBottom: 1 }}>
            Quem pode solicitar?
          </Typography>
          <Typography sx={{ textAlign: { xs: "justify", md: "start" } }}>
            A avaliação neuropsicológica pode ser solicitada por vários
            profissionais como neurologistas, psiquiatras, pediatras e também
            por professores, psicopedagogos, fonoaudiólogos, psicólogos, dentre
            outros. É solicitada como recurso para nortear o diagnóstico e
            estabelecer o tratamento e os tipos de intervenção ou reabilitação
            mais adequados. A procura espontânea pela família também pode
            ocorrer caso se perceba a necessidade da criança ou adolescente
            passar por uma avaliação neuropsicológica devido a queixas
            cognitivas como desatenção, problemas de aprendizagem, alterações
            comportamentais, entre outras.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Graduation;
