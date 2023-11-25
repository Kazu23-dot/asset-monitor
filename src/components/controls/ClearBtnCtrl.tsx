import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@mui/icons-material/Clear";
import "./styles/SearchBtnCtrl.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ClearButton() {
  const classes = useStyles();

  return (
    <div className="ButtonControl">
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<ClearIcon />}
      >
        クリア
      </Button>
    </div>
  );
}
