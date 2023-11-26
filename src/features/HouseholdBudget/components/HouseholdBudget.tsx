import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SearchConditions } from "../../../components/SearchConditions";
import { DataGridList } from "../../../components/controls/ReactMuiXDataGrid";
import { GridColDef } from "@mui/x-data-grid";
import { ComposedResponsiveContainer } from "../../../components/controls/ReCharts";
import axios from "axios";
import "../styles/HouseholdBudget.css";

/*************************************/
/** チャート用の引き渡しデータ用変数 **/
/*************************************/
const ChartDataKeys = ["incomme", "expense", "stock", "stocktrans"];

const MonthlyGridCol: GridColDef[] = [
  {
    field: "item",
    headerName: "項目", //ヘッダー名：名称設定プロパティ
    width: 70, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー書式：位置設定プロパティ
    align: "center", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "detail",
    headerName: "詳細", //ヘッダー名：名称設定プロパティ
    width: 90, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "center", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Jan",
    headerName: "1月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Feb",
    headerName: "2月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Mar",
    headerName: "3月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Apr",
    headerName: "4月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "May",
    headerName: "5月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Jun",
    headerName: "6月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Jul",
    headerName: "7月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Aug",
    headerName: "8月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Sep",
    headerName: "9月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Oct",
    headerName: "10月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Nov",
    headerName: "11月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Dec",
    headerName: "12月", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Total",
    headerName: "Total", //ヘッダー名：名称設定プロパティ
    width: 130, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
];

const AnnualGridCol: GridColDef[] = [
  {
    field: "item",
    headerName: "項目", //ヘッダー名：名称設定プロパティ
    width: 70, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー書式：位置設定プロパティ
    align: "center", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Year01",
    headerName: "2000年", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Year02",
    headerName: "2001年", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Year03",
    headerName: "2020年", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Year04",
    headerName: "2021年", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Year05",
    headerName: "2022年", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Year06",
    headerName: "2023年", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Year07",
    headerName: "XXXX年", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Year08",
    headerName: "XXXX年", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Year09",
    headerName: "XXXX年", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "Year10",
    headerName: "XXXX年", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
];

type MonthlyHouseholdBudgetGrid = [
  {
    id: number;
    item: string;
    detail: string;
    Jan: string;
    Feb: string;
    Mar: string;
    Apr: string;
    May: string;
    Jun: string;
    Jul: string;
    Aug: string;
    Sep: string;
    Oct: string;
    Nov: string;
    Dec: string;
    Total: string;
  },
  {
    id: number;
    item: string;
    detail: string;
    Jan: string;
    Feb: string;
    Mar: string;
    Apr: string;
    May: string;
    Jun: string;
    Jul: string;
    Aug: string;
    Sep: string;
    Oct: string;
    Nov: string;
    Dec: string;
    Total: string;
  },
  {
    id: number;
    item: string;
    detail: string;
    Jan: string;
    Feb: string;
    Mar: string;
    Apr: string;
    May: string;
    Jun: string;
    Jul: string;
    Aug: string;
    Sep: string;
    Oct: string;
    Nov: string;
    Dec: string;
    Total: string;
  },
  {
    id: number;
    item: string;
    detail: string;
    Jan: string;
    Feb: string;
    Mar: string;
    Apr: string;
    May: string;
    Jun: string;
    Jul: string;
    Aug: string;
    Sep: string;
    Oct: string;
    Nov: string;
    Dec: string;
    Total: string;
  }
];

type AnnualHouseholdBudgetGrid = [
  {
    id: number;
    item: string;
    Year01: string;
    Year02: string;
    Year03: string;
    Year04: string;
    Year05: string;
    Year06: string;
    Year07: string;
    Year08: string;
    Year09: string;
    Year10: string;
  },
  {
    id: number;
    item: string;
    Year01: string;
    Year02: string;
    Year03: string;
    Year04: string;
    Year05: string;
    Year06: string;
    Year07: string;
    Year08: string;
    Year09: string;
    Year10: string;
  },
  {
    id: number;
    item: string;
    Year01: string;
    Year02: string;
    Year03: string;
    Year04: string;
    Year05: string;
    Year06: string;
    Year07: string;
    Year08: string;
    Year09: string;
    Year10: string;
  },
  {
    id: number;
    item: string;
    Year01: string;
    Year02: string;
    Year03: string;
    Year04: string;
    Year05: string;
    Year06: string;
    Year07: string;
    Year08: string;
    Year09: string;
    Year10: string;
  }
];

type MonthlyHouseholdBudgetChart = [
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  }
];

type AnnualHouseholdBudgetChart = [
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  },
  {
    name: string;
    incomme: number;
    expense: number;
    stock: number;
    stocktrans: number;
  }
];

