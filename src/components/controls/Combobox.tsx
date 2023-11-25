/*********************************************************************/
/**  処理内容：import定義                                             */
/*********************************************************************/
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      background: "white",
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

/*********************************************************************/
/**  export内容：シングル選択コンボ(チェックマーク)                    */
/*********************************************************************/
export const SingleSelectCombo = (props: any) => {
  const [item, setItem] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string);
  };

  if (props.dispflag) {
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl
          sx={{
            m: 1,
            width: 200,
            backgroundColor: "#EEFFFF",
            border: 6,
            borderRadius: 1,
            borderColor: "#BBFFFF",
            textAlign: "center",
            zIndex: 100,
          }}
        >
          <InputLabel id="demo-simple-select-label">
            {props.combo_label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="Single-Select-Default"
            value={item}
            label={props.combo_label}
            onChange={handleChange}
          >
            {props.target_names.map((name: any) => (
              <MenuItem value={name}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  } else {
    return null;
  }
};
/*********************************************************************/
/**  export内容：複数選択コンボ(デフォルト)                            */
/*********************************************************************/
export const MultipleSelectDefault = (props: any) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: 300,
          backgroundColor: "#EEFFFF",
          border: 6,
          borderColor: "#BBFFFF",
          borderRadius: 1,
        }}
      >
        <InputLabel id="demo-multiple-name-label">Year</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="Multiple-Select-Default"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {props.target_names.map((name: any) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

/*********************************************************************/
/**  export内容：複数選択コンボ(チェックマーク)                        */
/*********************************************************************/
export const MultipleSelectCheckmarks = (props: any) => {
  const [item, setItem] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof item>) => {
    const {
      target: { value },
    } = event;
    setItem(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  if (props.dispflag) {
    return (
      <div className="MultiSelectCheck">
        <FormControl
          sx={{
            m: 1,
            width: 200,
            backgroundColor: "#EEFFFF",
            border: 6,
            borderRadius: 1,
            borderColor: "#BBFFFF",
            textAlign: "center",
          }}
        >
          <InputLabel id="demo-multiple-checkbox-label">
            {props.combo_label}
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="Multiple-Select-Checkbox"
            multiple
            value={item}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {props.target_names.map((name: any) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={item.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  } else {
    return null;
  }
};
