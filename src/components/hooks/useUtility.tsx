import { useState, useEffect } from "react";

export const useNumToString = (props: any, strDefVal: string = "0") => {
  let numToString: string;

  if (Number.isFinite(props.ToStringVal)) {
    // 数値の場合
    numToString = String(props.ToStringVal);
  } else {
    // 数値以外
    numToString = props.strDefVal;
  }

  return numToString;
};