let strHousehouldDataAPI: string = "";
const InitHouseholdBudget: MonthlyHouseholdBudgetGrid = [
  {
    id: 1,
    item: "収入",
    detail: "-",
    Jan: "0円",
    Feb: "0円",
    Mar: "0円",
    Apr: "0円",
    May: "0円",
    Jun: "0円",
    Jul: "0円",
    Aug: "0円",
    Sep: "0円",
    Oct: "0円",
    Nov: "0円",
    Dec: "0円",
    Total: "0円",
  },
  {
    id: 2,
    item: "支出",
    detail: "-",
    Jan: "0円",
    Feb: "0円",
    Mar: "0円",
    Apr: "0円",
    May: "0円",
    Jun: "0円",
    Jul: "0円",
    Aug: "0円",
    Sep: "0円",
    Oct: "0円",
    Nov: "0円",
    Dec: "0円",
    Total: "0円",
  },
  {
    id: 3,
    item: "貯蓄額",
    detail: "-",
    Jan: "0円",
    Feb: "0円",
    Mar: "0円",
    Apr: "0円",
    May: "0円",
    Jun: "0円",
    Jul: "0円",
    Aug: "0円",
    Sep: "0円",
    Oct: "0円",
    Nov: "0円",
    Dec: "0円",
    Total: "0円",
  },
  {
    id: 4,
    item: "貯蓄率",
    detail: "-",
    Jan: "0%",
    Feb: "0%",
    Mar: "0%",
    Apr: "0%",
    May: "0%",
    Jun: "0%",
    Jul: "0%",
    Aug: "0%",
    Sep: "0%",
    Oct: "0%",
    Nov: "0%",
    Dec: "0%",
    Total: "0%",
  },
];

const InitAnnualHouseholdBudget: AnnualHouseholdBudgetGrid = [
  {
    id: 1,
    item: "収入",
    Year01: "0円",
    Year02: "0円",
    Year03: "0円",
    Year04: "0円",
    Year05: "0円",
    Year06: "0円",
    Year07: "0円",
    Year08: "0円",
    Year09: "0円",
    Year10: "0円",
  },
  {
    id: 2,
    item: "支出",
    Year01: "0円",
    Year02: "0円",
    Year03: "0円",
    Year04: "0円",
    Year05: "0円",
    Year06: "0円",
    Year07: "0円",
    Year08: "0円",
    Year09: "0円",
    Year10: "0円",
  },
  {
    id: 3,
    item: "貯蓄額",
    Year01: "0円",
    Year02: "0円",
    Year03: "0円",
    Year04: "0円",
    Year05: "0円",
    Year06: "0円",
    Year07: "0円",
    Year08: "0円",
    Year09: "0円",
    Year10: "0円",
  },
  {
    id: 4,
    item: "貯蓄率",
    Year01: "0円",
    Year02: "0円",
    Year03: "0円",
    Year04: "0円",
    Year05: "0円",
    Year06: "0円",
    Year07: "0円",
    Year08: "0円",
    Year09: "0円",
    Year10: "0円",
  },
];

