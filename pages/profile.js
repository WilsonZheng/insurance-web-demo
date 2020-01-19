import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Insurance Demo"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h3>About</h3>
            </div>
            <span>
              <p>
                This is a demo website which uses React, Nextjs, Material UI as front end.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
