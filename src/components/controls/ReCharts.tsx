// import React, { useCallback, useState } from "react";
import {
  // PieChart,
  // Pie,
  // Sector,
  Bar,
  // LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Legend,
  YAxis,
  // AreaChart,
  // Area,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

export const ComposedResponsiveContainer = (props: any) => {
  return (
    <div style={{ width: "90%", height: "97%" }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={props.ChartDatas}
          margin={{
            top: 100,
            right: 20,
            bottom: 0,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="point" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Barタグに同一のstackIdをつけることで積み上げグラフの設定が可能 */}
          <Bar dataKey="stock" barSize={20} stackId="a" fill="#0000ff" />
          <Bar dataKey="expense" barSize={20} stackId="a" fill="#ff69b4" />
          <Bar dataKey="incomme" barSize={20} fill="#1e90ff" />
          {/* type設定：natural, monotone, ライングラフの色設定：stroke, ライングラフの線幅設定：strokeWidth */}
          <Line
            type="monotone"
            dataKey="stocktrans"
            stroke="#87cefa"
            strokeWidth={4}
          />
          {/* <Line type="monotone" dataKey="vt" stroke="#7fffd4" strokeWidth={4} /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// export const ComposedResponsiveContainer = () => {
//   return (
//     <div style={{ width: "80%", height: 400 }}>
//       <ResponsiveContainer>
//         <ComposedChart
//           width={500}
//           height={400}
//           data={ComposedData}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <CartesianGrid stroke="#f5f5f5" />
//           <XAxis dataKey="name" scale="point" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Area type="monotone" dataKey="amt" fill="#005FFF" stroke="#8884d8" />
//           <Bar dataKey="pv" barSize={20} fill="#005FFF" />
//           <Line type="monotone" dataKey="uv" stroke="#00FFFF" />
//         </ComposedChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// const RePieChartdata = [
//   { name: "Group A", value: 700 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

// const renderActiveShape = (props: any) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         /*fill="#0000cd"*/
//         fill="#333" /* PV部分の文字色の設定 */
//       >{`PV ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         /*fill="#0000cd"*/
//         fill="#999" /* Rate部分の文字色の設定 */
//       >
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

// /** (ReChart)CustomActiveShapePieChart **/
// export const RePieChart = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const onPieEnter = useCallback(
//     (_: any, index: any) => {
//       setActiveIndex(index);
//     },
//     [setActiveIndex]
//   );

//   return (
//     <PieChart width={730} height={360}>
//       <Pie
//         activeIndex={activeIndex}
//         activeShape={renderActiveShape}
//         data={RePieChartdata}
//         cx={400} /* PieChartの位置(X軸) */
//         cy={180} /* PieChartの位置(Y軸) */
//         innerRadius={
//           85
//         } /* PieChartのドーナッツ部分(タイトルと空の内円部分)の半径 */
//         outerRadius={
//           130
//         } /* PieChartのリング部分(データ表示部分(外円部分))の半径 */
//         fill="#8a2be2" /* PieChartの配色の設定 */
//         /*fill="#8884d8"*/
//         dataKey="value"
//         onMouseEnter={onPieEnter}
//       />
//     </PieChart>
//   );
// };

// /** (ReChart)ResponsivePieChart **/
// const ResponsivePieChartData01 = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

// const ResponsivePieChartData02 = [
//   { name: "Group A-1", value: 200 },
//   { name: "Group A-2", value: 200 },
//   { name: "Group B-1", value: 200 },
//   { name: "Group B-2", value: 100 },
//   { name: "Group C-1", value: 300 },
//   { name: "Group D-1", value: 200 },
// ];

// export const ResponsivePieChart = () => {
//   return (
//     <div style={{ width: "100%", height: 300 }}>
//       <ResponsiveContainer>
//         <PieChart>
//           <Pie
//             dataKey="value"
//             data={ResponsivePieChartData01}
//             innerRadius={60}
//             outerRadius={105}
//             fill="#8884d8"
//             label
//           />
//           <Pie
//             dataKey="value"
//             data={ResponsivePieChartData02}
//             innerRadius={110}
//             outerRadius={150}
//             fill="#136FFF"
//             label
//           />
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// /** (ReChart)CardinalAreaChart **/
// const CardinalAreaChartdata = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
// const cardinal = curveCardinal.tension(0.2);

// export const CardinalAreaChart = () => {
//   return (
//     <AreaChart
//       width={1400}
//       height={340}
//       data={CardinalAreaChartdata}
//       margin={{
//         top: 10,
//         right: 30,
//         left: 0,
//         bottom: 0,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Area
//         type="monotone"
//         dataKey="uv"
//         stroke="#5BFF7F" /* ポインタを当てた時にポップアップされる文字色の設定 */
//         fill="#5BFF7F"
//         fillOpacity={0.3}
//       />
//       <Area
//         type={cardinal}
//         dataKey="pv"
//         stroke="#005FFF"
//         fill="#005FFF"
//         fillOpacity={0.3}
//       />
//     </AreaChart>
//   );
// };

// /** (ReChart)SynchronizedAreaChart **/
// const SynchronizedAreaChartdata = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export const SynchronizedAreaChart = () => {
//   return (
//     <div>
//       <h4>A demo of synchronized AreaCharts</h4>
//       <AreaChart
//         width={1450}
//         height={150}
//         data={SynchronizedAreaChartdata}
//         syncId="anyId"
//         margin={{
//           top: 10,
//           right: 30,
//           left: 0,
//           bottom: 0,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//       </AreaChart>
//       <p>Maybe some other content</p>
//       <AreaChart
//         width={1450}
//         height={150}
//         data={SynchronizedAreaChartdata}
//         syncId="anyId"
//         margin={{
//           top: 10,
//           right: 30,
//           left: 0,
//           bottom: 0,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
//       </AreaChart>
//     </div>
//   );
// };
