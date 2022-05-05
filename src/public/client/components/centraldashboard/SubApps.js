import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  card: {
    marginBottom: theme.spacing(5),
    fontFamily: "Roboto",
  },
  media: {
    height: 300,
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
  },
}));

const SubApps = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media.istockphoto.com/vectors/load-bar-simple-isolated-icon-set-progress-concept-illustration-in-vector-id1268337601?k=20&m=1268337601&s=612x612&w=0&h=Vzf7u-Zzbtpy5fHEDl-zPaCHca-oec2-zNmaiKGljOo="
          title="API of various sub-apps within the Kubeflow Ecosystem"
        />
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          style={{ backgroundColor: "#2196f3", height: "10vh", marginBottom: -24, marginRight: -16, marginLeft: -16, paddingLeft: 20, paddingTop: 20, color: "white"}}
        >
          API of various sub-apps within the Kubeflow Ecosystem
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SubApps;
