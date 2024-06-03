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
