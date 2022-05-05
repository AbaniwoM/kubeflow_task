import { Container, makeStyles } from "@material-ui/core";
import SubApps from './SubApps';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Ecosystem = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <SubApps />
      <SubApps />
      <SubApps />
      <SubApps />
      <SubApps />
    </Container>
  );
};

export default Ecosystem;
