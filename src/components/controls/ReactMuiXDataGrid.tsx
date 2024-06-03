import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarExport,
  jaJP, // 日本語用のファイルをインポート
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

// カスタムツールバーを作成
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export const DataGridList = (props: any) => {
  const cols: GridColDef[] = props.GridCols;
  const NewRows: any = props.GridDatas;

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        sx={styles.grid}
        columns={cols}
        rows={NewRows}
        checkboxSelection
        density="compact"
        //components={{
        //  Toolbar: CustomToolbar, // ツールバーを指定(ソート,エクスポート)
        //}}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
        // autoHeight //グリッド内の行数に合わせて高さを自動調整
        // hideFooterPagination //グリードのページングを非表示に設定
        hideFooter={true}
      />
    </Box>
  );
};

export const PagesDataGridList = (props: any) => {
  const cols: GridColDef[] = props.GridCols;
  const NewRows: any = props.GridDatas;

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        sx={styles.grid}
        columns={cols}
        rows={NewRows}
        checkboxSelection
        density="compact"
        components={{
          Toolbar: CustomToolbar, // ツールバーを指定(ソート,エクスポート)
        }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
        // autoHeight //グリッド内の行数に合わせて高さを自動調整
        // hideFooterPagination //グリードのページングを非表示に設定
        hideFooter={false}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
};

/*** MuiX-DataGrid用のスタイリング ***/
const styles = {
  grid: {
    //MuiDataGridツールバーのスタイル設定
    ".MuiDataGrid-toolbarContainer": {
      borderBottom: "solid 1px rgba(224, 224, 224, 1)",
      backgroundColor: "#f0f8ff",
      // backgroundColor: "white",
    },
    ".MuiDataGrid-row .MuiDataGrid-cell:not(:last-child)": {
      borderRight: "solid 1px rgba(224, 224, 224, 1) !important",
      backgroundColor: "#f8f8ff",
      // backgroundColor: "white",
    },
    // 列ヘッダに背景色を指定
    ".MuiDataGrid-columnHeaders": {
      backgroundColor: "#65b2c6",
      color: "#fff",
    },
    // 列ヘッダに背景色を指定
    ".MuiDataGrid-footerContainer": {
      backgroundColor: "#a9a9a9",
    },
  },
};

const SectorStockdata = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 100 },
  { name: "Group F", value: 500 },
  { name: "Group G", value: 400 },
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_: any, index: any) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={SectorStockdata}
            cx="50%"
            cy="50%"
            innerRadius={170}
            outerRadius={240}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
