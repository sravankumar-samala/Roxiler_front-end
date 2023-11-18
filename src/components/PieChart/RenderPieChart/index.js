import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import renderCustomizedLabel from "../../../helpers/renderCostomizableLabel";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// This below function and functionality is taken from recharts docs

export default function RenderPieChart({ pieChartData }) {
  if (pieChartData === null) return;

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Tooltip />
        <Legend />
        <Pie
          data={pieChartData}
          dataKey="itemCount"
          nameKey="category"
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
        >
          {pieChartData?.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
