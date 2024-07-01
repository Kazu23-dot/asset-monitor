import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState("dividend");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      style={{
        color: "#808080",
        backgroundColor: "#EAD9FF",
        height: 35,
        position: "relative",
        bottom: -21,
      }}
      size="large"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="dividend">配当額</ToggleButton>
      <ToggleButton value="evaluation">評価額</ToggleButton>
    </ToggleButtonGroup>
  );
}
