import { AppBar, Avatar, Badge, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Mail, Notifications } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#2196f3",
    position: "fixed",
    width: "97%",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    cursor: "pointer",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                KUBEFLOW DASHBOARD
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                KUBEFLOW
            </Typography>
            <div className={classes.icons}>
                <Badge badgeContent={4} color="secondary" className={classes.badge}>
                    <Mail />
                </Badge>
                <Badge badgeContent={2} color="secondary" className={classes.badge}>
                    <Notifications />
                </Badge>
                <Avatar alt="Mike" src="" />
            </div>
        </Toolbar>
    </AppBar>
  );
}

export default Header;