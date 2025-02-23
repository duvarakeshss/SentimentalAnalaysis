import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

const RadarChartComponent = ({ title, data }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center w-full h-auto">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="w-full h-[250px] md:h-[300px] flex justify-center">
        <RadarChart width={350} height={250} className="w-full h-full" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="emotion" />
          <PolarRadiusAxis />
          <Radar name={title} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </div>
    </div>
  );
};

export default RadarChartComponent;
