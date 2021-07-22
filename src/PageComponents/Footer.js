import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../StyledComponents/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from '@material-ui/icons/Language';

function Copyright() {
  return (
    <React.Fragment>
      {"Copyright © AMI FUSION TECHNOLOGY "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  Grid: {
    display: "flex"
  },
  root: {
    display: "flex",
    backgroundColor: "#17a2b8"
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex"
  },
  iconsWrapper: {
    height: 120,
    display: "flex"
  },
  
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ' #17a2b8',
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  }
 
}));



export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing="auto">
          <Grid 
          justify="flex-start"  item xs={8} sm={8} md={8}
          className={classes.iconsWrapper}
          spacing={2}
          >
            {/* <Grid
              container
              direction="column"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid justify="flex-start" item className={classes.icons}> */}
                <a href="/" className={classes.icon}>
                  <GitHubIcon />
                  {/* <img src="/static/themes/onepirate/appFooterFacebook.png" alt="Facebook" /> */}
                </a>
                <a href="/"
                  className={classes.icon}
                >
                  <TwitterIcon />
                </a>
                <a href="/" className={classes.icon}>
                  <FacebookIcon />
               </a>
                <a href="/" className={classes.icon}>
                  <LanguageIcon />
                </a>
              {/* </Grid>
            </Grid> */}
          </Grid>
          <Grid justify="flex-end" item xs={4} sm={4} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid justify="flex-end" item xs={12}>
                <Copyright />
          </Grid>
         
          
        </Grid>
      </Container>
    </Typography>
  );
}
