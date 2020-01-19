/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/">
              <a className={classes.dropdownLink}>Home</a>
            </Link>,
            <Link href="/login">
              <a className={classes.dropdownLink}>Log in</a>
            </Link>,
            <Link href="/signup">
              <a className={classes.dropdownLink}>Sign up</a>
            </Link>,
            <Link href="/get-quote">
              <a className={classes.dropdownLink}>Get a quote</a>
            </Link>,
            <Link href="/profile">
              <a className={classes.dropdownLink}>About</a>
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
