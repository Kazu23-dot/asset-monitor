import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "./styles/ButtonControls.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const ButtonControls = (props: any) => {
  // export default function SearchButton() {
  const classes = useStyles();

  return (
    <div className="ButtonControl">
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SearchIcon />}
        onClick={props.BtnStatus01}
      >
        検索
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<ClearIcon />}
        onClick={props.BtnStatus02}
      >
        クリア
      </Button>
    </div>
  );
};
