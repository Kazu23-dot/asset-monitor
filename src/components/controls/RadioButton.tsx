import React, { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./styles/RadioButton.css";
import { brotliDecompress } from "zlib";

export const BesideRadioGp = (props: any) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    props.setRadioModeVal(value);
  };

  //初回レンダリング時にラジオボタンの初期値を設定
  useEffect(() => {
    setValue(props.setRadioDefaultVal);
  }, []);

  return (
    <div className="Beside-RadioButton">
      <FormControl component="fieldset">
        <FormLabel component="legend">表示モード</FormLabel>
        <RadioGroup
          name="customized-radios"
          defaultValue={props.setRadioDefaultVal}
          // aria-labelledby="search-mode"
          onChange={handleChange}
        >
          <FormControlLabel
            value="Monthly"
            control={<Radio />}
            label="月毎推移"
          />
          <FormControlLabel
            value="Annual"
            control={<Radio />}
            label="年次推移"
          />
          {/* <FormControlLabel
            value="disabled"
            control={<StyledRadio />}
            label="予備"
          /> */}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export const VerticalRadioGp = (props: any) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    props.setRadioModeVal(value);
  };

  //初回レンダリング時にラジオボタンの初期値を設定
  useEffect(() => {
    setValue(props.setRadioDefaultVal);
  }, []);

  return (
    <div className="Vertical-RadioButton">
      <FormControl
        sx={{
          backgroundColor: "#EEFFFF",
          textAlign: "center",
          border: 4,
          borderColor: "#BBFFFF",
          borderRadius: 1,
          color: "#222222",
          // height: 100,
        }}
      >
        {/* <FormLabel id="demo-radio-buttons-group-label">表示モード</FormLabel> */}
        <RadioGroup
          // aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Monthly"
          name="vertical-radio-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value="Monthly"
            control={<Radio />}
            label="月毎推移"
          />
          <FormControlLabel
            value="Annual"
            control={<Radio />}
            label="年次推移"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
