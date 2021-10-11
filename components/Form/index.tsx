import { Grid, TextField, Box, Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import Cleave from "cleave.js/react";
import emailjs from "emailjs-com";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const MaskedInput = React.forwardRef<CustomProps>(function MaskedInput(
  props: any,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <Cleave
      {...other}
      ref={ref}
      options={{
        delimiters: ["(", ")", " ", " ", "-"],
        blocks: [0, 2, 0, 1, 4, 4],
      }}
      onChange={(e) => {
        onChange({
          target: {
            name: props.name,
            value: e.target.value,
          },
        });
      }}
    />
  );
});

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<string>("success");
  const [alertText, setAlertText] = useState<string>("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_52t8adi",
        "template_uk09w3c",
        { username: name, phone, usermail: email, title, message },
        "user_SuiEX5OwFeAjroXjHFh26"
      )
      .then(
        (result) => {
          setAlertText("Mensagem enviada com sucesso");
          setSeverity("success");
          handleClick();
          setName("");
          setPhone("");
          setEmail("");
          setTitle("");
          setMessage("");
        },
        (error) => {
          setAlertText("Não foi possivel enviar sua mensagem :(");
          setSeverity("error");
          handleClick();
        }
      );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: { xs: "100%", md: "600px" } }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="off"
            name="name"
            required
            fullWidth
            id="name"
            label="Nome"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="off"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="off"
            required
            fullWidth
            id="phone"
            label="Telefone"
            name="phone"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
            InputProps={{
              inputComponent: MaskedInput,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="off"
            required
            fullWidth
            name="title"
            label="Assunto"
            type="title"
            id="title"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="off"
            fullWidth
            name="message"
            label="Mensagem"
            type="message"
            id="message"
            multiline
            rows={4}
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Enviar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {alertText}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
