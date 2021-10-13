import type { NextPage } from "next";
import React from "react";
import {
  Button,
  Container,
  Hidden,
  Toolbar,
  AppBar,
  Box,
  IconButton,
  Zoom,
  Fab,
  useScrollTrigger,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import PageHeader from "../components/PageHeader";
import Graduation from "../components/Graduation";
import Appointment from "../components/Appointment";
import NeuroAssessment from "../components/NeuroAssessment";
import Clinic from "../components/Clinic";
import Contact from "../components/Contact";
import Banner from "../components/Banner";
import Copyright from "../components/Copyright";

const drawerWidth = 240;

const Home: NextPage = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (event: any, id: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector(id);

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      handleDrawerToggle();
    }, 900);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          alignItems: { xs: "unset", lg: "center" },
          width: { xs: "100vw" },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: { xs: "unset", lg: "space-between" },
            backgroundColor: "white",
            width: { xs: "100vw", lg: 1200 },
          }}
        >
          <Hidden lgUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                position: "absolute",
                marginLeft: "1px",
              }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <img
              src="./logo-horizontal.png"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                maxWidth: "150px",
                margin: "auto",
              }}
            />
          </Hidden>
          <Hidden lgDown>
            <img
              src="./logo-horizontal.png"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                maxWidth: "200px",
              }}
            />
            <div>
              <Button
                color="inherit"
                sx={{ marginLeft: 2, color: "black" }}
                onClick={(event: any) =>
                  handleClick(event, "#graduation-container")
                }
              >
                Formação
              </Button>
              <Button
                color="inherit"
                sx={{ marginLeft: 2, color: "black" }}
                onClick={(event: any) =>
                  handleClick(event, "#appointment-container")
                }
              >
                Atendimento
              </Button>
              <Button
                color="inherit"
                sx={{ marginLeft: 2, color: "black" }}
                onClick={(event: any) =>
                  handleClick(event, "#neuroassessment-container")
                }
              >
                Avaliação Neuropsicológica
              </Button>
              <Button
                color="inherit"
                sx={{ marginLeft: 2, color: "black" }}
                onClick={(event: any) =>
                  handleClick(event, "#clinic-container")
                }
              >
                Consultório
              </Button>
              <Button
                color="inherit"
                sx={{ marginLeft: 2, color: "black" }}
                onClick={(event: any) =>
                  handleClick(event, "#contact-container")
                }
              >
                Contato
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>

      <PageHeader
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleClick={handleClick}
      />

      <Box component="main">
        <Toolbar />
        <Banner />
        <Graduation />
        <Appointment />
        <NeuroAssessment />
        <Clinic />
        <Contact />
        <Copyright />

        <Zoom
          in={useScrollTrigger({ disableHysteresis: true, threshold: 100 })}
        >
          <Box
            onClick={(event: any) => handleClick(event, "#home")}
            role="presentation"
            sx={{ position: "fixed", bottom: 16, right: 16 }}
          >
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Zoom>
      </Box>
    </div>
  );
};

export default Home;
