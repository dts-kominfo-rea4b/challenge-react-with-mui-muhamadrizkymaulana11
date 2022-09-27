// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Card, TextField, Box, Button } from "@mui/material";
import { useRef } from "react";

const ContactForm = ({ handleClick }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const urlRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const formAdd = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      url: urlRef.current.value,
    };
    console.log(formAdd);
    handleClick(formAdd);
  };

  return (
    <>
      <Card
        sx={{
          width: 400,
          height: 350,
          margin: 10,
          paddingTop: 5,
          backgroundColor: "#F5EFE6",
          color: "light",
          "&:hover": {
            backgroundColor: "F5EFE6",
            opacity: [0.9, 0.8, 0.7],
          },
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
          onSubmit={submitHandler}
        >
          {/* <form onSubmit={submitHandler}> */}
          <TextField
            required
            id="standard-required"
            label="Name"
            inputRef={nameRef}
          />
          <TextField
            required
            id="standard-required"
            label="Phone"
            inputRef={phoneRef}
          />
          <TextField
            required
            id="standard-required"
            label="Email"
            inputRef={emailRef}
          />
          <TextField
            required
            id="standard-required"
            label="Photo URL"
            defaultValue=""
            inputRef={urlRef}
          />
          <Button variant="text" type="submit">
            ADD NEW
          </Button>
          {/* </form> */}
        </Box>
      </Card>
    </>
  );
};

export default ContactForm;
