import React from "react";
import {
  SingleSelectCombo,
  MultipleSelectCheckmarks,
} from "./controls/Combobox";
import { ButtonControls } from "./controls/ButtonControls";
import { VerticalRadioGp } from "./controls/RadioButton";
import {} from "./SelectorControl";
import "./styles/SearchConditions.css";

const target_names = ["2023年", "2022年", "2021年", "2020年", "2019年"];
const combo_label: string = "Year";

export const SearchConditions = (props: any) => {
  return (
    <div className="SearchCondition-Panel">
      <div className="Panel-title">
        <h2>======= 検索条件 =======</h2>
      </div>

      <div className="Condition-items">
        <div className="Radio-Button-Group">
          <VerticalRadioGp
            setRadioModeVal={props.setRadioModeVal}
            setRadioDefaultVal={"Monthly"}
          />
        </div>
        <div className="Single_Select_Combo">
          <SingleSelectCombo
            target_names={target_names}
            combo_label={combo_label}
            dispflag={props.SingleSelectDispFlag}
          />
        </div>
        <div className="Multi_Select_Combo">
          <MultipleSelectCheckmarks
            target_names={target_names}
            combo_label={combo_label}
            dispflag={props.MultiSelectDispFlag}
          />
        </div>
      </div>
      <div className="Botton_Control_Group">
        <ButtonControls
          BtnStatus01={props.SearchStatusVal}
          BtnStatus02={props.ClearStatusVal}
        />
      </div>
    </div>
  );
};
// }
