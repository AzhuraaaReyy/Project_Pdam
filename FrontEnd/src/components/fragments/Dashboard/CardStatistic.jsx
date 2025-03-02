import { expensesStatistics } from "../../../data/expense";
import Card from "../../elements/card";
import BarsDataset from "../../Elements/BarChart";

const CardStatistic = () => {
  return (
    <Card
      variant="md:col-span-3 min-h-max"
      title="Statistics"
      desc={
        <div className="h-72">
          <select className="font-bold text-lg ring-0 focus:outline-none bg-transparent">
            <option>Weekly Comparison</option>
          </select>
          <BarsDataset desc={expensesStatistics} />
        </div>
      }
    />
  );
};

export default CardStatistic;
