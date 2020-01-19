import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";
import StepForm from "components/Quotation/StepForm";
const useStyles = makeStyles(styles);
export default function GetQuotePage(props) {
  
  useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Insurance Demo"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax small filter responsive image={require("assets/img/bg7.jpg")} />
      <Container maxWidth="sm">
        <Box my={4}>
          <StepForm></StepForm>
        </Box>
      </Container>
    </div>
  );
}
