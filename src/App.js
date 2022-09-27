import { Grid, List, Card, Box } from "@mui/material";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import React, { useState } from "react";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  const addContactHandler = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ContactForm handleClick={addContactHandler} />
        </Grid>
        <Grid item xs={8}>
          <Card
            sx={{
              width: 600,
              height: "auto",
              margin: 10,
              backgroundColor: "#C3F8FF",
              color: "light",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "40ch" },
                width: "100%",
              }}
              noValidate
              autoComplete="off"
            >
              <List>
                {contacts.map((contact, index) => (
                  <Contact key={index} data={contact} />
                ))}
              </List>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
