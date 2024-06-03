import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 10,
    label: "",
  },
  {
    value: 20,
    label: "2%",
  },
  {
    value: 30,
    label: "",
  },
  {
    value: 40,
    label: "4%",
  },
  {
    value: 50,
    label: "",
  },
  {
    value: 60,
    label: "6%",
  },
  {
    value: 70,
    label: "",
  },
  {
    value: 80,
    label: "8%",
  },
  {
    value: 90,
    label: "",
  },
  {
    value: 100,
    label: "10%",
  },
];

function valuetext(value: number) {
  return `${value}%`;
}

export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={50}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="off"
      />
    </Box>
  );
}