export const HouseholdBudget = () => {
  {
    /************************************************************************/
    /*** [useState] *********************************************************/
    /************************************************************************/
    let [blnSingleCmbFlag, setSingleCmbFlag] = React.useState(false);
    let [blnMultiCmbFlag, setMultiCmbFlag] = React.useState(true);
    let [strRadioModeVal, setRadioModeVal] = React.useState("");
    // 検索イベント検知用変数をuseStateで定義
    let [SearchStatusVal, setSearchStatusVal] = React.useState(0);
    // グラフデータ変更時の反映用useState
    let [GraphData, setGraphData] = React.useState([{}]);
    // グラフデータ変更時の反映用useState
    let [GridData, setGridData] = React.useState([{ id: 0 }]);

    let [GridCols, setGridCol] = React.useState([{}]);
    // axiosによるHTTP通信用のuseState
    // let [post, setPost] = React.useState(null);

    let [strSelectYear, setSelectYear] = React.useState("");

    /************************************************************************/
    /*** [useEffect] ********************************************************/
    /************************************************************************/
    useEffect(() => {
      let strSelectMode: String = "";
      let strSelectModeTemp: String = strRadioModeVal;

      if (strSelectModeTemp == "Monthly") {
        strSelectMode = "Annual";
        setSingleCmbFlag(false);
        setMultiCmbFlag(true);
        strHousehouldDataAPI =
          "http://127.0.0.1:8000/Sql/HouseholdBudget/Annual/";
      } else {
        strSelectMode = "Monthly";
        setSingleCmbFlag(true);
        setMultiCmbFlag(false);
        strHousehouldDataAPI =
          "http://127.0.0.1:8000/Sql/HouseholdBudget/Monthly/";
      }
      // console.log("呼出元(加工):" + strSelectMode);
    }, [strRadioModeVal]);

    // 検索イベント発生時のイベント処理を定義
    useEffect(() => {
      if (SearchStatusVal >= 1) {
        let element: HTMLElement;
        let aryYears: string[];

        //対象年の選択状態により処理制御
        if (blnMultiCmbFlag == true) {
          //複数年選択されている場合
          element = document.getElementById("Multiple-Select-Checkbox")!;
          setSelectYear((strSelectYear = element.innerText));
        } else {
          //単年のみ選択されている場合
          element = document.getElementById("Single-Select-Default")!;
          setSelectYear((strSelectYear = element.innerText));
          aryYears = strSelectYear.split(",");
          setSelectYear((strSelectYear = aryYears[0]));
        }

        //検索カウンタをクリア
        if (SearchStatusVal >= 5) {
          setSearchStatusVal((SearchStatusVal = 0));
        }
      }
    }, [SearchStatusVal]);

    // クリアイベント検知用変数をuseStateで定義
    let [ClearStatusVal, setClearStatusVal] = React.useState(0);
    // クリアイベント発生時のイベント処理を定義
    useEffect(() => {
      if (ClearStatusVal >= 1) {
        setGraphData((GraphData = [{}]));
        setGridData((GridData = [{ id: 0 }]));
        setClearStatusVal((ClearStatusVal = 0));
        setSearchStatusVal((SearchStatusVal = 0));
      }
    }, [ClearStatusVal]);

    //検索時にaxiosによるHTTP通信実行
    React.useEffect(() => {
      let strUrlParam: string = "";

      if (SearchStatusVal >= 1) {
        strUrlParam = getTargetYear(strSelectYear);
        //************************//
        // バックエンド側とAPI通信  //
        //************************//
        axios
          .get(strHousehouldDataAPI, { params: { YEAR: strUrlParam } })
          .then((response) => {
            if (blnMultiCmbFlag) {
              /******************************************/
              /**  年次推移  *****************************/
              /******************************************/
              let RevGridData: AnnualHouseholdBudgetGrid;
              let RevChartData: AnnualHouseholdBudgetChart;

              // 年次推移用データグリッドカラム名を設定
              let intBlankCnt: number;
              let strYearAry = strUrlParam.split(",");
              strYearAry.sort();

              intBlankCnt = 10 - strYearAry.length;
              for (let i = 1; i < intBlankCnt + 1; i++) {
                let strColSL = "NN" + ("00" + i).slice(-2);
                strYearAry.push(strColSL);
              }

              AnnualGridCol[1].headerName = strYearAry[0] + "年";
              AnnualGridCol[2].headerName = strYearAry[1] + "年";
              AnnualGridCol[3].headerName = strYearAry[2] + "年";
              AnnualGridCol[4].headerName = strYearAry[3] + "年";
              AnnualGridCol[5].headerName = strYearAry[4] + "年";
              AnnualGridCol[6].headerName = strYearAry[5] + "年";
              AnnualGridCol[7].headerName = strYearAry[6] + "年";
              AnnualGridCol[8].headerName = strYearAry[7] + "年";
              AnnualGridCol[9].headerName = strYearAry[8] + "年";
              AnnualGridCol[10].headerName = strYearAry[9] + "年";

              let AnnualGridColTmp = [...AnnualGridCol];
              setGridCol((GridCols = AnnualGridColTmp));

              if (response.data.IsNull) {
                setGridData((GridData = [{ id: 0 }]));
                setGraphData((GraphData = [{}]));
              } else {
                //データがあった場合となかった場合
                if (Object.keys(response.data).length != 0) {
                  RevGridData = response.data.slice();

                  RevGridData = EditAnnualDataGrid(
                    SetDataDefValRep(RevGridData, 2, 1, 11)
                  );
                  // setGridData(RevGridDdata);
                  // ★データグリッド用のデータをスプレッド構文であたらしいオブジェクトにコピー
                  //   することによって再レンダリングされるようになる
                  let newGridData: AnnualHouseholdBudgetGrid = [...RevGridData];
                  setGridData(newGridData);

                  //Graphにデータを反映
                  RevChartData = EditAnnualChartData(RevGridData);
                  //Gridにデータを反映
                  setGraphData(RevChartData);
                } else {
                  setGridData((GridData = [{ id: 0 }]));
                  setGraphData((GraphData = [{}]));
                }
              }
            } else {
              /******************************************/
              /**  月毎推移  *****************************/
              /******************************************/
              let RevGridData: MonthlyHouseholdBudgetGrid;
              let RevChartData: MonthlyHouseholdBudgetChart;
              setGridCol((GridCols = MonthlyGridCol));
              if (response.data.IsNull) {
                setGridData((GridData = [{ id: 0 }]));
                setGraphData((GraphData = [{}]));
              } else {
                //データがあった場合となかった場合
                if (Object.keys(response.data).length != 0) {
                  RevGridData = response.data.slice();

                  RevGridData = EditMonthlyDataGrid(
                    SetDataDefValRep(RevGridData, 2, 2, 14)
                  );
                  // setGridData(RevGridDdata);
                  // ★データグリッド用のデータをスプレッド構文であたらしいオブジェクトにコピー
                  //   することによって再レンダリングされるようになる
                  let newGridData: MonthlyHouseholdBudgetGrid = [
                    ...RevGridData,
                  ];
                  setGridData(newGridData);

                  //Graphにデータを反映
                  RevChartData = EditMonthlyChartData(RevGridData);
                  //Gridにデータを反映
                  setGraphData(RevChartData);
                } else {
                  setGridData((GridData = [{ id: 0 }]));
                  setGraphData((GraphData = [{}]));
                }
              }
            }
          });
      }
    }, [SearchStatusVal]);

    //リクエストした結果がなかった場合、なにも返さない場合の処理
    // if (!post) {
    //   return null;
    // }
    /************************************************************************/
    return (
      <div className="HouseholdBudget">
        <div className="HouseholdBudget-header">
          <div className="header-title">
            <h1>Analysis</h1>
          </div>
          <div className="root-links">
            <ul>
              <li>
                <div className="RootItem1">
                  <NavLink to="/AssetMonitor/">Home</NavLink>
                </div>
              </li>
              <li>
                <div className="RootItem2">
                  <NavLink to="/AssetMonitor/DashBoard">DashBoard</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="Main-Contents">
          <SearchConditions
            SingleSelectDispFlag={blnSingleCmbFlag}
            MultiSelectDispFlag={blnMultiCmbFlag}
            setRadioModeVal={setRadioModeVal}
            SearchStatusVal={() => setSearchStatusVal(SearchStatusVal + 1)}
            ClearStatusVal={() => setClearStatusVal(ClearStatusVal + 1)}
          />
          <div className="DataMonitorPanel">
            <div className="ChartPanel">
              <ComposedResponsiveContainer
                ChartDataKeys={ChartDataKeys}
                ChartDatas={GraphData}
              />
            </div>
            <div className="GridDataPanel">
              <DataGridList GridCols={GridCols} GridDatas={GridData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

//JSON空のデータ取り出しの挙動確認用
function EditMonthlyDataGrid(objJson: any) {
  let data = objJson;
  data = JSON.parse(JSON.stringify(data));
  let objHouseHoldBudget: MonthlyHouseholdBudgetGrid;
  //データ数でJsonのレコード数分の初期値を定義
  objHouseHoldBudget = InitHouseholdBudget;

  // 収入額
  objHouseHoldBudget[0].item = String(data[0][0]);
  objHouseHoldBudget[0].detail = "-";
  objHouseHoldBudget[0].Jan = String(data[0][1]) + "円";
  objHouseHoldBudget[0].Feb = String(data[0][2]) + "円";
  objHouseHoldBudget[0].Mar = String(data[0][3]) + "円";
  objHouseHoldBudget[0].Apr = String(data[0][4]) + "円";
  objHouseHoldBudget[0].May = String(data[0][5]) + "円";
  objHouseHoldBudget[0].Jun = String(data[0][6]) + "円";
  objHouseHoldBudget[0].Jul = String(data[0][7]) + "円";
  objHouseHoldBudget[0].Aug = String(data[0][8]) + "円";
  objHouseHoldBudget[0].Sep = String(data[0][9]) + "円";
  objHouseHoldBudget[0].Oct = String(data[0][10]) + "円";
  objHouseHoldBudget[0].Nov = String(data[0][11]) + "円";
  objHouseHoldBudget[0].Dec = String(data[0][12]) + "円";
  objHouseHoldBudget[0].Total = String(data[0][13]) + "円";

  // 支出額
  objHouseHoldBudget[1].item = data[1][0];
  objHouseHoldBudget[1].detail = "-";
  objHouseHoldBudget[1].Jan = String(data[1][1]) + "円";
  objHouseHoldBudget[1].Feb = String(data[1][2]) + "円";
  objHouseHoldBudget[1].Mar = String(data[1][3]) + "円";
  objHouseHoldBudget[1].Apr = String(data[1][4]) + "円";
  objHouseHoldBudget[1].May = String(data[1][5]) + "円";
  objHouseHoldBudget[1].Jun = String(data[1][6]) + "円";
  objHouseHoldBudget[1].Jul = String(data[1][7]) + "円";
  objHouseHoldBudget[1].Aug = String(data[1][8]) + "円";
  objHouseHoldBudget[1].Sep = String(data[1][9]) + "円";
  objHouseHoldBudget[1].Oct = String(data[1][10]) + "円";
  objHouseHoldBudget[1].Nov = String(data[1][11]) + "円";
  objHouseHoldBudget[1].Dec = String(data[1][12]) + "円";
  objHouseHoldBudget[1].Total = String(data[1][13]) + "円";

  // 貯蓄額算出
  objHouseHoldBudget[2].item = "貯蓄額";
  objHouseHoldBudget[2].detail = "-";
  objHouseHoldBudget[2].Jan = String(data[0][1] - data[1][1]) + "円";
  objHouseHoldBudget[2].Feb = String(data[0][2] - data[1][2]) + "円";
  objHouseHoldBudget[2].Mar = String(data[0][3] - data[1][3]) + "円";
  objHouseHoldBudget[2].Apr = String(data[0][4] - data[1][4]) + "円";
  objHouseHoldBudget[2].May = String(data[0][5] - data[1][5]) + "円";
  objHouseHoldBudget[2].Jun = String(data[0][6] - data[1][6]) + "円";
  objHouseHoldBudget[2].Jul = String(data[0][7] - data[1][7]) + "円";
  objHouseHoldBudget[2].Aug = String(data[0][8] - data[1][8]) + "円";
  objHouseHoldBudget[2].Sep = String(data[0][9] - data[1][9]) + "円";
  objHouseHoldBudget[2].Oct = String(data[0][10] - data[1][10]) + "円";
  objHouseHoldBudget[2].Nov = String(data[0][11] - data[1][11]) + "円";
  objHouseHoldBudget[2].Dec = String(data[0][12] - data[1][12]) + "円";
  objHouseHoldBudget[2].Total = String(data[0][13] - data[1][13]) + "円";

  //[貯蓄率算出]
  //[Math.round]は小数点以下が四捨五入されるので小数点を表示したい場合は小数で表示したい部分が整数になるように桁をあげるようにかけてroundで処理その後、桁を下げるため割る
  let numStockRate_01: number = CheckCalcNaN(
    Math.round(((data[0][1] - data[1][1]) / data[0][1]) * 1000) / 10
  );
  let numStockRate_02: number = CheckCalcNaN(
    Math.round(((data[0][2] - data[1][2]) / data[0][2]) * 1000) / 10
  );
  let numStockRate_03: number = CheckCalcNaN(
    Math.round(((data[0][3] - data[1][3]) / data[0][3]) * 1000) / 10
  );
  let numStockRate_04: number = CheckCalcNaN(
    Math.round(((data[0][4] - data[1][4]) / data[0][4]) * 1000) / 10
  );
  let numStockRate_05: number = CheckCalcNaN(
    Math.round(((data[0][5] - data[1][5]) / data[0][5]) * 1000) / 10
  );
  let numStockRate_06: number = CheckCalcNaN(
    Math.round(((data[0][6] - data[1][6]) / data[0][6]) * 1000) / 10
  );
  let numStockRate_07: number = CheckCalcNaN(
    Math.round(((data[0][7] - data[1][7]) / data[0][7]) * 1000) / 10
  );
  let numStockRate_08: number = CheckCalcNaN(
    Math.round(((data[0][8] - data[1][8]) / data[0][8]) * 1000) / 10
  );
  let numStockRate_09: number = CheckCalcNaN(
    Math.round(((data[0][9] - data[1][9]) / data[0][9]) * 1000) / 10
  );
  let numStockRate_10: number = CheckCalcNaN(
    Math.round(((data[0][10] - data[1][10]) / data[0][10]) * 1000) / 10
  );
  let numStockRate_11: number = CheckCalcNaN(
    Math.round(((data[0][11] - data[1][11]) / data[0][11]) * 1000) / 10
  );
  let numStockRate_12: number = CheckCalcNaN(
    Math.round(((data[0][12] - data[1][12]) / data[0][12]) * 1000) / 10
  );
  let numStockRate_13: number = CheckCalcNaN(
    Math.round(((data[0][13] - data[1][13]) / data[0][13]) * 1000) / 10
  );

  objHouseHoldBudget[3].item = "貯蓄率";
  objHouseHoldBudget[3].detail = "-";
  objHouseHoldBudget[3].Jan = String(numStockRate_01) + "%";
  objHouseHoldBudget[3].Feb = String(numStockRate_02) + "%";
  objHouseHoldBudget[3].Mar = String(numStockRate_03) + "%";
  objHouseHoldBudget[3].Apr = String(numStockRate_04) + "%";
  objHouseHoldBudget[3].May = String(numStockRate_05) + "%";
  objHouseHoldBudget[3].Jun = String(numStockRate_06) + "%";
  objHouseHoldBudget[3].Jul = String(numStockRate_07) + "%";
  objHouseHoldBudget[3].Aug = String(numStockRate_08) + "%";
  objHouseHoldBudget[3].Sep = String(numStockRate_09) + "%";
  objHouseHoldBudget[3].Oct = String(numStockRate_10) + "%";
  objHouseHoldBudget[3].Nov = String(numStockRate_11) + "%";
  objHouseHoldBudget[3].Dec = String(numStockRate_12) + "%";
  objHouseHoldBudget[3].Total = String(numStockRate_13) + "%";

  return objHouseHoldBudget;
}
function EditAnnualDataGrid(objJson: any) {
  let data = objJson;
  data = JSON.parse(JSON.stringify(data));
  let objHouseHoldBudget: AnnualHouseholdBudgetGrid;
  //データ数でJsonのレコード数分の初期値を定義
  objHouseHoldBudget = InitAnnualHouseholdBudget;

  // 収入額
  objHouseHoldBudget[0].item = String(data[0][0]);
  objHouseHoldBudget[0].Year01 = String(data[0][1]) + "円";
  objHouseHoldBudget[0].Year02 = String(data[0][2]) + "円";
  objHouseHoldBudget[0].Year03 = String(data[0][3]) + "円";
  objHouseHoldBudget[0].Year04 = String(data[0][4]) + "円";
  objHouseHoldBudget[0].Year05 = String(data[0][5]) + "円";
  objHouseHoldBudget[0].Year06 = String(data[0][6]) + "円";
  objHouseHoldBudget[0].Year07 = String(data[0][7]) + "円";
  objHouseHoldBudget[0].Year08 = String(data[0][8]) + "円";
  objHouseHoldBudget[0].Year09 = String(data[0][9]) + "円";
  objHouseHoldBudget[0].Year10 = String(data[0][10]) + "円";

  // 支出額
  objHouseHoldBudget[1].item = data[1][0];
  objHouseHoldBudget[1].Year01 = String(data[1][1]) + "円";
  objHouseHoldBudget[1].Year02 = String(data[1][2]) + "円";
  objHouseHoldBudget[1].Year03 = String(data[1][3]) + "円";
  objHouseHoldBudget[1].Year04 = String(data[1][4]) + "円";
  objHouseHoldBudget[1].Year05 = String(data[1][5]) + "円";
  objHouseHoldBudget[1].Year06 = String(data[1][6]) + "円";
  objHouseHoldBudget[1].Year07 = String(data[1][7]) + "円";
  objHouseHoldBudget[1].Year08 = String(data[1][8]) + "円";
  objHouseHoldBudget[1].Year09 = String(data[1][9]) + "円";
  objHouseHoldBudget[1].Year10 = String(data[1][10]) + "円";

  // 貯蓄額算出
  objHouseHoldBudget[2].item = "貯蓄額";
  objHouseHoldBudget[2].Year01 = String(data[0][1] - data[1][1]) + "円";
  objHouseHoldBudget[2].Year02 = String(data[0][2] - data[1][2]) + "円";
  objHouseHoldBudget[2].Year03 = String(data[0][3] - data[1][3]) + "円";
  objHouseHoldBudget[2].Year04 = String(data[0][4] - data[1][4]) + "円";
  objHouseHoldBudget[2].Year05 = String(data[0][5] - data[1][5]) + "円";
  objHouseHoldBudget[2].Year06 = String(data[0][6] - data[1][6]) + "円";
  objHouseHoldBudget[2].Year07 = String(data[0][7] - data[1][7]) + "円";
  objHouseHoldBudget[2].Year08 = String(data[0][8] - data[1][8]) + "円";
  objHouseHoldBudget[2].Year09 = String(data[0][9] - data[1][9]) + "円";
  objHouseHoldBudget[2].Year10 = String(data[0][10] - data[1][10]) + "円";

  //[貯蓄率算出]
  //[Math.round]は小数点以下が四捨五入されるので小数点を表示したい場合は小数で表示したい部分が整数になるように桁をあげるようにかけてroundで処理その後、桁を下げるため割る
  let numStockRate_01: number = CheckCalcNaN(
    Math.round(((data[0][1] - data[1][1]) / data[0][1]) * 1000) / 10
  );
  let numStockRate_02: number = CheckCalcNaN(
    Math.round(((data[0][2] - data[1][2]) / data[0][2]) * 1000) / 10
  );
  let numStockRate_03: number = CheckCalcNaN(
    Math.round(((data[0][3] - data[1][3]) / data[0][3]) * 1000) / 10
  );
  let numStockRate_04: number = CheckCalcNaN(
    Math.round(((data[0][4] - data[1][4]) / data[0][4]) * 1000) / 10
  );
  let numStockRate_05: number = CheckCalcNaN(
    Math.round(((data[0][5] - data[1][5]) / data[0][5]) * 1000) / 10
  );
  let numStockRate_06: number = CheckCalcNaN(
    Math.round(((data[0][6] - data[1][6]) / data[0][6]) * 1000) / 10
  );
  let numStockRate_07: number = CheckCalcNaN(
    Math.round(((data[0][7] - data[1][7]) / data[0][7]) * 1000) / 10
  );
  let numStockRate_08: number = CheckCalcNaN(
    Math.round(((data[0][8] - data[1][8]) / data[0][8]) * 1000) / 10
  );
  let numStockRate_09: number = CheckCalcNaN(
    Math.round(((data[0][9] - data[1][9]) / data[0][9]) * 1000) / 10
  );
  let numStockRate_10: number = CheckCalcNaN(
    Math.round(((data[0][10] - data[1][10]) / data[0][10]) * 1000) / 10
  );

  objHouseHoldBudget[3].item = "貯蓄率";
  objHouseHoldBudget[3].Year01 = String(numStockRate_01) + "%";
  objHouseHoldBudget[3].Year02 = String(numStockRate_02) + "%";
  objHouseHoldBudget[3].Year03 = String(numStockRate_03) + "%";
  objHouseHoldBudget[3].Year04 = String(numStockRate_04) + "%";
  objHouseHoldBudget[3].Year05 = String(numStockRate_05) + "%";
  objHouseHoldBudget[3].Year06 = String(numStockRate_06) + "%";
  objHouseHoldBudget[3].Year07 = String(numStockRate_07) + "%";
  objHouseHoldBudget[3].Year08 = String(numStockRate_08) + "%";
  objHouseHoldBudget[3].Year09 = String(numStockRate_09) + "%";
  objHouseHoldBudget[3].Year10 = String(numStockRate_10) + "%";

  return objHouseHoldBudget;
}

function CheckCalcNaN(vCheckVal: number) {
  let numReturnVal: number;
  if (Number.isNaN(vCheckVal)) {
    numReturnVal = 0;
  } else {
    numReturnVal = vCheckVal;
  }
  return numReturnVal;
}

function SetDataDefValRep(
  vArryDatas: any,
  vIndX: number,
  vIndY_Start: number,
  vIndY_End: number
) {
  let objDatas: any = vArryDatas;
  for (let i = 0; i < vIndX; i++) {
    for (let j = vIndY_Start; j < vIndY_End; j++) {
      if (objDatas[i][j] == null) {
        objDatas[i][j] = 0;
      }
    }
  }

  return objDatas;
}

//指定年コンボボックス
function getTargetYear(vStrTargetYear: string) {
  let strYear: string = vStrTargetYear;
  // strYear = strYear.replace("年", "");
  strYear = strYear.replaceAll("年", "");

  return strYear;
}

function EditMonthlyChartData(vRevChartData: MonthlyHouseholdBudgetGrid) {
  let RevChartData: MonthlyHouseholdBudgetChart;
  // チャートデータ用変数の初期化
  RevChartData = [
    {
      name: "01",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "02",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "03",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "04",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "05",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "06",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "07",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "08",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "09",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "10",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "11",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "12",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
  ];

  RevChartData[0].incomme = Number(vRevChartData[0].Jan.replace("円", ""));
  RevChartData[0].expense = Number(vRevChartData[1].Jan.replace("円", ""));
  RevChartData[0].stock = Number(vRevChartData[2].Jan.replace("円", ""));
  RevChartData[0].stocktrans = Number(vRevChartData[2].Jan.replace("円", ""));

  RevChartData[1].incomme = Number(vRevChartData[0].Feb.replace("円", ""));
  RevChartData[1].expense = Number(vRevChartData[1].Feb.replace("円", ""));
  RevChartData[1].stock = Number(vRevChartData[2].Feb.replace("円", ""));
  RevChartData[1].stocktrans = Number(vRevChartData[2].Feb.replace("円", ""));

  RevChartData[2].incomme = Number(vRevChartData[0].Mar.replace("円", ""));
  RevChartData[2].expense = Number(vRevChartData[1].Mar.replace("円", ""));
  RevChartData[2].stock = Number(vRevChartData[2].Mar.replace("円", ""));
  RevChartData[2].stocktrans = Number(vRevChartData[2].Mar.replace("円", ""));

  RevChartData[3].incomme = Number(vRevChartData[0].Apr.replace("円", ""));
  RevChartData[3].expense = Number(vRevChartData[1].Apr.replace("円", ""));
  RevChartData[3].stock = Number(vRevChartData[2].Apr.replace("円", ""));
  RevChartData[3].stocktrans = Number(vRevChartData[2].Apr.replace("円", ""));

  RevChartData[4].incomme = Number(vRevChartData[0].May.replace("円", ""));
  RevChartData[4].expense = Number(vRevChartData[1].May.replace("円", ""));
  RevChartData[4].stock = Number(vRevChartData[2].May.replace("円", ""));
  RevChartData[4].stocktrans = Number(vRevChartData[2].May.replace("円", ""));

  RevChartData[5].incomme = Number(vRevChartData[0].Jun.replace("円", ""));
  RevChartData[5].expense = Number(vRevChartData[1].Jun.replace("円", ""));
  RevChartData[5].stock = Number(vRevChartData[2].Jun.replace("円", ""));
  RevChartData[5].stocktrans = Number(vRevChartData[2].Jun.replace("円", ""));

  RevChartData[6].incomme = Number(vRevChartData[0].Jul.replace("円", ""));
  RevChartData[6].expense = Number(vRevChartData[1].Jul.replace("円", ""));
  RevChartData[6].stock = Number(vRevChartData[2].Jul.replace("円", ""));
  RevChartData[6].stocktrans = Number(vRevChartData[2].Jul.replace("円", ""));

  RevChartData[7].incomme = Number(vRevChartData[0].Aug.replace("円", ""));
  RevChartData[7].expense = Number(vRevChartData[1].Aug.replace("円", ""));
  RevChartData[7].stock = Number(vRevChartData[2].Aug.replace("円", ""));
  RevChartData[7].stocktrans = Number(vRevChartData[2].Aug.replace("円", ""));

  RevChartData[8].incomme = Number(vRevChartData[0].Sep.replace("円", ""));
  RevChartData[8].expense = Number(vRevChartData[1].Sep.replace("円", ""));
  RevChartData[8].stock = Number(vRevChartData[2].Sep.replace("円", ""));
  RevChartData[8].stocktrans = Number(vRevChartData[2].Sep.replace("円", ""));

  RevChartData[9].incomme = Number(vRevChartData[0].Oct.replace("円", ""));
  RevChartData[9].expense = Number(vRevChartData[1].Oct.replace("円", ""));
  RevChartData[9].stock = Number(vRevChartData[2].Oct.replace("円", ""));
  RevChartData[9].stocktrans = Number(vRevChartData[2].Oct.replace("円", ""));

  RevChartData[10].incomme = Number(vRevChartData[0].Nov.replace("円", ""));
  RevChartData[10].expense = Number(vRevChartData[1].Nov.replace("円", ""));
  RevChartData[10].stock = Number(vRevChartData[2].Nov.replace("円", ""));
  RevChartData[10].stocktrans = Number(vRevChartData[2].Nov.replace("円", ""));

  RevChartData[11].incomme = Number(vRevChartData[0].Dec.replace("円", ""));
  RevChartData[11].expense = Number(vRevChartData[1].Dec.replace("円", ""));
  RevChartData[11].stock = Number(vRevChartData[2].Dec.replace("円", ""));
  RevChartData[11].stocktrans = Number(vRevChartData[2].Dec.replace("円", ""));

  return RevChartData;
}

function EditAnnualChartData(vRevChartData: AnnualHouseholdBudgetGrid) {
  let RevChartData: AnnualHouseholdBudgetChart;
  // チャートデータ用変数の初期化
  RevChartData = [
    {
      name: "01",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "02",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "03",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "04",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "05",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "06",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "07",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "08",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "09",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
    {
      name: "10",
      incomme: 0,
      expense: 0,
      stock: 0,
      stocktrans: 0,
    },
  ];

  RevChartData[0].incomme = Number(vRevChartData[0].Year01.replace("円", ""));
  RevChartData[0].expense = Number(vRevChartData[1].Year01.replace("円", ""));
  RevChartData[0].stock = Number(vRevChartData[2].Year01.replace("円", ""));
  RevChartData[0].stocktrans = Number(
    vRevChartData[2].Year01.replace("円", "")
  );

  RevChartData[1].incomme = Number(vRevChartData[0].Year02.replace("円", ""));
  RevChartData[1].expense = Number(vRevChartData[1].Year02.replace("円", ""));
  RevChartData[1].stock = Number(vRevChartData[2].Year02.replace("円", ""));
  RevChartData[1].stocktrans = Number(
    vRevChartData[2].Year02.replace("円", "")
  );

  RevChartData[2].incomme = Number(vRevChartData[0].Year03.replace("円", ""));
  RevChartData[2].expense = Number(vRevChartData[1].Year03.replace("円", ""));
  RevChartData[2].stock = Number(vRevChartData[2].Year03.replace("円", ""));
  RevChartData[2].stocktrans = Number(
    vRevChartData[2].Year03.replace("円", "")
  );

  RevChartData[3].incomme = Number(vRevChartData[0].Year04.replace("円", ""));
  RevChartData[3].expense = Number(vRevChartData[1].Year04.replace("円", ""));
  RevChartData[3].stock = Number(vRevChartData[2].Year04.replace("円", ""));
  RevChartData[3].stocktrans = Number(
    vRevChartData[2].Year04.replace("円", "")
  );

  RevChartData[4].incomme = Number(vRevChartData[0].Year05.replace("円", ""));
  RevChartData[4].expense = Number(vRevChartData[1].Year05.replace("円", ""));
  RevChartData[4].stock = Number(vRevChartData[2].Year05.replace("円", ""));
  RevChartData[4].stocktrans = Number(
    vRevChartData[2].Year05.replace("円", "")
  );

  RevChartData[5].incomme = Number(vRevChartData[0].Year06.replace("円", ""));
  RevChartData[5].expense = Number(vRevChartData[1].Year06.replace("円", ""));
  RevChartData[5].stock = Number(vRevChartData[2].Year06.replace("円", ""));
  RevChartData[5].stocktrans = Number(
    vRevChartData[2].Year06.replace("円", "")
  );

  RevChartData[6].incomme = Number(vRevChartData[0].Year07.replace("円", ""));
  RevChartData[6].expense = Number(vRevChartData[1].Year07.replace("円", ""));
  RevChartData[6].stock = Number(vRevChartData[2].Year07.replace("円", ""));
  RevChartData[6].stocktrans = Number(
    vRevChartData[2].Year07.replace("円", "")
  );

  RevChartData[7].incomme = Number(vRevChartData[0].Year08.replace("円", ""));
  RevChartData[7].expense = Number(vRevChartData[1].Year08.replace("円", ""));
  RevChartData[7].stock = Number(vRevChartData[2].Year08.replace("円", ""));
  RevChartData[7].stocktrans = Number(
    vRevChartData[2].Year08.replace("円", "")
  );

  RevChartData[8].incomme = Number(vRevChartData[0].Year09.replace("円", ""));
  RevChartData[8].expense = Number(vRevChartData[1].Year09.replace("円", ""));
  RevChartData[8].stock = Number(vRevChartData[2].Year09.replace("円", ""));
  RevChartData[8].stocktrans = Number(
    vRevChartData[2].Year09.replace("円", "")
  );

  RevChartData[9].incomme = Number(vRevChartData[0].Year10.replace("円", ""));
  RevChartData[9].expense = Number(vRevChartData[1].Year10.replace("円", ""));
  RevChartData[9].stock = Number(vRevChartData[2].Year10.replace("円", ""));
  RevChartData[9].stocktrans = Number(
    vRevChartData[2].Year10.replace("円", "")
  );

  return RevChartData;
}
