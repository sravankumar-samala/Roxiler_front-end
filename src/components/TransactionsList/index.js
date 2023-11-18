import { useProductsContext } from "../../context/productsContex";
import { useFetchData } from "../../hooks/useFetch";
import LoadingView from "../LoadingView";
import RenderTransactionsTable from "./RenderTransactionsTable";
import RenderPaginationTabs from "./RenderPaginationTabs";
import NoDataView from "../NoDataView";
import Limit from "./Limit";
import "./index.css";

export default function TransactionsList() {
  const { month, searchValue, currPage, limit } = useProductsContext();
  const url = `https://roxilers-fullstack-application.onrender.com/list-transactions?searchValue=${searchValue}&page=${+currPage}&month=${+month}&limit=${limit}`;
  const { data: transactions, isLoading, error } = useFetchData(url);

  return (
    <section className="transactions-list-container data-container">
      <div className="transactions-header-container">
        <h2>Transactions List</h2>
        <Limit />
      </div>

      {isLoading && <LoadingView />}
      {error && <p>{error}</p>}
      {!isLoading && (
        <>
          {transactions?.products.length === 0 && <NoDataView />}
          {transactions?.products.length !== 0 && (
            <>
              <RenderTransactionsTable transactionsData={transactions} />
            </>
          )}
        </>
      )}

      {transactions?.products.length !== 0 && (
        <RenderPaginationTabs transactionsData={transactions} />
      )}
    </section>
  );
}
