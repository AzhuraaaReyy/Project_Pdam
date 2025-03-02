import React from "react";
import Card from "../../elements/card";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Withdraw Amount", value: 82.3, color: "#FCA5A5" }, // Warna merah muda
  { name: "Balance Amount", value: 100 - 82.3, color: "#4338CA" }, // Warna biru tua
];

const Chart = () => {
  return (
    <Card
      variant=""
      title="Statistics"
      desc={
        <div>
          <h2 className="font-bold text-lg mb-2">Chart</h2>
          <div className="flex items-center justify-between mt-6">
            {/* Legend (di samping kiri chart) */}
            <div className="flex flex-col gap-2">
              {data.map((entry, index) => (
                <div key={index} className="flex items-center">
                  <span
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: entry.color }}
                  ></span>
                  <span className="text-sm text-gray-700 font-medium">
                    {entry.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Pie Chart */}
            <div className="relative flex justify-center items-center">
              <PieChart width={180} height={180}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>

              {/* Angka di Tengah */}
              <div className="absolute text-xl font-bold text-gray-900">
                82.3%
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Chart;
