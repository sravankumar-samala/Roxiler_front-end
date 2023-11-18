import StatsHeading from "../../helpers/productStatsHeading";
import { useProductsContext } from "../../context/productsContex";
import { useFetchData } from "../../hooks/useFetch";
import convertJsonIntoJsObject from "../../helpers/convertJsonToJsObj";
import RenderPieChart from "./RenderPieChart";
import LoadingFlowerRatationView from "../LoadingFlowerRotation";
import NoDataView from "../NoDataView";
import "./index.css";

export default function PieChartStats() {
  const { month } = useProductsContext();
  const url = `https://roxilers-fullstack-application.onrender.com/categories-data?month=${month}`;
  const { data, isLoading, error } = useFetchData(url);
  let pieChartData = null;
  if (data && data.length !== 0) {
    pieChartData = data?.map((each) => convertJsonIntoJsObject(each));
  }

  return (
    <div className="pie-chart-container data-container">
      <StatsHeading headingText="Pie Chart Stats" month={month} />
      {isLoading && <LoadingFlowerRatationView />}
      {error && <p>{error}</p>}
      {!isLoading && (
        <>
          {pieChartData?.length === 0 && <NoDataView />}
          {pieChartData?.length !== 0 && (
            <RenderPieChart pieChartData={pieChartData} />
          )}
        </>
      )}
    </div>
  );
}
