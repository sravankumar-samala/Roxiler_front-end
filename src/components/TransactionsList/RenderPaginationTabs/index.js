import { useProductsContext } from "../../../context/productsContex";
import "./index.css";

export default function RenderPaginationTabs({ transactionsData }) {
  const { currPage, nextPage, prevPage } = useProductsContext();
  if (
    !transactionsData ||
    !transactionsData.products ||
    !transactionsData.products.length
  ) {
    return null;
  }
  const { totalPages } = transactionsData;
  const prevBtnDisabled = currPage === 1;
  const nextBtnDisabled = currPage === totalPages;

  return (
    <div className="pagination-buttons">
      <button
        type="button"
        className={prevBtnDisabled ? "disable-button" : ""}
        onClick={prevPage}
        disabled={prevBtnDisabled}
      >
        &lt;&lt; Previous
      </button>
      <p className="page-indicator">
        <span>{currPage}</span> of {totalPages}
      </p>

      <button
        type="button"
        className={nextBtnDisabled ? "disable-button" : ""}
        onClick={nextPage}
        disabled={nextBtnDisabled}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
}
