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
        components={{
          Toolbar: CustomToolbar, // ツールバーを指定する
        }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
        // autoHeight //グリッド内の行数に合わせて高さを自動調整
        // hideFooterPagination //グリードのページングを非表示に設定
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
