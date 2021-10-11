import { Grid, TextField, Box, FormControlLabel, Button } from "@mui/material";
import React, { useState } from "react";

// import { Container } from './styles';

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log();
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ width: { xs: "100%", md: "600px" } }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="fname"
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
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="phone"
            label="Telefone"
            name="phone"
            autoComplete="phone"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="title"
            label="Assunto"
            type="title"
            id="title"
            autoComplete="title"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="message"
            label="Mensagem"
            type="message"
            id="message"
            autoComplete="message"
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
    </Box>
  );
};

export default Form;
