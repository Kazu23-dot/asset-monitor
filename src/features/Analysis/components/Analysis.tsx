import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  DataGridList,
  PagesDataGridList,
} from "../../../components/controls/ReactMuiXDataGrid";
import Example from "../../../components/controls/ReactMuiXDataGrid";
import { GridColDef } from "@mui/x-data-grid";
import VerticalTabs from "../../../components/controls/VerticalTabs";
import DiscreteSliderLabel from "../../../components/controls/Slider";
import ColorToggleButton from "../../../components/controls/ToggleButtons";
import "../styles/Analysis.css";

import "../types/Anaysis.d.ts";

//const homeUrl = process.env.PUBLIC_URL;

const SectorGridCol: GridColDef[] = [
  {
    field: "sector_nm",
    headerName: "セクター名", //ヘッダー名：名称設定プロパティ
    width: 210, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー書式：位置設定プロパティ
    align: "center", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "dividend_alloc",
    headerName: "配当比率", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "dividend_money",
    headerName: "配当金", //ヘッダー名：名称設定プロパティ
    width: 150, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
  {
    field: "dividend_rate",
    headerName: "配当利回り", //ヘッダー名：名称設定プロパティ
    width: 100, // カラム：列幅設定プロパティ
    headerAlign: "center", //ヘッダー名：位置設定プロパティ
    align: "right", //データ部の一設定プロパティ
    editable: true,
  },
];

export const Analysis = () => {
  {
    let [SectorGridData, setGridData] = React.useState([{ id: 0 }]);
    let [SectorGridCols, setGridCol] = React.useState([{}]);

    useEffect(() => {
      let newSectorGridData: StockSectorGrid;

      newSectorGridData = [
        {
          id: 1,
          sector_nm: "情報・通信",
          dividend_alloc: "30%",
          dividend_money: "30000円",
          dividend_rate: "5.15%",
        },
        {
          id: 2,
          sector_nm: "建設業",
          dividend_alloc: "10.0%",
          dividend_money: "10000円",
          dividend_rate: "4.53%",
        },
        {
          id: 3,
          sector_nm: "サービス業",
          dividend_alloc: "10.0%",
          dividend_money: "10000円",
          dividend_rate: "4.75%",
        },
        {
          id: 4,
          sector_nm: "食料品",
          dividend_alloc: "10.0%",
          dividend_money: "10000円",
          dividend_rate: "4.00%",
        },
        {
          id: 5,
          sector_nm: "総合商社",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 6,
          sector_nm: "電気ガス",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 7,
          sector_nm: "化学",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 8,
          sector_nm: "医薬品",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 9,
          sector_nm: "銀行業",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 10,
          sector_nm: "セクター10",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 11,
          sector_nm: "セクター11",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 12,
          sector_nm: "セクター12",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 13,
          sector_nm: "セクター13",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 14,
          sector_nm: "セクター14",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 15,
          sector_nm: "セクター15",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 16,
          sector_nm: "その他",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
        {
          id: 17,
          sector_nm: "合計",
          dividend_alloc: "10.0%",
          dividend_money: "12000円",
          dividend_rate: "5.00%",
        },
      ];
      setGridCol((SectorGridCols = SectorGridCol));
      setGridData(newSectorGridData);
    });
    //let SectorGridColTmp = [...SectorGridCol];
    //setGridCol((SectorGridCols = SectorGridColTmp));
    //setGridData((SectorGridData = [{ sector_nm: 0 }]));

    /*************************************/
    /** [Analysis]として返される画面要素 **/
    /*************************************/
    return (
      <div className="Analysis">
        <div className="analysis-header">
          <div className="header-title">
            <h1>Anlysis</h1>
          </div>
          <div className="root-links">
            <ul>
              <li>
                <div className="RootItem1">
                  <NavLink to={"/AssetMonitor/"}>Home</NavLink>
                </div>
              </li>
              <li>
                <div className="RootItem2">
                  <NavLink to={"/AssetMonitor/DashBoard"}>DashBoard</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="Main-Contents">
          <div className="SideSelectItemCond">
            <VerticalTabs />
          </div>
          <div className="DataMonitorPanel">
            <div className="SearchCondPanel">
              <ColorToggleButton />
              <ColorToggleButton />
            </div>
            <div className="UpperMonitorPanel">
              <div className="DonutsChartPanel">
                <Example />
                <div className="SliderThreshold">
                  <DiscreteSliderLabel />
                </div>
              </div>
              <div className="SectorGridDataPanel">
                <DataGridList
                  GridCols={SectorGridCols}
                  GridDatas={SectorGridData}
                />
              </div>
            </div>
            <div className="GridDataPanel">
              <PagesDataGridList
                GridCols={SectorGridCols}
                GridDatas={SectorGridData}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
