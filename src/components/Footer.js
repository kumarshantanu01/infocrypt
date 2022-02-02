import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles({
  footer: {
    height: "11rem",
    backgroundColor: "#D2D0D0",
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
  },
  footersubheading: {
    fontSize: "20px",
    color: "#444545",
    fontWeight: "400",
  },
  footercopyright: {
    fontWeight: "100",
    fontSize: "18px",
    paddingTop: "1rem",
  },
});

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
