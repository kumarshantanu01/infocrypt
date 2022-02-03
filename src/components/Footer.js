import { makeStyles } from "@mui/styles";
import React from "react";

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.footer}>
        <h1 className={classes.footerheading}>InfoCrypt</h1>
        <h2 className={classes.footersubheading}>
          Your one stop solution for live price and latest news related to
          crypto.
        </h2>
        <h4 className={classes.footercopyright}>© 2022 Copyright</h4>
      </div>
    </div>
  );
}

export default Footer;

const useStyles = makeStyles({
  footer: {
    height: "11rem",
    backgroundColor: "#212529",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "1rem",
  },
  footerheading: {
    fontSize: "30px",
    fontFamily: "",
    fontWeight: "bold",
    color: "#DD759F",
    opacity: 0.8,
  },
  footersubheading: {
    fontSize: "20px",
    color: "#f2f2f2",
    fontWeight: "100",
  },
  footercopyright: {
    fontWeight: "100",
    fontSize: "18px",
    paddingTop: "1rem",
    color: "#f2f2f2",
  },
});
