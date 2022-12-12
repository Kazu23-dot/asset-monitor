import React from 'react';
import GridLayout from 'react-grid-layout';
import './Styles/ReactGridLayout.css';

class ReactGridLayout extends React.Component {

    constructor(){
      super();
      this.state = {
        cols : 12,
        rowHeight : 30,
        width :window.parent.screen.width
      }

      /** ボードの位置 各ボードのサイズを設定 **/
      this.layouts = [
        {i: 'a', x: 0, y: 0, w: 4, h: 10},
        {i: 'b', x: 4, y: 0, w: 7, h: 10},
        {i: 'c', x: 4, y: 4, w: 7, h: 11},
        {i: 'd', x: 0, y: 4, w: 4, h: 11},
        {i: 'e', x: 0, y: 9, w: 4, h: 10},
        {i: 'f', x: 4, y: 9, w: 7, h: 10},
      ];
    }
  
    render(){
        return (
        <GridLayout className="layout" layout={this.layouts} cols={this.state.cols} rowHeight={this.state.rowHeight} width={this.state.width}>
          <div key="a" style={{border:"solid", backgroundColor:"#333333", textAlign:"center"}}></div>
          <div key="b" style={{border:"solid", backgroundColor:"#333333", textAlign:"center"}}></div>
          <div key="c" style={{border:"solid", backgroundColor:"#333333", textAlign:"center"}}></div>
          <div key="d" style={{border:"solid", backgroundColor:"#333333", textAlign:"center"}}><h1>ReactDataGrid</h1></div>
          <div key="e" style={{border:"solid", backgroundColor:"#333333", textAlign:"center"}}></div>
          <div key="f" style={{border:"solid", backgroundColor:"#333333", textAlign:"center"}}></div>
        </GridLayout>
      );
    }
  }

  export default ReactGridLayout;
