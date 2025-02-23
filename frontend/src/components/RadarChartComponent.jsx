import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

const RadarChartComponent = ({ title, data }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <RadarChart width={350} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="emotion" />
        <PolarRadiusAxis />
        <Radar name={title} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

export default RadarChartComponent;
