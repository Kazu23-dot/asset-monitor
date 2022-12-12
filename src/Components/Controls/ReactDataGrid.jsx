import 'react-data-grid/lib/styles.css'; /*react-data-gridの標準スタイリングの設定*/
import './Styles/ReactDataGridStyle.css'; /*標準のスタイリングを上書きする設定*/
import DataGrid from 'react-data-grid';


/***(DataGrid)ヘッダー部***/
const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'spare', name: 'spare' },
  { key: 'regist_date', name: 'regist_date' },
  { key: 'update_date', name: 'update-date' }
];

/***(DataGrid)データ部***/
const rows = [
  { id: 1, title: 'Example', spare: 'spare1', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 2, title: 'Demo', spare: 'spare2', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 3, title: 'spare', spare: 'spare3', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 4, title: 'regist_date', spare: 'spare4', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/21 00:00:00'},
  { id: 5, title: 'update-date', spare: 'spare5', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 6, title: 'update-date', spare: 'spare6', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 7, title: 'update-date', spare: 'spare7', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 8, title: 'update-date', spare: 'spare8', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 9, title: 'update-date', spare: 'spare9', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 10, title: 'update-date', spare: 'spare10', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 11, title: 'update-date', spare: 'spare11', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 12, title: 'update-date', spare: 'spare12', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 13, title: 'update-date', spare: 'spare13', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 14, title: 'update-date', spare: 'spare14', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 15, title: 'update-date', spare: 'spare15', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'},
  { id: 16, title: 'update-date', spare: 'spare16', regist_date:'2022/10/20 00:00:00', update_date:'2022/10/20 00:00:00'}
];

export default props => {
  return (
    <DataGrid columns={columns} rows={rows}/>
    );
  };
