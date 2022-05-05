import MuiAlert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Modal,
  TextField,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Person } from "@material-ui/icons";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  text: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: "19px",
    paddingTop: theme.spacing(-1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  modal: {
    width: 500,
    height: 450,
    background: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(8),
      width: "63vw",
    },
  },
  items: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <div className={classes.item} onClick={() => setOpen(true)}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Profile</Typography>
      </div>
      <Modal open={open}>
        <Container className={classes.modal}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.items}>
              <TextField
                id="standard-basic"
                label="Name"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.items}>
              <TextField
                id="standard-basic"
                label="Metadata"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.items}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Tell us about yourself..."
                variant="outlined"
                label="Bio"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.items}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          Profile updated successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Profile;
