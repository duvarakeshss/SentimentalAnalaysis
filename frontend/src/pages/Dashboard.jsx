import React from "react";
import RadarChartComponent from "../components/RadarChartComponent";
import ScoreCard from "../components/ScoreCard";
import ThemesList from "../components/ThemesList";
import SnippetsList from "../components/SnippetsList";
import Filters from "../components/Filters";

const highActivationData = [
  { emotion: "Ecstasy", value: 50 },
  { emotion: "Vigilance", value: 30 },
  { emotion: "Admiration", value: 40 },
];

const mediumActivationData = [
  { emotion: "Joy", value: 70 },
  { emotion: "Trust", value: 60 },
  { emotion: "Fear", value: 30 },
];

const lowActivationData = [
  { emotion: "Serenity", value: 55 },
  { emotion: "Interest", value: 40 },
  { emotion: "Acceptance", value: 35 },
];

const themes = [
  { name: "Delivery", score: 58, volume: "8%" },
  { name: "Quality", score: 55, volume: "7%" },
];

const snippets = [
  { text: "Good and different brands. It was quick delivery", subtopic: "Quick Delivery" },
  { text: "Trendy, fun, easy. Love shopping on there. Great outlet prices.", subtopic: "Fast Delivery" },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      
      {/* Filters */}
      <Filters />

      {/* Emotion Analysis */}
      <div className="grid grid-cols-3 gap-4">
        <RadarChartComponent title="High Activation Emotions" data={highActivationData} />
        <RadarChartComponent title="Medium Activation Emotions" data={mediumActivationData} />
        <RadarChartComponent title="Low Activation Emotions" data={lowActivationData} />
      </div>

      {/* Score & Top Themes */}
      <div className="grid grid-cols-2 gap-4">
        <ScoreCard title="Adorescore" value="+64" description="Driven by Joy - 50%" />
        <ScoreCard title="Top Themes in Dataset" value="" description="Delivery: 76, Quality: 61, Clothes: 46" />
      </div>

      {/* Themes & Snippets */}
      <div className="grid grid-cols-2 gap-4">
        <ThemesList themes={themes} />
        <SnippetsList snippets={snippets} />
      </div>

      
    </div>
  );
};

export default Dashboard;
