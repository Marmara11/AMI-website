import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import CustomAppBar from "../StyledComponents/CustomAppBar";
import Toolbar, { styles as toolbarStyles } from "../StyledComponents/Toolbar";

const styles = (theme) => ({

  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  leftTitle: {
    flex: 0,
    fontSize: 24,
    underline: 'none',
    color: theme.palette.common.white

  },
  left: {
    display: "flex"
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },

  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
});

function Header(props) {
  const { classes } = props;
  // const Links = [
  //   {
  //     url: '../',
  //     title: 'home',
  //   },
  //   {
  //     url: '../',
  //     title: 'About',
  //   },
  //   {
  //     url: '../',
  //     title: 's',
  //   },
  //   {
  //     url: '../',
  //     title:'p',
  //   },
  //   {
  //     url: '../',
  //     title: 'c',
  //   }
  // ]

  return (
    <div>
      <CustomAppBar position="fixed">
        <Toolbar className={classes.toolbar}>

          <div classname={classes.left}>
            <Link
              variant="h6"
              underline='none'
              className={classes.leftTitle}
              href="/Homepage"
            >
              {"AMI Fusion Technology"}
            </Link>
          </div>
          {/* <div className={classes.right}>

            {Links.map((Link) => (
              <Link
                variant="h6"
                underline='none'
                className={classes.rightLink}
                href={Link.url}
              >
                {Link.title}
              </Link>
            ))}
          </div> */}

          
          <div className={classes.right}>
            <Link 
              variant="h6"
              underline='none'
              className={classes.rightLink}
              href="https://www.google.com"
            >
              {"Home"}
            </Link>
            <Link
              variant="h6"
              underline='none'
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"About "}
            </Link>
            <Link
              variant="h6"
              underline='none'
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"Services"}
            </Link>
            <Link
              variant="h6"
              underline='none'
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"Products"}
            </Link>
            <Link
              variant="h6"
              underline='none'
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"Contact"}
            </Link>
          </div>

        </Toolbar>
      </CustomAppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
