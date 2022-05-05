import Header from './public/client/Header';
import Sidebar from './public/client/Sidebar';
import { Grid } from "@material-ui/core";
import Ecosystem from './public/client/Ecosystem';

const App = () => {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#003c75",
        height: "450vh",
        width: "100%",
        position: "relative",
        backgroundSize: "cover",
        margin: "0px",
        padding: "0px",
      }}
    >
      <Header />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={8} xs={10} style={{marginLeft: 100, marginTop: 20}}>
          <Ecosystem />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
