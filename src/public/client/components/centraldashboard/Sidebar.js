import {
  Container,
  makeStyles,
  Typography,
  Modal,
  TextField,
  Button,
  Snackbar,
} from "@material-ui/core";
import {
  ExitToApp,
  Settings,
} from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import Profile from "./Profile";
import ProfileSpec from "./ProfileSpec";
import Status from "./Status";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "black",
    marginLeft: theme.spacing(-1),
    paddingTop: theme.spacing(10),
    width: "17vw",
    position: "fixed",
    top: 0,
    backgroundColor: "#f8fafb",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#f8fafb",
      color: "#555",
      height: "100vh",
      border: "1px solid #ece7e7",
      width: "17vw",
      position: "fixed",
      top: 0,
    },
  },
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

const Sidebar = () => {
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
    <Container className={classes.container}>
      <Profile />
      <ProfileSpec />
      <Status />
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
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
    </Container>
  );
};

export default Sidebar;
