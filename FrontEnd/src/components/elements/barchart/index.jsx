import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/themeContext";

const chartSetting = {
  yAxis: [
    {
      disableTicks: true,
      disableLine: true,
      tickFontSize: 10,
    },
  ],
  grid: {
    horizontal: true,
  },
  sx: {
    ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
      fill: "#FFFFFF",
    },
    ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
      fill: "#FFFFFF",
    },
  },
};

export default function BarsDataset(props) {
  const { desc } = props;
  const { theme } = useContext(ThemeContext);
  desc.series[1].color = theme.color;
  return (
    <BarChart
      dataset={desc.data}
      xAxis={[
        { scaleType: "band", dataKey: desc.dataKey, categoryGapRatio: 0.5 },
      ]}
      series={desc.series}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "top", horizontal: "right" },
        },
      }}
      {...chartSetting}
    />
  );
}
