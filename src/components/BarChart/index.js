import {
  ResponsiveContainer,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  CartesianGrid,
} from "recharts";
import StatsHeading from "../../helpers/productStatsHeading";
import { useProductsContext } from "../../context/productsContex";
import { useFetchData } from "../../hooks/useFetch";
import convertJsonIntoJsObject from "../../helpers/convertJsonToJsObj";
import LoadingFlowerRatationView from "../LoadingFlowerRotation";
import NoDataView from "../NoDataView";
import "./index.css";

export default function BarChartStats() {
  const { month } = useProductsContext();
  const url = `https://roxilers-fullstack-application.onrender.com/bar-chart-stats?month=${month}`;
  const { data, isLoading, error } = useFetchData(url);
  const barChartData = data?.map((each) => convertJsonIntoJsObject(each));

  return (
    <div className="bar-chart-container data-container">
      <StatsHeading headingText={"Bar Chart Stats"} month={month} />
      {isLoading && <LoadingFlowerRatationView />}
      {error && <p>{error}</p>}
      {!isLoading && (
        <>
          {data?.length === 0 && <NoDataView />}
          {data?.length !== 0 && (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barChartData} barSize={30}>
                <defs>
                  <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3300ff" />
                    <stop offset="100%" stopColor="#2ea0fb" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="priceRange" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="itemCount" fill="url(#colorBar)" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </>
      )}
    </div>
  );
}
