import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  useTheme,
} from "@mui/material";
import React from "react";

// import { Container } from './styles';

interface IProps {
  drawerWidth: number;
  window?: any;
  handleDrawerToggle(): void;
  handleClick(event: any, id: string): void;
  mobileOpen: boolean;
}

const PageHeader: React.FC<IProps> = (props: IProps) => {
  const { window, drawerWidth, mobileOpen, handleDrawerToggle, handleClick } =
    props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const theme = useTheme();

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 0 8px 0",
          }}
        >
          <img
            src="./logo.png"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maxWidth: "150px",
            }}
          />
        </div>
        <Divider />
        <List>
          <ListItem
            button
            key="Formação"
            onClick={(event: any) =>
              handleClick(event, "#graduation-container")
            }
          >
            <ListItemText primary="Formação" />
          </ListItem>
          <ListItem
            button
            key="Atendimento"
            onClick={(event: any) =>
              handleClick(event, "#appointment-container")
            }
          >
            <ListItemText primary="Atendimento" />
          </ListItem>
          <ListItem
            button
            key="Avaliação Neuropsicológica"
            onClick={(event: any) =>
              handleClick(event, "#neuroassessment-container")
            }
          >
            <ListItemText primary="Avaliação Neuropsicológica" />
          </ListItem>
          <ListItem
            button
            key="Consultório"
            onClick={(event: any) => handleClick(event, "#clinic-container")}
          >
            <ListItemText primary="Consultório" />
          </ListItem>
          <ListItem
            button
            key="Contato"
            onClick={(event: any) => handleClick(event, "#contact-container")}
          >
            <ListItemText primary="Contato" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default PageHeader;
