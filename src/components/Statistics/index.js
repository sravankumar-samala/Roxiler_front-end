import { useProductsContext } from "../../context/productsContex";
import { useFetchData } from "../../hooks/useFetch";
import convertJsonIntoJsObject from "../../helpers/convertJsonToJsObj";
import LoadingFlowerRatationView from "../LoadingFlowerRotation";
import StatisticsTableView from "./StatisticsTableView";
import NoDataView from "../NoDataView";
import StatsHeading from "../../helpers/productStatsHeading";
import "./index.css";

export default function Statistics() {
  const { month } = useProductsContext();
  const url = `https://roxilers-fullstack-application.onrender.com/statistics?month=${month}`;
  const { data, isLoading, error } = useFetchData(url);
  let statistics = null;
  if (data && data.length !== 0) {
    statistics = convertJsonIntoJsObject(data[0]);
  }

  return (
    <div className="statistics-container data-container">
      <StatsHeading month={month} headingText={"Statistics"} />
      {isLoading && <LoadingFlowerRatationView />}
      {error && <p>{error}</p>}
      {!isLoading && (
        <>
          {statistics?.length === 0 && <NoDataView />}
          {statistics?.length !== 0 && (
            <StatisticsTableView statisticsData={statistics} />
          )}
        </>
      )}
    </div>
  );
}
