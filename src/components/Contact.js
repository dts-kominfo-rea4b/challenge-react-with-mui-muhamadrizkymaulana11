// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  ListItem,
  Avatar,
  Typography,
  Divider,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { Fragment } from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="image"
            src={data.photo}
            sx={{ width: 70, height: 70, marginRight: 2 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={data.name}
          secondary={
            <Fragment>
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="body2"
              >
                {`${data.phone}`}
              </Typography>
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="body2"
              >
                {`${data.email}`}
              </Typography>
            </Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default Contact;
