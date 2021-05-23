import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        University Of Jaffna {new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  );
};
